function  getAle2(){
    var n1 = parseInt(Math.random() * 11 + 1);
    var n2 = parseInt(Math.random() * 11 + 1);
    document.getElementById('num3').value = n1;
    document.getElementById('num4').value = n2;
     
     
    }
    function calcularOp2(){
        var nu1 = parseFloat(document.getElementById('num3').value);
        var nu2 = parseFloat(document.getElementById('num4').value);
        var ope  = document.getElementById('operador2').value;
        if(ope === '+')
        {
           var resp, reslOp;
           reslOp = nu1 + nu2; 
           resp = document.getElementById('result2').value;
           if(reslOp == resp)
           {
                 alert("Respuesta Correcta");
           }
           else
           {
               alert("Respuesta incorrecta");
           }
        }
        if(ope === '-')
        {
            var resp, reslOp;
           reslOp = nu1 - nu2; 
           resp = document.getElementById('result2').value;
            if(reslOp == resp)
            {
                  alert("Respuesta Correcta");
            }
            else
            {
                alert("Respuesta incorrecta");
            }
        }
        if(ope === '*')
        {
            var resp, reslOp;
           reslOp = nu1 * nu2; 
           resp = document.getElementById('result2').value;
            if(reslOp == resp)
           {
                 alert("Respuesta Correcta");
           }
           else
           {
               alert("Respuesta incorrecta");
           }
        }
        if(ope === '/')
        {
            var resp, reslOp;
            reslOp = nu1 / nu2; 
            console.log(reslOp)
            reslOp = reslOp.toFixed(2);
            console.log(reslOp)
            resp = document.getElementById('result2').value;
            if(reslOp === resp)
            {
                  alert("Respuesta Correcta");
            }
            else
            {
                alert("Respuesta incorrecta");
            }
        }
    }
    function fon(image){
        document.body.style.backgroundImage = "url('"+image+"')";
      }