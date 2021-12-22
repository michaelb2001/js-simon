/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


maxNum = 5;
let riga = document.getElementById("riga");

for (let index = 0; index < maxNum; index++) {
    riga.innerHTML += 
    `
    <div id="item-${index}" class="blocco col-1">
        <span id="elemento-${index}" class="numero">
        </span>
    </div>
    `;
}

