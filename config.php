<?php

F3::set('basepath','/exp');  

F3::set('RELEASE',FALSE);  
F3::set('DEBUG',TRUE);     



F3::set('E404','modele_no_auth.htm'); 
F3::set('E401','layout.htm');


F3::set('extlink','window.open(this.href); return false;');

F3::set('GUI','gui/'); 
F3::set('AUTOLOAD','class/'); 

F3::set('site','Fatfree'); 

F3::set('salt','salt');    

F3::set('timeformat','d M Y H:i:s'); 

F3::set('DB',  
	array(
		'dsn'=>'mysql:host=localhost;port=3306;dbname=expense',
		'user'=>'root',
		'password'=>'',
		'options'=>array(PDO::MYSQL_ATTR_INIT_COMMAND=>'SET NAMES utf8')
	)
);
?>
