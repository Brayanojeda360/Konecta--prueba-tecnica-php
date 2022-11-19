$(document).ready(function () {
    lista();
});
function new_product(){
	var html='';
		html+='<div class="modal-dialog">';
		html+='  <div class="modal-content">';
		html+='      <div class="modal-header">';
		html+='        <button type="button" class="close" data-dismiss="modal">&times;</button>';
		html+='        <h4 class="modal-title">Nuevo producto</h4>';
		html+='      </div>';
		html+='      <div class="modal-body">';
		html+='			<fieldset>';
		html+='	   				<div class="col-lg-4 col-md-4 col-sm-4 col-xs-5">';
    	html+='	   					<label for="validationDefault01">Nombre del producto</label>';
    	html+='						<input type="text"  class="form-control" id="x1" autocomplete="off" /> ';
    	html+='	  				</div>';
    	html+='	   				<div class="col-lg-4 col-md-4 col-sm-4 col-xs-5">';
    	html+='	   					<label for="validationDefault01">Referencia</label>';
    	html+='						<input type="text"  class="form-control" id="x2" autocomplete="off" /> ';
    	html+='	  				</div>';
    	html+='	   				<div class="col-lg-4 col-md-4 col-sm-4 col-xs-5">';
    	html+='	   					<label for="validationDefault01">Precio</label>';
    	html+='						<input type="number"  class="form-control" id="x3" autocomplete="off" /> ';
    	html+='	  				</div>';
    	html+='	   				<div class="col-lg-4 col-md-4 col-sm-4 col-xs-5">';
    	html+='	   					<label for="validationDefault01">Peso</label>';
    	html+='						<input type="number"  class="form-control" id="x4" autocomplete="off" /> ';
    	html+='	  				</div>';
    	html+='	   				<div class="col-lg-4 col-md-4 col-sm-4 col-xs-5">';
    	html+='	   					<label for="validationDefault01">Categoria</label>';
    	html+='						<input type="text"  class="form-control" id="x5" autocomplete="off" /> ';
    	html+='	  				</div>';
    	html+='	   				<div class="col-lg-4 col-md-4 col-sm-4 col-xs-5">';
    	html+='	   					<label for="validationDefault01">Stock</label>';
    	html+='						<input type="number"  class="form-control" id="x6" autocomplete="off" /> ';
    	html+='	  				</div>';
		html+='			</fieldset>';
		html+='      </div>';
		html+='      <div class="modal-footer">';
        html+='        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>';
		html+='        <button type="button" class="btn btn-default" id="save" data_x="php/productos/ini">Guardar</button>';
		html+='      </div>';
		html+='   </div>';
	  	html+='</div>';
	$("#myModal").html(html);
	$("#save").on("click",save);  
}
function save(){
	var x1 = $("#x1").val();
	var x2 = $("#x2").val();
	var x3 = $("#x3").val();
	var x4 = $("#x4").val();
	var x5 = $("#x5").val();
	var x6 = $("#x6").val();
	var url_x = $(this).attr('data_x');
    var y=1;
	$.ajax({
    	url:url_x+".php",
    	method:"POST",
    	data:{"x1":x1,"x2":x2,"x3":x3,"x4":x4,"x5":x5,"x6":x6,"y":y},
    	success:function(data){
    		if(data == 1 ) {
    			alert(" Todos los campos son obligatorios ");
    		} else {
                lista();
    			$("#myModal").modal('toggle');
    		}
    	}
    });
}

function edit(){
    var x1 = $(this).attr("x1");
    var x2 = $(this).attr("x2");
    var x3 = $(this).attr("x3");
    var x4 = $(this).attr("x4");
    var x5 = $(this).attr("x5");
    var x6 = $(this).attr("x6");
    var x7 = $(this).attr("x7");
    var html='';
        html+='<div class="modal-dialog" style="font-weight:normal;">';
        html+='  <div class="modal-content">';
        html+='      <div class="modal-header">';
        html+='        <button type="button" class="close" data-dismiss="modal">&times;</button>';
        html+='        <h4 class="modal-title">Actualizar producto : '+x1+'</h4>';
        html+='      </div>';
        html+='      <div class="modal-body">';
        html+='         <fieldset>';
        html+='                 <div class="col-lg-4 col-md-4 col-sm-4 col-xs-5">';
        html+='                     <label for="validationDefault01">Nombre del producto</label>';
        html+='                     <input type="text"  class="form-control" id="x1"  value="'+x1+'" autocomplete="off" /> ';
        html+='                 </div>';
        html+='                 <div class="col-lg-4 col-md-4 col-sm-4 col-xs-5">';
        html+='                     <label for="validationDefault01">Referencia</label>';
        html+='                     <input type="text"  class="form-control" id="x2" value="'+x2+'" autocomplete="off" /> ';
        html+='                 </div>';
        html+='                 <div class="col-lg-4 col-md-4 col-sm-4 col-xs-5">';
        html+='                     <label for="validationDefault01">Precio</label>';
        html+='                     <input type="number"  class="form-control" id="x3" value="'+x3+'" autocomplete="off" /> ';
        html+='                 </div>';
        html+='                 <div class="col-lg-4 col-md-4 col-sm-4 col-xs-5">';
        html+='                     <label for="validationDefault01">Peso</label>';
        html+='                     <input type="number"  class="form-control" id="x4" value="'+x4+'" autocomplete="off" /> ';
        html+='                 </div>';
        html+='                 <div class="col-lg-4 col-md-4 col-sm-4 col-xs-5">';
        html+='                     <label for="validationDefault01">Categoria</label>';
        html+='                     <input type="text"  class="form-control" id="x5" value="'+x5+'" autocomplete="off" /> ';
        html+='                 </div>';
        html+='                 <div class="col-lg-4 col-md-4 col-sm-4 col-xs-5">';
        html+='                     <label for="validationDefault01">Stock</label>';
        html+='                     <input type="number"  class="form-control" id="x6" value="'+x6+'" autocomplete="off" /> ';
        html+='                 </div>';
        html+='         </fieldset>';
        html+='      </div>';
        html+='      <div class="modal-footer">';
        html+='       <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>';
        html+='        <button type="button" class="btn btn-default" id="update" data_x="php/productos/ini" x7="'+x7+'" >Actualizar</button>';
        html+='      </div>';
        html+='   </div>';
        html+='</div>';
        $("#myModal").html(html);
        $("#update").on("click",update);
}
function update() {
    var x1 = $("#x1").val();
    var x2 = $("#x2").val();
    var x3 = $("#x3").val();
    var x4 = $("#x4").val();
    var x5 = $("#x5").val();
    var x6 = $("#x6").val();
    var url_x = $(this).attr('data_x');
    var x7 = $(this).attr('x7');
    var y=2;
    $.ajax({
        url:url_x+".php",
        method:"POST",
        data:{"x1":x1,"x2":x2,"x3":x3,"x4":x4,"x5":x5,"x6":x6,"x7":x7,"y":y},
        success:function(data){
            if( data == 1 ) {
                alert(" Todos los campos son obligatorios ");
            } else {
                lista();
                $("#myModal").modal('toggle');
            } 
        }
    });
}

function delet(){
    var resultado = window.confirm('Estas seguro?');
    if (resultado === true) {
        var x = $(this).attr("x7");
        var url_x = $(this).attr('data_x');
        var y =3;
        $.ajax({
            url:url_x+".php",
            method:"POST",
            data:{ "x":x,"y":y },
            success:function(data){
               lista();
            }
        });  
    }
}

function vender(){
    var x1 = $(this).attr("x1");
    var x2 = $(this).attr("x2");
    var x3 = $(this).attr("x3");
    var x4 = $(this).attr("x4");
    var x5 = $(this).attr("x5");
    var x6 = $(this).attr("x6");
    var x7 = $(this).attr("x7");
    if ( x6 <=0){
        alert(" Stock en 0, actualiza el inventario. ");
        $("#myModal").modal('toggle');
    }else{
        var html='';
            html+='<div class="modal-dialog" style="font-weight:normal;">';
            html+='  <div class="modal-content">';
            html+='      <div class="modal-header">';
            html+='        <button type="button" class="close" data-dismiss="modal">&times;</button>';
            html+='        <h4 class="modal-title"> Vender </h4>';
            html+='      </div>';
            html+='      <div class="modal-body">';
            html+='         <fieldset>';
            html+='                 <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">';
            html+='                     <label for="validationDefault01"><b> Nombre del producto : </b> '+x1+'</label>';
            html+='                 </div>';
            html+='                 <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">';
            html+='                     <label for="validationDefault01"> <b> Referencia : </b> '+x2+'</label>';
            html+='                 </div>';
            html+='                 <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">';
            html+='                     <label for="validationDefault01"> <b> Precio : </b> '+x3+'</label>';
            html+='                 </div>';
            html+='                 <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">';
            html+='                     <label for="validationDefault01"> <b> Peso : </b> '+x4+'</label>';
            html+='                 </div>';
            html+='                 <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">';
            html+='                     <label for="validationDefault01"> <b> Categoria : </b> '+x5+'</label>';
            html+='                 </div>';
            html+='                 <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">';
            html+='                     <label for="validationDefault01" style="color:green !important"> <b> Stock </b> '+x6+'</label>';
            html+='                 </div>';
            html+='                 <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">';
            html+='                     <label for="validationDefault01"> <b> Cantidad </b> </label>';
            html+='                     <input type="number"  class="form-control" id="x1" autocomplete="off" /> ';
            html+='                     <input type="hidden" value="'+x6+'" id="x2" /> ';
            html+='                 </div>';
            html+='         </fieldset>';
            html+='      </div>';
            html+='      <div class="modal-footer">';
            html+='       <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>';
            html+='        <button type="button" class="btn btn-default" id="terminar" data_x="php/ventas/ini_1" x7="'+x7+'" > Terminar </button>';
            html+='      </div>';
            html+='   </div>';
            html+='</div>';
        $("#myModal").html(html);
        $("#terminar").on("click",terminar);
        $("#terminar").attr('disabled',true);
        $('#x1').typeahead({
            source: function(query, result){
                var x2 = $("#x2").val();
                    x2 = parseInt(x2);
                    query = parseInt(query);
                if( query>x2 || query==0 ){
                    $("#terminar").attr('disabled',true);
                    alert("Error,cantidad minima 1, cantidad maxima a vender es menor o igual a  "+x2);
                    $("#terminar").css({"background":"none","color":"#5f6368"});
                }else{
                    $("#terminar").attr('disabled',false);
                    $("#terminar").css({"background":"green","color":"white"});
                }
            }
        })
    }
}
function terminar() {
    var x1 = $("#x1").val();
    var x2 = $("#x2").val();
    x2 = parseInt(x2);
    x1 = parseInt(x1);
    if( x1>x2 || x1==0 ){
        $("#terminar").attr('disabled',true);
        alert("Error,cantidad minima 1, cantidad maxima a vender es menor o igual a  "+x2);
    }else{
        var x7 = $(this).attr("x7");
        var url_x = $(this).attr('data_x');
        var y=1;
        $.ajax({
            url:url_x+".php",
            method:"POST",
            data:{ "x1":x1,"x7":x7,"y":y },
            success:function(data){
               $("#myModal").modal('toggle');
               lista();
            }
        });
    }
}
function lista_ventas() {
    var y=2;
    $.ajax({
        url:"php/ventas/ini_1.php",
        method:"POST",
        data:{"y":y },
        success:function(data){
            var html='';
               html+='<div class="modal-dialog">';
               html+='  <div class="modal-content">';
               html+='      <div class="modal-header">';
               html+='        <button type="button" class="close" data-dismiss="modal">&times;</button>';
               html+='        <h4 class="modal-title">lista de ventas </h4>';
               html+='      </div>';
               html+='      <div class="modal-body">';
               html+='         <fieldset>';
               html+='              <table class="table" >';
               html+='                  <tr>';
               html+='                      <td> Id </td>';
               html+='                      <td> Producto </td>';
               html+='                      <td> Referencia </td>';
               html+='                      <td> Cantidad Vendida </td>';
               html+='                      <td> Fecha del regsitro </td>';
               html+='                      <td></td>';
               html+='                  </tr>';
            var datos=JSON.parse(data);
            $.each(datos,function(key,val){
               html+='                  <tr>';
               html+='                      <td> '+val.id_venta+' </td>';
               html+='                      <td> '+val.nombre+' </td>';
               html+='                      <td> '+val.referencia+' </td>';
               html+='                      <td> '+val.cant+' </td>';
               html+='                      <td> '+val.fecha_venta+' </td>';
               html+='                      <td><button class="btn delet_vent" x7="'+val.id_venta+'" data_x="php/ventas/ini_1"> Borrar </button></td>';
               html+='                   </tr>';
            });
            html+='                   </table>';
            html+='         </fieldset>';
            html+='      </div>';
            html+='      <div class="modal-footer">';
            html+='        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>';
            html+='      </div>';
            html+='   </div>';
            html+='</div>';
            $("#myModal").html(html);
            $(".delet_vent").on("click",delet_vent);
            html='';
        }
    });
}
function delet_vent() {
    var resultado = window.confirm('Estas seguro?');
    if (resultado === true) {
        var x7 = $(this).attr('x7');
        var data_x = $(this).attr('data_x');
        var y =3;
        x7=parseInt(x7);
        $.ajax({
            url:data_x+".php",
            method:"POST",
            data:{"x7":x7,"y":y},
            success:function(data){
               $("#myModal").modal("toggle");
               lista();
            }
        })
    }
}
function lista(){
    $.ajax({
        url:"php/productos/lista.php",
        method:"POST",
        success:function(data){
           $("#container").html(data);
           $("#new_product").on("click",new_product);
           $(".edit").on("click",edit);
           $(".delet").on("click",delet);
           $(".vender").on("click",vender);
           $("#lista_ventas").on("click",lista_ventas);
        }
    });
}