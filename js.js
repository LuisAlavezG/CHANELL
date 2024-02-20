

function Encriptacion1(){    
    let PrimerTexto = document.getElementById("PrimerTexto").value;
    let key = 3;   


    let Prueba = (Encriptacion(PrimerTexto, key));
    //console.log(Prueba);
    document.getElementById("PrimerTexto").value = Prueba;
}


function Encriptacion( text,key)
{
    let codes = [];
    for(let i = 0 ; i < text.length ; i++){
        codes.push((text.charCodeAt(i) + key));
    }
    let texto = String.fromCharCode(...codes); 
    //console.log(texto);
    return texto;
}


//Desencriptación

function Desencriptacion1(){    
    let PrimerTexto = document.getElementById("PrimerTexto").value;
    let key = 3;   

    
    let Prueba = (Desencriptacion(PrimerTexto, key));
    //console.log(Prueba);
    document.getElementById("PrimerTexto").value = Prueba;
}


function Desencriptacion( text,key)
{
    let codes = [];
    for(let i = 0 ; i < text.length ; i++){
        codes.push((text.charCodeAt(i) - key));
    }
    let texto = String.fromCharCode(...codes); 
    //console.log(texto);
    return texto;
}






