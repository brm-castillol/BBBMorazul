<?php

$prefijo = "";
$template = "";
error_reporting(0);
@ini_set("display_errors",0);

require("db/requires.php");
$General= new General();
$Deptos=$General->getInstanciaWhere("BbbmaDepartamento");
//printVar($Deptos);
$smarty->assign("Deptos",$Deptos);
$smarty->display("index.html");

?>