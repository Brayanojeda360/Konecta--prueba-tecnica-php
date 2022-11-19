<?php 
	class Conexion{
		public $con;
		public function conectar(){
			$this->con;
			$this->con=mysqli_connect("localhost","root","","cafeteria");//No use un usuario diferente, tampoco contraseña para que al mommento de importar el proyecto sea mas facil de visualizar.
		}
	}
?>