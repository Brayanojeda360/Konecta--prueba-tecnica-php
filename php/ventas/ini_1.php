<?php 
	include_once "ventas_class.php"; 
	if($_POST['y']==1){
		//CREATE
		$ventas= new ventas();
		$ventas->id_producto=$_POST['x7'];//id_producto
		$ventas->cant=$_POST['x1'];//cant
		$ventas->create();
	}else if($_POST['y']==2){
		//READ
		$ventas = ventas::all();
		echo json_encode($ventas);
	}else if($_POST['y']==3){
		$delete=new ventas();
		$delete->id=$_POST['x7'];//id_venta
		$delete->delete();
	}
?>