<?php 
	include_once "productos.php"; 
	$delete=new producto();
	$delete->id=$_POST['x'];//id
	$delete->delete();
?>