/*
  
      $("#abrirmodal").on("click",function(){
          $('#edit').modal('show');
          document.getElementById("p1").innerHTML = "Usuario: "+$(this).attr("value");
      });
    });*/

function conexion() 
{
  $.get("https://prolosi.com/apiConsensus/Usuario.php",
  function(data){
    if(data === "done"){
    alert(data);
    }
    else{

      var html = "<table class='table table-striped custab'><thead><tr><th>Candidato</th><th class='text-center'>Action</th></tr></thead>  ";

      data.forEach(function(element) {
        html +="<tr> <td>"+element.correo + "</td> <td class='text-center'><a class='btn btn-info btn-xs abrirmodal' value='"+ element.usuario +"' ><span class='glyphicon glyphicon-edit'></span> Editar</a> <a data-toggle='modal' data-target='#si_no' class='btn btn-danger btn-xs deleteModal' value='"+ element.usuario +"' ><span class='glyphicon glyphicon-remove'></span> Eliminar</a></td> </tr> ";
        //$("#tabla").html("<tr> <td>"+element.correo + "<td class='text-center'><a class='btn btn-info btn-xs' id='abrirmodal' value='"+ element.usuario +"' ><span class='glyphicon glyphicon-edit'></span> Editar</a> <a data-toggle='modal' data-target='#si_no'class='btn btn-danger btn-xs'><span class='glyphicon glyphicon-remove'></span> Eliminar</a></td> </tr> ");
      }, this);

      html += "</table>";
      $("#tabla").html(html);
    }
    });
}

function eliminarUsuario(){
  var jsonData = [0];
  var usuario = $("#userModal").val();
    console.log(usuario);
    debugger;
    if(usuario != ""){
    jsonData[0] = {"usuario": usuario};
  $.ajax({    
    type: "DELETE",
    contentType: "application/json",
    url: "https://prolosi.com/apiConsensus/Usuario.php",
    data: JSON.stringify(jsonData),
    success: function(result){
      alert(JSON.stringify(result));
  },
  error: function(result) 
  {
    alert(JSON.stringify(result));
  },
    dataType: "json"
    });
  }else{
    alert("Sin Usuario")
  }
}

function adress()
{

  $.post("http://api.prolosi.com:8080/newAccount",
  function(data){
      
    var jsonData = [0];
    jsonData[0]={"id":null, "usuario": $('#nombre_user').val() , "contrasena": $('#pass').val() , "correo": $('#correo').val() , "telefono": $('#tel').val()  ,"adress": data, "estado": 0};
    console.log(JSON.stringify(jsonData));
  debugger;
    $.ajax({    
      type: "POST",
      contentType: "application/json",
      url: "https://prolosi.com/apiConsensus/Usuario.php",
      data: JSON.stringify(jsonData),
      success: function(result){
        $("#nombre_user").val(""); $("#pass").val(""); $("#correo").val(""); $("#telefono").val(""); 
        alert('Usuario Insertado');
        },
        error: function(result) 
        {
          alert(JSON.stringify(result));
        },
          dataType: "json"
      });

      $.post("http://api.prolosi.com:8080/createVoter",{"email": $('#correo').val(), "address": data, "voteTokens": 1},
      function(data){
        console.log(data)
      });
      $.post("http://localhost:3000/sendEmail",{"from": "prolosi@prolosi.com", "to":  $('#correo').val(), "password": $('#pass').val()},
      function(data){
      });
    });
  }
  

  function actualizarUsuario(){
    var jsonData = [0];
    var usuario = $("#userModal").val();
      console.log(usuario);
      jsonData[0] = {"usuario": $('#user').val() , "contrasena": $('#pass').val(), "estado:":0};
    $.ajax({    
      type: "PUT",
      contentType: "application/json",
      url: "https://prolosi.com/apiConsensus/Usuario.php",
      data: JSON.stringify(jsonData),
      success: function(result){
        alert(JSON.stringify(result));
    },
    error: function(result) 
    {
      alert(JSON.stringify(result));
    },
      dataType: "json"
      });
  }

function insert() 
{
debugger;
  var jsonData = [0];
  jsonData[0]={"id":null, "usuario": $('#nombre_user').val() , "contrasena": $('#pass').val() , "correo": $('#correo').val() , "telefono": $('#tel').val()  ,"adress": "x0sjdka", "estado": 0};
  console.log(JSON.stringify(jsonData));
debugger;
  $.ajax({    
    type: "POST",
    contentType: "application/json",
    url: "https://prolosi.com/apiConsensus/Usuario.php",
    data: JSON.stringify(jsonData),
    success: function(result){
      alert('Usuario Insertado');
  },
  error: function(result) 
  {
    alert(JSON.stringify(result));
  },
    dataType: "json"
    });
 /* }*/
}

