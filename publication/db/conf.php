<?php
// debugging
//error_reporting(E_ALL);
//ini_set('display_errors',1);

//
// This is a common "BC Hack" to define the normal PATH_SEPARATOR variable
// in PHP -- normally defined in versions of PHP later than 4.3.0.  So this
// code gets activated on earlier versions.
//

if (!defined('PATH_SEPARATOR')) {
    if (defined('DIRECTORY_SEPARATOR') && DIRECTORY_SEPARATOR == "\\") {
        define('PATH_SEPARATOR', ';');
    } else {
        define('PATH_SEPARATOR', ':');
    }
}

$include_path = ini_get("include_path");

//@ini_set("include_path", $include_path . PATH_SEPARATOR . dirname($_SERVER["DOCUMENT_ROOT"])."/fbappAvianca/public_html/PEAR");

@ini_set("include_path", $include_path . PATH_SEPARATOR . $_SERVER["DOCUMENT_ROOT"]."/PEAR");
//echo ini_get("include_path");
//die();
// incluir Smarty
require($_SERVER["DOCUMENT_ROOT"]."/Smarty/libs/Smarty.class.php");

// conexion a BD

$username_link = 'sebas1022';
$password_link = '';
$host_link = 'localhost';
$database_link = 'bbb';
//*/

/**/
/*$username_link = "root";
$password_link = "1nt3r4ct1v3";
$database_link = "cd";
$host_link = 'localhost';
//*/

?>