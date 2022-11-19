<?php 
	include_once "productos.php"; 
	if(empty($_POST['x1']) || empty($_POST['x2']) || empty($_POST['x3']) || empty($_POST['x4']) || empty($_POST['x5']) || empty($_POST['x6'])){
		echo "1";
		exit();
	}else{
		$producto= new producto();
		$producto->nombre=$_POST['x1'];
		$producto->referencia=$_POST['x2'];
		$producto->precio=$_POST['x3'];
		$producto->peso=$_POST['x4'];
		$producto->categoria=$_POST['x5'];
		$producto->stock=$_POST['x6'];
		$producto->create();
	}

 ?>