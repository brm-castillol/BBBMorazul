<?php
/**
 * Table Definition for bbbma_participante
 */
require_once 'DB/DataObject.php';

class DataObject_BbbmaParticipante extends DB_DataObject 
{
    ###START_AUTOCODE
    /* the code below is auto generated do not remove the above tag */

    public $__table = 'bbbma_participante';    // table name
    public $idParticipante;                  // int(4)  primary_key not_null
    public $idAcudiente;                     // int(4)   not_null
    public $nombreCompleto;                  // varchar(250)   not_null
    public $numeroTelefonico;                // varchar(45)   not_null
    public $terminos;                        // enum(1)   not_null
    public $imagen;                          // text   not_null
    public $frase;                           // varchar(250)   not_null
    public $menorEdad;                       // enum(1)   not_null
    public $fecha;                           // datetime   not_null default_0000-00-00%2000%3A00%3A00

    /* Static get */
    function staticGet($k,$v=NULL) { return DB_DataObject::staticGet('DataObject_BbbmaParticipante',$k,$v); }

    function table()
    {
         return array(
             'idParticipante' =>  DB_DATAOBJECT_INT + DB_DATAOBJECT_NOTNULL,
             'idAcudiente' =>  DB_DATAOBJECT_INT + DB_DATAOBJECT_NOTNULL,
             'nombreCompleto' =>  DB_DATAOBJECT_STR + DB_DATAOBJECT_NOTNULL,
             'numeroTelefonico' =>  DB_DATAOBJECT_STR + DB_DATAOBJECT_NOTNULL,
             'terminos' =>  DB_DATAOBJECT_STR + DB_DATAOBJECT_NOTNULL,
             'imagen' =>  DB_DATAOBJECT_STR + DB_DATAOBJECT_TXT + DB_DATAOBJECT_NOTNULL,
             'frase' =>  DB_DATAOBJECT_STR + DB_DATAOBJECT_NOTNULL,
             'menorEdad' =>  DB_DATAOBJECT_STR + DB_DATAOBJECT_NOTNULL,
             'fecha' =>  DB_DATAOBJECT_STR + DB_DATAOBJECT_DATE + DB_DATAOBJECT_TIME + DB_DATAOBJECT_NOTNULL,
         );
    }

    function keys()
    {
         return array('idParticipante');
    }

    function sequenceKey() // keyname, use native, native name
    {
         return array('idParticipante', true, false);
    }

    function defaults() // column default values 
    {
         return array(
             'idParticipante' => null,
             'idAcudiente' => null,
             'nombreCompleto' => null,
             'numeroTelefonico' => null,
             'terminos' => null,
             'imagen' => null,
             'frase' => null,
             'menorEdad' => null,
             'fecha' => null,
         );
    }

    /* the code above is auto generated do not remove the tag below */
    ###END_AUTOCODE
}
