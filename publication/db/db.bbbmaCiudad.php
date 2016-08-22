<?php
/**
 * Table Definition for bbbma_ciudad
 */
require_once 'DB/DataObject.php';

class DataObject_BbbmaCiudad extends DB_DataObject 
{
    ###START_AUTOCODE
    /* the code below is auto generated do not remove the above tag */

    public $__table = 'bbbma_ciudad';        // table name
    public $idCiudad;                        // int(4)  primary_key not_null
    public $idDepto;                  // int(4)   not_null
    public $nombre;                          // varchar(45)   not_null
    public $fecha;                           // datetime   not_null default_0000-00-00%2000%3A00%3A00

    /* Static get */
    function staticGet($k,$v=NULL) { return DB_DataObject::staticGet('DataObject_BbbmaCiudad',$k,$v); }

    function table()
    {
         return array(
             'idCiudad' =>  DB_DATAOBJECT_INT + DB_DATAOBJECT_NOTNULL,
             'idDepto' =>  DB_DATAOBJECT_INT + DB_DATAOBJECT_NOTNULL,
             'nombre' =>  DB_DATAOBJECT_STR + DB_DATAOBJECT_NOTNULL,
             'fecha' =>  DB_DATAOBJECT_STR + DB_DATAOBJECT_DATE + DB_DATAOBJECT_TIME + DB_DATAOBJECT_NOTNULL,
         );
    }

    function keys()
    {
         return array('idCiudad');
    }

    function sequenceKey() // keyname, use native, native name
    {
         return array('idCiudad', true, false);
    }

    function defaults() // column default values 
    {
         return array(
             'idCiudad' => null,
             'idDepto' => null,
             'nombre' => null,
             'fecha' => null,
         );
    }

    /* the code above is auto generated do not remove the tag below */
    ###END_AUTOCODE
}
