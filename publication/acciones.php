<?php
$prefijo = "";
$template = "";
error_reporting(0);
@ini_set("display_errors",0);
require("db/requires.php");
//printVar($_POST['varCrtl']);
if(isset($_POST['varCrtl']) && is_numeric((int)$_POST['varCrtl']) ){
    $varCrtl=(int)$_POST['varCrtl'];
    $General= new General();
    switch ($varCrtl) {
        case 1:
            $idDepto=(int)$_POST['idDepto'];
            $Ciudades=$General->getInstanciaWhere("BbbmaCiudad","","idDepto=".$idDepto);
            echo json_encode($Ciudades);
        break;
    }
}
?>