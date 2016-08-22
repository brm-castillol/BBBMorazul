<?php
/**
 * Table Definition for bbbma_votos
 */
require_once 'DB/DataObject.php';

class DataObject_BbbmaVotos extends DB_DataObject 
{
    ###START_AUTOCODE
    /* the code below is auto generated do not remove the above tag */

    public $__table = 'bbbma_votos';         // table name
    public $idVoto;                          // int(4)  primary_key not_null
    public $idParticipante;                  // int(4)   not_null
    public $ip;                              // varchar(45)   not_null
    public $fecha;                           // datetime   not_null default_0000-00-00%2000%3A00%3A00

    /* Static get */
    function staticGet($k,$v=NULL) { return DB_DataObject::staticGet('DataObject_BbbmaVotos',$k,$v); }

    function table()
    {
         return array(
             'idVoto' =>  DB_DATAOBJECT_INT + DB_DATAOBJECT_NOTNULL,
             'idParticipante' =>  DB_DATAOBJECT_INT + DB_DATAOBJECT_NOTNULL,
             'ip' =>  DB_DATAOBJECT_STR + DB_DATAOBJECT_NOTNULL,
             'fecha' =>  DB_DATAOBJECT_STR + DB_DATAOBJECT_DATE + DB_DATAOBJECT_TIME + DB_DATAOBJECT_NOTNULL,
         );
    }

    function keys()
    {
         return array('idVoto');
    }

    function sequenceKey() // keyname, use native, native name
    {
         return array('idVoto', true, false);
    }

    function defaults() // column default values 
    {
         return array(
             'idVoto' => null,
             'idParticipante' => null,
             'ip' => null,
             'fecha' => null,
         );
    }

    /* the code above is auto generated do not remove the tag below */
    ###END_AUTOCODE
}
