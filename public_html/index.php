<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title></title>
        <link rel="stylesheet" href="styl.css">
    </head>
    <body>
        <?php


            $db = mysqli_connect("localhost","u2m31","u2m31123","u2m31_projekt");
            $dane = mysqli_query($db,"SELECT * FROM klienci");
            $rows = mysqli_fetch_all($dane,MYSQLI_ASSOC);
            echo "<table border=0>";
            echo "<tr><th>Imie</th><th>nazwisko</th></tr>";
            foreach($rows as $u){
              echo "<tr>";
              echo "<td>{$u['imie']}</td>";
              echo "<td>{$u['nazwisko']}</td>";
            }
            echo "</table>";


            //lub echo "$rows[0]['imie']"

            //echo "<pre>";
            //print_r($rows);
            //echo "</pre>";
        ?>
    </body>
</html>
