<?php
//DB
global $prefijo;
$prefijo="";

require("./db/conf.php");
require("./db/DBO.php");

// db requires
require("./db/requires.ini.php");

// class

require("./class/class.General.inc.php");


$smarty = new Smarty();
/*
$smarty->compile_check = true;
*/
$smarty->left_delimiter = '{#';
$smarty->right_delimiter = '#}';

function printVar($variable, $title= "") {
	//$var= print_r($variable, true);
	echo "<pre style='background-color:#dddd00; border: dashed thin #000000; font-size:12px'><strong>[$title]</strong><br/>";
	var_dump($variable);
	echo"</pre>";
}
function cambiaParaEnvio($cadena){
	$cadena = htmlentities($cadena,ENT_NOQUOTES,"ISO8859-1");

	return($cadena);
}
?>