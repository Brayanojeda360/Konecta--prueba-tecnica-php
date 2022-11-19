<?php
	include_once "../conexion/conexion.php"; 
	class ventas extends Conexion{
		public $id;
		public $id_producto;
		public $cant;
		
		//CREATE
		public function create(){
			$this->conectar();
			$pre=mysqli_prepare($this->con," INSERT INTO `ventas_class`( `id_producto`, `cant`) VALUES (?,?)");
			$pre->bind_param("ii",$this->id_producto,$this->cant);
			$pre->execute();
			$res=$pre->get_result();
		}
		//Read
		public static function all(){
			$conexion = new Conexion();
			$conexion->conectar();
		
			$pre=mysqli_prepare($conexion->con," SELECT `id_venta`, `cant`, `fecha_venta`,productos.nombre,productos.referencia FROM `ventas_class` INNER JOIN productos ON productos.id=ventas_class.id_producto ");
			$pre->execute();
			$res=$pre->get_result();
			$ventas=[];
			while ($venta= $res->fetch_object(ventas::class)) 
				array_push($ventas, $venta);
			return $ventas;

		}

		//Obtener la suma de la venta por su id fk
		public static function buscar_ventas($id_producto){
			$conexion = new Conexion();
			$conexion->conectar();
			$pre=mysqli_prepare($conexion->con, "SELECT SUM(cant) as cant FROM ventas_class WHERE id_producto=?");
			$pre->bind_param("s",$id_producto);
			$pre->execute();
			$res=$pre->get_result();
			$clientes=[];
			while ($cliente = $res->fetch_object(ventas::class)) 
				array_push($clientes, $cliente);
			return $clientes;
		}
		public function delete(){
			$this->conectar();
			$pre=mysqli_prepare($this->con," DELETE FROM ventas_class WHERE id_venta=?");
			$pre->bind_param("i",$this->id);
			$pre->execute();
		}
	}
?>