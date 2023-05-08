document.getElementById('num3').disabled = true;
 document.getElementById('num4').disabled = true;
 document.getElementById('operador2').disabled = true;
 document.getElementById('c').disabled = true;
 document.getElementById('result2').disabled = true;
function  getAle1(){
    document.getElementById('ju1').style.display = "block";
    document.getElementById('M').style.display = "block";
    document.getElementById('s').style.display = "block";
    document.getElementById('rs').style.display = "block";
    document.getElementById('g').style.display = "block";
    document.getElementById('num3').disabled = false;
    document.getElementById('num4').disabled = false;
    document.getElementById('operador2').disabled = false;
    document.getElementById('c').disabled = false;
    document.getElementById('result2').disabled = false;
    document.getElementById('ju1').disabled = true;
    document.getElementById('resv').innerHTML = "Juego de  Suma Y Resta";
    document.getElementById('ju2').style.display = "none";
    document.getElementById('ju1').style.display = "none";
    document.getElementById('esc').style.display = "none";
}
function getAle2(){
    document.getElementById('ju2').style.display = "block";
    document.getElementById('M').style.display = "block";
    document.getElementById('xx').style.display = "block";
    document.getElementById('di').style.display = "block";
    document.getElementById('g2').style.display = "block";
    document.getElementById('num3').disabled = false;
    document.getElementById('num4').disabled = false;
    document.getElementById('operador2').disabled = false;
    document.getElementById('c').disabled = false;
    document.getElementById('result2').disabled = false;
    document.getElementById('ju2').disabled = true;
    document.getElementById('resv').innerHTML = "Juego de multiplicacion y division"; 
    document.getElementById('ju1').style.display = "none";
    document.getElementById('ju2').style.display = "none";
    document.getElementById('esc').style.display = "none";
}
function g(){
    var n1 = parseInt(Math.random() * 900)+100;
    var n2 = parseInt(Math.random() * 900)+100;
    document.getElementById('num3').value = n1;
    document.getElementById('num4').value = n2;
}
function g2(){
    var n1 = parseInt(Math.random() * 900)+100;
    var n2 = parseInt(Math.random() * 9)+1;
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
            console.log(reslOp);
            resp = document.getElementById('result2').value; 
                if(reslOp % 1 !== 0 )
                {
                    var e = reslOp; 
                    var u = reslOp;
                    u = reslOp.toFixed(1);
                     e = reslOp.toFixed(2);
                    if(e === resp || resp === u)
                    {
                       alert("Respuesta correcta");
                    }
                    else if(reslOp)
                    {
                      alert("Respuesta incorecta");
                    }
                
                    
                }
                else
                {
                    if(reslOp == resp)
                    {
                        alert("Respuesta correcta");
                    }
                    else
                    {
                        alert("Respuesta incorecta")
                    }
                }
            }
            document.getElementById('regre').style.display = "block";
        }
 function regre(){
     location.reload();
 }   