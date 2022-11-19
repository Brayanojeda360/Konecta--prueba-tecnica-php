<?php 
	if ( $_POST['y']==1 ){
		include_once "create.php";
		exit();
	}elseif ( $_POST['y']==2 ){
		include_once "update.php";
		exit();
	}elseif ( $_POST['y']==3 ){
		include_once "delete.php";
		exit();
	}
	
?>