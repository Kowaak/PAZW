<?php
    $odbiorca = 'turnoma@poczta.onet.pl';
    $temat = 'Wiadomość ze strony Sweetdreams';
    
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: <cukiernia@sweetdreams.net>' . "\r\n";
    //$headers .= 'Cc: myboss@example.com' . "\r\n";
    
    $tresc = "
    <html>
        <head></head>
        <body>
            <table>
                <tr><td>Imię:</td><td>".$_POST['imie']."</td></tr>
                <tr><td>Nazwisko:</td><td>".$_POST['nazwisko']."</td></tr>
                <tr><td>email:</td><td>".$_POST['email']."</td></tr>
                <tr><td>Wiadomość:</td><td>".$_POST['wiadomosc']."</td></tr>
            </table>
        </body>
    </html
    ";


    mail( $odbiorca, $temat, $tresc, $headers );
    echo "Dziękujemy. Twoja wiadomość została wysłana.";
?>
