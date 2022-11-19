<?php 

		$cad='';
		$cad.='<table class="table" >';
		$cad.='	<tr>';
		$cad.='		<td><button id="new_product" class="btn " data-toggle="modal" data-target="#myModal"> <label style="color:#FF5733"> + </label> Nuevo producto</button></td>';
		$cad.='		<td></td>';
		$cad.='		<td></td>';
		$cad.='		<td></td>';
		$cad.='		<td></td>';
		$cad.='		<td></td>';
		$cad.='		<td></td>';
		$cad.='		<td></td>';
		$cad.='		<td></td>';
		$cad.='		<td><button id="lista_ventas" class="btn " data-toggle="modal" data-target="#myModal"> Lista de ventas </button> </td>';
		$cad.='	</tr>';
		$cad.='	<tr  style="font-weight:bold">';
		$cad.='		<td>Nombre</td>';
		$cad.='		<td>Referencia</td>';
		$cad.='		<td>Precio</td>';
		$cad.='		<td>Peso</td>';
		$cad.='		<td>Categoria</td>';
		$cad.='		<td>Stock</td>';
		$cad.='		<td>Fecha Creacion</td>';
		$cad.='		<td></td>';
		$cad.='		<td></td>';
		$cad.='		<td></td>';
		$cad.='	</tr>';
		include_once "productos.php";
		include_once "../ventas/ventas_class.php";
		$producto = producto::all();
		foreach ($producto as $prod ) {
			$cad.='<tr  >';
			$cad.='	<td>'.$prod->nombre.'</td>';
			$cad.='	<td>'.$prod->referencia.'</td>';
			$cad.='	<td> $ '.number_format($prod->precio).'</td>';
			$cad.='	<td>'.number_format($prod->peso).'</td>';
			$cad.='	<td>'.$prod->categoria.'</td>';
			$clientes = ventas::buscar_ventas($prod->id);
			$cant=0;
			foreach ($clientes as $cliente ) {
				$cant+=$cliente->cant;
			}
			$dispo=$prod->stock-$cant;
			$cad.='	<td>'.number_format($dispo).'</td>';
			$cad.='	<td>'.$prod->fecha_creacion.'</td>';
			$cad.='	<td><button class="edit btn " data-toggle="modal" data-target="#myModal" x1="'.$prod->nombre.'" x2="'.$prod->referencia.'" x3="'.$prod->precio.'" x4="'.$prod->peso.'" x5="'.$prod->categoria.'" x6="'.$prod->stock.'" x7="'.$prod->id.'"> Editar </button> </td>';
			$cad.='	<td><button class="delet btn "  x7="'.$prod->id.'" data_x="php/productos/ini"> Borrar </button></td>';
			$cad.='	<td><button class="vender btn " data-toggle="modal" data-target="#myModal" x1="'.$prod->nombre.'" x2="'.$prod->referencia.'" x3="'.$prod->precio.'" x4="'.$prod->peso.'" x5="'.$prod->categoria.'" x6="'.$dispo.'" x7="'.$prod->id.'"> Vender </button> </td>';
			$cad.='</tr>';
		}
		echo $cad;
	?>