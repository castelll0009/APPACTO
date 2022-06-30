

/*Description of  my app

*/

/*document.getElementsByTagName("h1")[0].style.fontSize = "6vw";*/


let nombre_pacto =  ($(".nombre-pacto").text());
nombre_pacto = ConvertirMayusculas(nombre_pacto);
ColorearNombre();
//alert(nombre_pacto);
//cambio de color  
$(".nombre-pacto").text().substr(1,1);

function ConvertirMayusculas(string){
  return string.toUpperCase();
}
/*asinar color a letra escrita*/
$(document).ready(function(){
  /*
   	$(".input-nombre").keydown(function(){
      //alert("presiono");
    	$(".nombre-pacto").text($(".input-nombre").val());
	}); 
  */
  let contador = 0;
	$(".input-nombre").keyup(function(){
    
    $(".nombre-pacto").text(ConvertirMayusculas($(".input-nombre").val()));
    
    //color para la letra
                     
    CambiarIcono();
    var cadena =$(".nombre-pacto").text(ConvertirMayusculas($(".input-nombre").val())).text();
    if(cadena == "VIERNES"){
      $("#etiqueta-icono").attr("src","imgs/"+"bmo.gif");
    }
    if(cadena == "HAYBARETOSKIS"){
      $("#etiqueta-icono").attr("src","imgs/"+"weed-icon.png");
    }
    ColorearNombre();
	}); 
});

function CambiarIcono(){ //cambia iconos
    var arrayIconos= new Array('icono-estudiante.png', 'icono-gym.png','icono-agricultor.png','icono-mujeres.png','icono-interculturalidad.png','logo.png','salud.png','sampedro.png','cafe.png','arte.png','baile.gif','condor.png','animales.png','colibri.png','turismo.png','pacto-png.gif','mariposa-org.gif','loro.png','atrapa-sueños.png','indio.png','civil.png','programador.png','profesora.png','geografo.png','musico.png','abogado.png','lenguas.png','logo1.png','logo2.png','afro.png');
    var stringRutaIcono =(arrayIconos[getRandomInt(0,arrayIconos.length)]); 
    $("#etiqueta-icono").attr("src","imgs/"+stringRutaIcono);
    var etiquetaIcono= $("#etiqueta-icono").html();
}
function getRandomInt(min, max) { //mas exluido
    return Math.floor(Math.random() * (max - min)) + min;
  }
function ColorearNombre()
{
   var renk = new Array ('ff9c00c7','1c3587d4','ff1a1fde','00a93fe0','a52e94ed','ff1a1fde','1c3587d4','ff9c00c7');
   var texticerik= $("#nombre-pacto").html();
   var retval='';
    for(var i=0; i<texticerik.length;i++)
    {
        var scale;
        if (i>(renk.length)-1)
        {
            scale=renk[Math.floor(Math.random()*renk.length)];
        }
        else
        {
            scale=renk[i];
        }
        if (screen.width < 700) {
            retval=retval+"<span style='font-size: 0.4em; letter-spacing: -14px; font-weight: 900; color: #"+scale+"'>"+texticerik.substr(i,1)+"</span>"
        }else{
            retval=retval+"<span style=' color: #"+scale+"'>"+texticerik.substr(i,1)+"</span>"
        }
       
    
    }
  
    $("#nombre-pacto").html(retval);
}
