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
            $dane = mysqli_query($db,"SELECT * FROM aparaty");
            $rows = mysqli_fetch_all($dane,MYSQLI_ASSOC);
            echo "<table border=0>";
            echo "<tr><th>Marka</th><th>Model</th><th>Opis</th><th>Rodzaj matrycy</th><th>Rozmiar matrycy</th><th>Zoom</th><th>Wielkość ekranu</th><th>Cena</th></tr>";
            foreach($rows as $u){
              echo "<tr>";
              echo "<td>{$u['marka']}</td>";
              echo "<td>{$u['model']}</td>";
              echo "<td>{$u['opis']}</td>";
              echo "<td>{$u['rodzaj_matrycy']}</td>";
              echo "<td>{$u['rozmiar_matrycy']}</td>";
              echo "<td>{$u['zoom']}</td>";
              echo "<td>{$u['wielkosc_ekranu']}</td>";
              echo "<td>{$u['cena']}</td>";
            }
            echo "</table>";


            //lub echo "$rows[0]['imie']"

            //echo "<pre>";
            //print_r($rows);
            //echo "</pre>";
        ?>
    </body>
</html>
