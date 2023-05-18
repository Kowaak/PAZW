<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <style>
    *{
      color: white;
      background-color: black;
      text-align: center;
    }
        table{
          font-size: 20px;
          width: 100%;
        }
        img {
          border: 2px solid white;
        }
    </style>
  </head>
  <body>
    <table><tr><th>Code</th><th>Code2</th><th>Name</th><th>Continent</th><th>Region</th><th>Region</th><th>Region</th><th>Region</th><th>Region</th><th>Region</th><th>Region</th><th>Region</th><th>Region</th>
      <th>Region</th><th>Region</th></tr>
    <?php
      $flaga = $_GET['kraj'];
      $db = mysqli_connect('localhost','sbd','u','sbd_kraje');
      $wynik = mysqli_query($db, "SELECT * FROM Country WHERE Code2 = '$flaga';");
      $wiersz = mysqli_fetch_row($wynik);
      $kod = strtolower($flaga);

        echo "<img  src='https://flagcdn.com/h240/$kod.png'  height='240'";
        echo "<tr>";
        echo "<td>{$wiersz[0]}</td>";
        echo "<td>{$wiersz[1]}</td>";
        echo "<td>{$wiersz[2]}</td>";
        echo "<td>{$wiersz[3]}</td>";
        echo "<td>{$wiersz[4]}</td>";
        echo "<td>{$wiersz[5]}</td>";
        echo "<td>{$wiersz[6]}</td>";
        echo "<td>{$wiersz[7]}</td>";
        echo "<td>{$wiersz[8]}</td>";
        echo "<td>{$wiersz[9]}</td>";
        echo "<td>{$wiersz[10]}</td>";
        echo "<td>{$wiersz[11]}</td>";
        echo "<td>{$wiersz[12]}</td>";
        echo "<td>{$wiersz[13]}</td>";
        echo "<td>{$wiersz[14]}</td>";
        echo "</tr>";

      ?>
      </table>
  </body>
</html>
