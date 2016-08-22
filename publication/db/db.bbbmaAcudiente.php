<?php
/**
 * Table Definition for bbbma_acudiente
 */
require_once 'DB/DataObject.php';

class DataObject_BbbmaAcudiente extends DB_DataObject 
{
    ###START_AUTOCODE
    /* the code below is auto generated do not remove the above tag */

    public $__table = 'bbbma_acudiente';     // table name
    public $idAcudiente;                     // int(4)  primary_key not_null
    public $nombreCompleto;                  // varchar(250)   not_null
    public $tipoDocumento;                   // enum(2)   not_null
    public $documento;                       // varchar(45)   not_null
    public $idDepartamento;                  // int(4)   not_null
    public $idCiudad;                        // int(4)   not_null
    public $email;                           // varchar(150)   not_null
    public $numTelefono;                     // varchar(45)   not_null
    public $direccion;                       // text   not_null
    public $fecha;                           // datetime   not_null default_0000-00-00%2000%3A00%3A00

    /* Static get */
    function staticGet($k,$v=NULL) { return DB_DataObject::staticGet('DataObject_BbbmaAcudiente',$k,$v); }

    function table()
    {
         return array(
             'idAcudiente' =>  DB_DATAOBJECT_INT + DB_DATAOBJECT_NOTNULL,
             'nombreCompleto' =>  DB_DATAOBJECT_STR + DB_DATAOBJECT_NOTNULL,
             'tipoDocumento' =>  DB_DATAOBJECT_STR + DB_DATAOBJECT_NOTNULL,
             'documento' =>  DB_DATAOBJECT_STR + DB_DATAOBJECT_NOTNULL,
             'idDepartamento' =>  DB_DATAOBJECT_INT + DB_DATAOBJECT_NOTNULL,
             'idCiudad' =>  DB_DATAOBJECT_INT + DB_DATAOBJECT_NOTNULL,
             'email' =>  DB_DATAOBJECT_STR + DB_DATAOBJECT_NOTNULL,
             'numTelefono' =>  DB_DATAOBJECT_STR + DB_DATAOBJECT_NOTNULL,
             'direccion' =>  DB_DATAOBJECT_STR + DB_DATAOBJECT_TXT + DB_DATAOBJECT_NOTNULL,
             'fecha' =>  DB_DATAOBJECT_STR + DB_DATAOBJECT_DATE + DB_DATAOBJECT_TIME + DB_DATAOBJECT_NOTNULL,
         );
    }

    function keys()
    {
         return array('idAcudiente');
    }

    function sequenceKey() // keyname, use native, native name
    {
         return array('idAcudiente', true, false);
    }

    function defaults() // column default values 
    {
         return array(
             'idAcudiente' => null,
             'nombreCompleto' => null,
             'tipoDocumento' => null,
             'documento' => null,
             'idDepartamento' => null,
             'idCiudad' => null,
             'email' => null,
             'numTelefono' => null,
             'direccion' => null,
             'fecha' => null,
         );
    }

    /* the code above is auto generated do not remove the tag below */
    ###END_AUTOCODE
}
