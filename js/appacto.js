

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
     //$(".nombre-pacto").css("color","rgb(255 156 0 / 73%)");    
    ColorearNombre();
	}); 
});

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
            retval=retval+"<span style='font-size: 0.4em; color: #"+scale+"'>"+texticerik.substr(i,1)+"</span>"
        }else{
            retval=retval+"<span style=' color: #"+scale+"'>"+texticerik.substr(i,1)+"</span>"
        }
       
    
    }
  
    $("#nombre-pacto").html(retval);
}
