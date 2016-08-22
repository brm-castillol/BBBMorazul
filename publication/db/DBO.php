<?php
require_once("conf.php");
require_once("DB.php");
require_once("DB/DataObject.php");

$optionsDataObject = &PEAR::getStaticProperty('DB_DataObject','options');

$optionsDataObject = array(
	'debug'			       => 0, // Permite detallar las consultas que ejecuta, tiene hasta 3 niveles de detalle
	'database'         => "mysql://$username_link:$password_link@$host_link/$database_link", // Configura la base de datos
	'schema_location'  => '/home/ubuntu/workspace/BBBMorazul/publication/db/',
	'class_location'   => '/home/ubuntu/workspace/BBBMorazul/publication/db/',
	'require_prefix'   => 'db/',
	'class_prefix'     => 'DataObject_',
	//'db_driver'        => 'MDB2',
	'generator_no_ini'   => true,
	'generate_link_methods'   => true
);
?>