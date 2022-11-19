<?php
	include_once "../conexion/conexion.php"; 
	class producto extends Conexion{
		public $id;
		public $nombre;
		public $referencia;
		public $precio;
		public $peso;
		public $categoria;
		public $stock;
		 
		//CREATE
		public function create(){
			$this->conectar();
			$pre=mysqli_prepare($this->con," INSERT INTO `productos`(`nombre`, `referencia`, `precio`, `peso`, `categoria`, `stock`) VALUES (?,?,?,?,?,?)");
			$pre->bind_param("ssiisi",$this->nombre,$this->referencia,$this->precio,$this->peso,$this->categoria,$this->stock);
			$pre->execute();
			$res=$pre->get_result();
		}
		//Read
		public static function all(){
			$conexion = new Conexion();
			$conexion->conectar();
		
			$pre=mysqli_prepare($conexion->con," SELECT `id`, `nombre`, `referencia`, `precio`, `peso`, `categoria`, `stock`, date(fecha_creacion) as fecha_creacion FROM productos");
			$pre->execute();
			$res=$pre->get_result();
			$productos=[];
			while ($producto = $res->fetch_object(producto::class)) 
				array_push($productos, $producto);
			return $productos;

		}
		public  function update(){
			$conexion = new Conexion();
			$conexion->conectar();
			$pre=mysqli_prepare($conexion->con," UPDATE `productos` SET `nombre`=?,`referencia`=?,`precio`=?,`peso`=?,`categoria`=?,`stock`=? WHERE `id`=? ");
			$pre->bind_param("ssiisii",$this->nombre,$this->referencia,$this->precio,$this->peso,$this->categoria,$this->stock,$this->id);
			$pre->execute();
			$res=$pre->get_result();
		}
		public function delete(){
			$this->conectar();
			$pre=mysqli_prepare($this->con," DELETE FROM productos WHERE id=?");
			$pre->bind_param("i",$this->id);
			$pre->execute();

		}
		
		//Obtener un producto por su id PK
		public static function getbyid($id){
			$conexion = new Conexion();
			$conexion->conectar();
			$pre=mysqli_prepare($conexion->con, "SELECT * FROM productos WHERE id=?");
			$pre->bind_param("i",$id);
			$pre->execute();
			$res = $pre->get_result();
			return $res->fetch_object(producto::class);
		}
	}
?>