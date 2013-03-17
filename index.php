<?php

require_once __DIR__.'/lib/F3.php'; 
//F3::set('hostname',$_SERVER['HTTP_HOST']); 
F3::call(':config'); 
F3::call(':routes'); 
F3::run(); 

?>
