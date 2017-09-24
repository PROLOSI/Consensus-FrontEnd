

$(document).ready(function() {
    $('#dos').hide();
    $('#tres').hide();
    $('#cuatro').hide();
    $('#creacion').hide();
    $('#edicion').hide();
});

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
debugger;
if ( username == "admin" && password == "admin" || username == "usuario1" && password == "usuario1"){
    switch(username)
    {
        case "admin":
        window.location = "index___.html"; // Redirecting to other page.
        break;

        case "usuario1":
        window.location = "index.html"; // Redirecting to other page.
        break;
    }

return false;
}
else{
attempt --;// Decrementing by one.
alert("Tiene "+attempt+" intentos más");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}

function uno(){
    $('#uno').show();
    $('#dos').hide();
    $('#tres').hide();
    $('#cuatro').hide();

}
function dos(){
    $('#uno').hide();
    $('#dos').show();
    $('#tres').hide();
    $('#cuatro').hide();
}
function tres(){
    $('#uno').hide();
    $('#dos').hide();
    $('#tres').show();
    $('#cuatro').hide();
}
function cuatro(){
    $('#uno').hide();
    $('#dos').hide();
    $('#tres').hide();
    $('#cuatro').show();
}

var activeEl = 0;
$(function() {
    var items = $('.btn-nav');
    $( items[activeEl] ).addClass('active');
    $( ".btn-nav" ).click(function() {
        $( items[activeEl] ).removeClass('active');
        $( this ).addClass('active');
        activeEl = $( ".btn-nav" ).index( this );
    });
});

$(document).ready(function () {
    $(".btn-select").each(function (e) {
        var value = $(this).find("ul li.selected").html();
        if (value != undefined) {
            $(this).find(".btn-select-input").val(value);
            $(this).find(".btn-select-value").html(value);
        }
    });
});

$(document).on('click', '.btn-select', function (e) {
    e.preventDefault();
    var ul = $(this).find("ul");
    if ($(this).hasClass("active")) {
        if (ul.find("li").is(e.target)) {
            var target = $(e.target);
            target.addClass("selected").siblings().removeClass("selected");
            var value = target.html();
            $(this).find(".btn-select-input").val(value);
            $(this).find(".btn-select-value").html(value);
        }
        ul.hide();
        $(this).removeClass("active");
    }
    else {
        $('.btn-select').not(this).each(function () {
            $(this).removeClass("active").find("ul").hide();
        });
        ul.slideDown(300);
        $(this).addClass("active");
    }
});

$(document).on('click', function (e) {
    $(".abrirmodal").on("click",function(){
        $('#edit').modal('show');
        document.getElementById("p1").innerHTML = "Usuario: "+ $(this).attr("value");
        $("#userModal").val("value",$(this).attr("value"))
    });    

    var target = $(e.target).closest(".btn-select");
    if (!target.length) {
        $(".btn-select").removeClass("active").find("ul").hide();
    }
});

function mostrar_dashboar()
{
    $('#dashboard').show();
    $('#creacion').hide();
    $('#edicion').hide();
}

function mostrar_creacion()
{
    $('#creacion').show();
    $('#dashboard').hide();
    $('#edicion').hide();
}

function mostrar_edicion()
{
    $('#dashboard').hide();
    $('#edicion').show();
    $('#creacion').hide();
    conexion();
}

/*
function openmodal()
{
    console.log($(this).attr("value"));
    debugger;
  $('#edit').modal('show');
  document.getElementById("p1").innerHTML = nombre.value;
} */

function opencerrar()
{
  $('#cerrar_sesion').modal('show');
}

function link_cerrar()
{
    window.location = "login.html";
}

function abrir_visualizador()
{
  $('#info_candi').modal('show');
}
