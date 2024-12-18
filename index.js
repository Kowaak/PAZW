var http = require('http');
var mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '4m'
});

db.connect((err) => {
    if (err) {
        console.error('Błąd ' + err.stack);
        return;
    }
    console.log('Połączono');
});

http.createServer(function (request, response) {
    if (request.method === 'POST' && request.url === '/submit') {
        let body = '';

        // Zbieranie danych z żądania
        request.on('data', chunk => {
            body += chunk.toString(); // Konwertuj Buffer na string
        });

        // Po zebraniu wszystkich danych
        request.on('end', () => {
            // Ręczne parsowanie danych formularza
            const postData = {};
            body.split('&').forEach(pair => {
                const [key, value] = pair.split('=');
                postData[decodeURIComponent(key)] = decodeURIComponent(value.replace(/\+/g, ' '));
            });

            // Przygotowanie zapytania SQL do wstawienia danych
            const sql = 'INSERT INTO users (imie, nazwisko) VALUES (?, ?)';
            const values = [postData.imie, postData.nazwisko];

            // Wykonanie zapytania SQL
            db.query(sql, values, (error, results) => {
                if (error) {
                    console.error('Błąd podczas wstawiania danych: ' + error.stack);
                    response.writeHead(500, { 'Content-Type': 'text/plain' });
                    response.end('Wystąpił błąd podczas wstawiania danych.');
                    return;
                }

                // Po wstawieniu, renderuj główną stronę z formularzem i danymi
                renderMainPage(response);
            });
        });
    } else if (request.method === 'GET' && request.url === '/') {
        // Renderuj główną stronę z formularzem i danymi
        renderMainPage(response);
    } else {
        // Obsługa 404 Nie znaleziono
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('404 Nie znaleziono');
    }
}).listen(8081);

function renderMainPage(response) {
    // Pobierz dane z bazy danych
    const sql = 'SELECT * FROM users';
    db.query(sql, (error, results) => {
        if (error) {
            console.error('Błąd podczas pobierania danych: ' + error.stack);
            response.writeHead(500, { 'Content-Type': 'text/plain' });
            response.end('Wystąpił błąd podczas pobierania danych.');
            return;
        }

        // Utwórz tabelę HTML do wyświetlania danych
        let table = '<table border="1"><tr><th>id</th><th>Imie</th><th>Nazwisko</th></tr>';
        results.forEach(row => {
            table += `<tr><td>${row.id}</td><td>${row.imie}</td><td>${row.nazwisko}</td></tr>`;
        });
        table += '</table>';

        // Renderuj formularz i tabelę danych
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(`
            <html>
                <body>
                    <h1>Formularz</h1>
                    <form action="/submit" method="POST">
                        <label for="imie">Imie:</label>
                        <input type="text" id="imie" name="imie" required><br>
                        <label for="nazwisko">Nazwisko:</label>
                        <input type="text" id="nazwisko" name="nazwisko" required><br>
                        <input type="submit" value="Submit">
                    </form>
                    <br>
                    <h2>Dane:</h2>
                    ${table}
                </body>
            </html>
        `);
    });
}

console.log('LINK: http://127.0.0.1:8081/');
