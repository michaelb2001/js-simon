/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


function creaElementi(){
    maxNum = 5;
    let riga = document.getElementById("riga");
    riga.innerHTML="";
    for (let index = 0; index < maxNum; index++) {
        riga.innerHTML += 
        `
        <div id="item-${index}" class="blocco col-1 d-flex justify-content-center align-items-center text-center">
            <span id="elemento-${index}" class="numero">
                ${generaNumeri()}
            </span>
        </div>
        `;
    }
}

function generaNumeri(){
    let num = [];
    for (let index = 0; index < 5; index++) {
        let numero = Math.abs(Math.floor(Math.random()*100));
        if(!num.includes(numero)){
            return numero;
        }
    }
    
}

/*function indovinaNumeri(){

    let blocchi = document.getElementsByClassName("numero");
    for (let index = 0; index < blocchi.length; index++) {
        blocchi[index].innerHTML =""; 
    }

    let indovinatiNumeri = [];

    for (let index = 0; index < 5; index++){
        let numeroScelto = parseInt(prompt("inserire il numero in posizione"+(index+1)));

        if(!indovinatiNumeri.includes(numeroScelto)){
            indovinatiNumeri.push(numeroScelto);
        }
        
    }

    return indovinaNumeri;
}

function chiedi(){
    setTimeout(indovinaNumeri(),5000);
};*/

document.getElementById("genera").addEventListener("click",function(){
    
    creaElementi();

    setTimeout(() => {
        
        let blocchi = document.getElementsByClassName("numero");
        for (let index = 0; index < blocchi.length; index++) {
            blocchi[index].innerHTML =""; 
        }

        let indovinatiNumeri = [];
        setTimeout(() => {
            for (let index = 0; index < 5; index++){
                let numeroScelto = parseInt(prompt("inserire il numero in posizione"+(index+1)));
    
                if(!indovinatiNumeri.includes(numeroScelto)){
                    indovinatiNumeri.push(numeroScelto);
                }
                
            }

            alert("hai indovinato"+(indovinatiNumeri.length-1)+"su 5, e i numeri indovinati sono : "+indovinatiNumeri);
            

        }, 1000);
        
    }, 5000);
});










