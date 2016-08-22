<?php

$prefijo = "";
$template = "";
error_reporting(0);
@ini_set("display_errors",0);

require("db/requires.php");
if(isset($_POST['frase'])){
   printVar($_POST);
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
    //Datos Acudiente
    $General2->idAcudiente=$idAcudiente;
    $General2->nombreCompleto=$_POST['nombreP'];
    $General2->email=$_POST['emailP'];
    $General2->numeroTelefonico=$_POST['numeroTelefonicoP'];
    $General2->terminos=$_POST['terminos'];
    $General2->frase=$_POST['frase'];
    $General2->menorEdad=$_POST['acudiente'];
    $General2->idFacebook=$_POST['idFacebook'];
    $General2->imagen=$_POST['imagen'];
    $idAcudiente=$General2->setInstancia("BbbmaParticipante");
    header("Location:gracias.html");
}

?>