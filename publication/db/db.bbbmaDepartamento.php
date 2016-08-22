<?php
/**
 * Table Definition for bbbma_departamento
 */
require_once 'DB/DataObject.php';

class DataObject_BbbmaDepartamento extends DB_DataObject 
{
    ###START_AUTOCODE
    /* the code below is auto generated do not remove the above tag */

    public $__table = 'bbbma_departamento';    // table name
    public $idDepto;                  // int(4)  primary_key not_null
    public $nombre;                          // varchar(45)   not_null
    public $fecha;                           // datetime   not_null default_0000-00-00%2000%3A00%3A00

    /* Static get */
    function staticGet($k,$v=NULL) { return DB_DataObject::staticGet('DataObject_BbbmaDepartamento',$k,$v); }

    function table()
    {
         return array(
             'idDepto' =>  DB_DATAOBJECT_INT + DB_DATAOBJECT_NOTNULL,
             'idPais' =>  DB_DATAOBJECT_INT + DB_DATAOBJECT_NOTNULL,
             'nombre' =>  DB_DATAOBJECT_STR + DB_DATAOBJECT_NOTNULL,
             'region' =>  DB_DATAOBJECT_STR + DB_DATAOBJECT_NOTNULL,
             'coordenada' =>  DB_DATAOBJECT_STR + DB_DATAOBJECT_NOTNULL,
             'fecha' =>  DB_DATAOBJECT_STR + DB_DATAOBJECT_DATE + DB_DATAOBJECT_TIME + DB_DATAOBJECT_NOTNULL,
         );
    }

    function keys()
    {
         return array('idDepto');
    }

    function sequenceKey() // keyname, use native, native name
    {
         return array('idDepto', true, false);
    }

    function defaults() // column default values 
    {
         return array(
             'idDepto' => null,
             "idPais"=>null,
             'nombre' => null,
             "region"=>null,
             "coordenada"=>null,
             'fecha' => null,
         );
    }

    /* the code above is auto generated do not remove the tag below */
    ###END_AUTOCODE
}
