

function vytvoritTabulku() {
    let radky = document.getElementById("pocet-radku").value;
    let sloupce = document.getElementById("pocet-sloupcu").value;

    let table = document.createElement("table");

    for (let i= 0; i < radky; i++) {
        let row = table.insertRow();
        
        for (let o = 0; o < sloupce; o++) {
            let cell = row.insertCell();
            cell.textContent = (i * sloupce) + o + 1;
            
        }
    }


 document.body.appendChild(table);

}



