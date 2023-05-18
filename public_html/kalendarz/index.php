<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <form>
      Rok: <input type="number" id="rok">
      Miesiac: <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
      </select>
    <?php

    $db = mysqli_connect('localhost','u2m31','u2m31123','u2m31_kalendarz');
    $wynik = mysqli_query($db, "SELECT * FROM swieta;");
    $wiersz = mysqli_fetch_all($wynik, MYSQLI_ASSOC);



    function tabela_mie($mies,$rok){
      $tm = array('Styczen','Luty','Marzec','Kwiecien','Maj','Czerwiec','Lipiec','Sierpien','Wrzesien','Pazdziernik','Listopad','Grudzien');
      $timestamp = mktime(0,0,0,$mies,1,$rok);
      $ilosc = date("t",$timestamp);
      $pierwszydzien = date("N",$timestamp);
      $ilekrokow = ceil(($ilosc + $pierwszydzien)/7)*7;
      $html ='';
      $html.= "<table>";
      $html.= "<tr><td colspan='7'>{$tm[$mies-1]}</td></tr>";
      $html.= "<tr><th>Pon</th><th>Wt</th><th>Sr</th><th>Czw</th><th>Pt</th><th>Sob</th><th>Nie</th></tr>";
      for ($i=1; $i <= $ilekrokow; $i++) {
        if ($i>=$pierwszydzien && $i<$pierwszydzien+$ilosc){
          $html.= "<td style='border: 2px solid white'>".($i-$pierwszydzien+1)."</td>";

        }else {
          $html.= "<td></td>";
        }
        if ($i%7==0 && $i<=$ilosc) {
          $html.= "</tr><tr>";
        }else if($i%7==0 && $i>$ilosc) {
          $html.="</tr>";
        }
      }
      $html.= "</tr>";
      $html.= "</table>";
      return $html;
    }

    $rok = date("Y",$timestamp);
    $mies = date("m",$timestamp);
    for($i=1;$i<=12;$i++){
    echo tabela_mie($i,2023);

  }
    ?>
  </body>
</html>
