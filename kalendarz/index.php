<!DOCTYPE html>
<html lang="pl" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Kalendarz</title>
    <link rel="stylesheet" href="styl.css">
  </head>
  <body>
    <form method="post">
      <input type="text" placeholder="Tytul" maxlength="200"><br>
      <input type="textarea" placeholder="Opis" maxlength="200"><br>
      <input type="number" placeholder="Dzień" max="31" min="0">
      <input type="number" placeholder="Miesiąc" max="12" min="0"> 
      <br><input type="submit" value="Stwórz">
    </form>
    <?php
    
    $db = mysqli_connect('localhost','root','','u2m31_kalendarz');
    $wynik = mysqli_query($db, "SELECT * FROM wydarzenia;");
    $wiersz = mysqli_fetch_all($wynik, MYSQLI_ASSOC); 

    function tabela_mie($mies,$rok){
      $tm = array('Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień');
      $timestamp = mktime(0,0,0,$mies,1,$rok);
      $ilosc = date("t",$timestamp);
      $pierwszydzien = date("N",$timestamp);
      $ilekrokow = ceil(($ilosc + $pierwszydzien)/7)*7;
      $html ='';
      $html.= "<table>";
      $html.= "<tr><td colspan='7'><h2>{$tm[$mies-1]}</h2></td></tr>";
      $html.= "<tr><th>Pon</th><th>Wt</th><th>Sr</th><th>Czw</th><th>Pt</th><th>Sob</th><th>Nie</th></tr>";
      for ($i=1; $i <= $ilekrokow; $i++) {
        if ($i>=$pierwszydzien && $i<$pierwszydzien+$ilosc){
          if ($i%7==0 && $i<=$ilosc + 5) {
            $html.= "<td class='swieto' style='border: 2px solid white'>".($i-$pierwszydzien+1)."</td>";
          }else{
          $html.= "<td style='border: 2px solid white'>".($i-$pierwszydzien+1)."</td>";
          }
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

    //@$rok = date("Y",$timestamp);
    //$rok = $_POST['rok'];
    //$mies = date("m",$timestamp);
    for($i=1;$i<=12;$i++){
    echo tabela_mie($i,2023);
    }
    mysqli_close($db);
    ?>
  </body>
</html>
