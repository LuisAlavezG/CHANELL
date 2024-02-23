
/*
function Encriptacion1(){    
    let PrimerTexto = document.getElementById("PrimerTexto").value;
    let key = 3;   
    let Prueba = (Encriptacion(PrimerTexto, key));
    //console.log(Prueba);
    document.getElementById("PrimerTexto").value = Prueba;
   /* document.getElementById("CajaTexto2").value = Prueba;
    document.getElementById("PrimerTexto").value = "";
}


function Encriptacion( text,key)
{
    let codes = [];
    for(let i = 0 ; i < text.length ; i++){
        codes.push((text.charCodeAt(i) + key));
        console.log(codes[i]);
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
*/

let texto1 = document.querySelector("#PrimerTexto");
let texto2 = document.querySelector("#CajaTexto2")


const matriz_Codigo =[
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]

];


function Encriptacion1(){

    const texto = Encriptacion(texto1.value);
    console.log(texto);
    texto2.value = texto;
    texto1.value = " ";

}


function Encriptacion(Frace){

    for( let i = 0; i <  matriz_Codigo.length ; i++){

        if(Frace.includes(matriz_Codigo[i][0])){
            
            Frace = Frace.replaceAll(
                matriz_Codigo[i][0],
                matriz_Codigo[i][1]
            )
        }

        
    }
    return Frace;
}


function Desencriptacion1(){

    const texto = Desencriptacion(texto1.value);
    console.log(texto);
    texto2.value = texto;
    texto1.value = " ";
}


function Desencriptacion(Frace){

    for( let i = 0; i <  matriz_Codigo.length ; i++){

        if(Frace.includes(matriz_Codigo[i][1])){
            
            Frace = Frace.replaceAll(
                matriz_Codigo[i][1],
                matriz_Codigo[i][0]
                
            )
        }

        
    }
    return Frace;
}