<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Kraje</title>
    <style>
    *{
      color: white;
      background-color: black;
      text-align: center;
    }
        fieldset{
            border: 4px solid white;
        }
        table{
          font-size: 20px;
          width: 100%;
        }
    </style>
  </head>
  <body>
  <fieldset><legend><h1>Kraje</h1></legend>
    <table><tr><th>Code</th><th>Code2</th><th>Name</th><th>Continent</th><th>Region</th></tr>
    <?php
    $str = $_GET['str'];
    if(empty($str)){$str = 1;}
    $l2 = $str*25;
    $l1 = $l2-25;
    $db = mysqli_connect('localhost','sbd','u','sbd_kraje');
    $wynik = mysqli_query($db, "SELECT Code,Code2,Name,Continent,Region FROM Country LIMIT $l1,$l2;");
    $wiersz = mysqli_fetch_all($wynik, MYSQLI_ASSOC);
    foreach ($wiersz as $x) {
      echo "<tr>";
      echo "<td>{$x['Code']}</td>";
      echo "<td>{$x['Code2']}</td>";
      echo "<td><a href='country.php?kraj={$x['Code2']}'>{$x['Name']}</a></td>";
      echo "<td>{$x['Continent']}</td>";
      echo "<td>{$x['Region']}</td>";
      echo "</tr>";
    }
    ?>
  </table>
   </fieldset>
  </body>
</html>
