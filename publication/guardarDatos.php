<?php

$prefijo = "";
$template = "";
error_reporting(0);
@ini_set("display_errors",0);

require("db/requires.php");
if(isset($_POST['frase'])){
   // printVar($_POST);
    $General=new General();
    //Datos Acudiente
    $CamposTablas=$General->getCampos("BbbmaAcudiente");
    //printVar($CamposTablas);
    $datos=array();
    foreach ($CamposTablas as $key => $value) {
        // code...
        //printVar($key);
        //printVar($value);
        $General->$key=$_POST[$key];
        $datos[$key]=$_POST[$key];
    }
    $idAcudiente=$General->setInstancia("BbbmaAcudiente");
    //SUBIR imagen
    $General2=new General();
    $dir_subida = '/home/ubuntu/workspace/BBBMorazul/publication/uploads/';
    $fichero_subido = $dir_subida . basename($_FILES['fichero_usuario']['foto_actitud']);
    
    if (move_uploaded_file($_FILES['fichero_usuario']['tmp_name'], $fichero_subido)) {
        $General2->imagen=$fichero_subido;
    } else {
        $General2->imagen="Error";
    }
    //Datos Acudiente
    $General2->idAcudiente=$idAcudiente;
    $General2->nombreCompleto=$_POST['nombreP'];
    $General2->email=$_POST['emailP'];
    $General2->numeroTelefonico=$_POST['numeroTelefonicoP'];
    $General2->terminos=$_POST['terminos'];
    $General2->frase=$_POST['frase'];
    $General2->menorEdad=$_POST['acudiente'];
    $General2->idFacebook=$_POST['idFacebook'];
    printVar($datos);
    DB_DataObject::debugLevel(1);
    $idAcudiente=$General->setInstancia("BbbmaParticipante");
    die();
}

?>