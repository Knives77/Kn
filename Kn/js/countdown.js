 var timeLimit = 1; //tiempo en minutos
   var conteo = new Date(timeLimit * 60000);

   function inicializar(){
      document.getElementById('pene').childNodes[0].nodeValue = 
                  conteo.getMinutes() + ":" + conteo.getSeconds();
   }

   function cuenta(){
      intervaloRegresivo = setInterval("regresiva()", 1000);
   }

   function regresiva(){
      if(conteo.getTime() > 0){
         conteo.setTime(conteo.getTime() - 1000);
      }else{
         clearInterval(intervaloRegresivo);
         alert("Fin");
      }

      document.getElementById('pene').childNodes[0].nodeValue = 
                  conteo.getMinutes() + ":" + conteo.getSeconds();
   }

   onload = inicializar;

   //cuenta();
