

function conexion () 
{
  $.get("https://prolosi.com/apiConsensus/Usuario.php",
  function(data){
    if(data === "done"){
    alert(data);
    }
    else{
      $("#tabla").html("");
      data.forEach(function(element) {
        $("#tabla").html("<table class='table table-striped custab'><thead><tr><th>Candidato</th><th class='text-center'>Action</th></tr></thead>  <tr> <td>"+element.correo + "<td class='text-center'><a class='btn btn-info btn-xs' id='abrirmodal' value='"+ element.usuario +"' ><span class='glyphicon glyphicon-edit'></span> Editar</a> <a data-toggle='modal' data-target='#si_no'class='btn btn-danger btn-xs'><span class='glyphicon glyphicon-remove'></span> Eliminar</a></td> </tr> </table>");
        console.log(element);
      }, this);
    }
    });
}