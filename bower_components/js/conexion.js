/*
  
      $("#abrirmodal").on("click",function(){
          $('#edit').modal('show');
          document.getElementById("p1").innerHTML = "Usuario: "+$(this).attr("value");
      });
    });*/

function conexion () 
{
  $.get("https://prolosi.com/apiConsensus/Usuario.php",
  function(data){
    if(data === "done"){
    alert(data);
    }
    else{

      var html = "<table class='table table-striped custab'><thead><tr><th>Candidato</th><th class='text-center'>Action</th></tr></thead>  ";

      data.forEach(function(element) {
        html +="<tr> <td>"+element.correo + "</td> <td class='text-center'><a class='btn btn-info btn-xs abrirmodal' value='"+ element.usuario +"' ><span class='glyphicon glyphicon-edit'></span> Editar</a> <a data-toggle='modal' data-target='#si_no'class='btn btn-danger btn-xs'><span class='glyphicon glyphicon-remove'></span> Eliminar</a></td> </tr> ";
        //$("#tabla").html("<tr> <td>"+element.correo + "<td class='text-center'><a class='btn btn-info btn-xs' id='abrirmodal' value='"+ element.usuario +"' ><span class='glyphicon glyphicon-edit'></span> Editar</a> <a data-toggle='modal' data-target='#si_no'class='btn btn-danger btn-xs'><span class='glyphicon glyphicon-remove'></span> Eliminar</a></td> </tr> ");
      }, this);

      html += "</table>";
      $("#tabla").html(html);
    }
    });
}

function insert () 
{
  var jsonData = [0];
  jsonData[0]={"id":null, "usuario": $('#nombre_user').val() , "contrasena": $('#pass').val() , "correo": $('#correo').val() , "telefono": $('#tel').val()  ,"adress": "0xasd12122", "estado": false};
debugger;
  $.ajax({
    
    type: "POST",
    url: "https://prolosi.com/apiConsensus/Usuario.php",
    data: JSON.stringify(jsonData),
    success: function(result){
      alert(result);
  },
  error: function(result) 
  {
    alert(result);
  },
    dataType: JSON,
    contentType: "application/json"
    });

}

