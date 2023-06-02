<?php
include_once('f.php');
$rok = date("Y",$timestamp);
$mies = date("m",$timestamp);
for($i=1;$i<=12;$i++){
echo tabela_mie($i,$rok);

}

 ?>
