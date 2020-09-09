
var int = 3;
    opcion=60;

function intentos(opcion) {
    
    
    switch (opcion) {
        case 3:
         alert("respuesta correcta")
         int=4;
         pista.innerHTML="";
        break;

        
        default:
          
      }
    
        
    int--;
    inten.innerHTML=int;
    
    
    if(int==2){
        pista.innerHTML="es compañero de jarvan y fiora";
    }
    if(int==1){
        pista.innerHTML="esta enfrentado a noxus";
    }
    if(int==0){
        
        alert("no te quedan mas intentos prueba de nuevo")
        int=3;
        inten.innerHTML=int;
        pista.innerHTML="";
        
        
    }

    
    
    
    
    
}
