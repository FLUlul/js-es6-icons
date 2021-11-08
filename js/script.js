/* 
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.

Milestone 2
Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

Bonus:
Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
(Qui quale potrebbe essere l’evento che mi serve?..)
*/
const containerGeneral = document.getElementById("container");
const dropDownMenu = document.getElementById("mydropdown");

icons.forEach((icon) => {
    iconsPrintHtml (icon.family, icon.prefix, icon.name, icon.color, icon.type);
});

dropDownMenu.addEventListener("change",
    function(){
        containerGeneral.innerHTML = "";
        console.log(dropDownMenu.value);
        icons.forEach((icon) => {
            if(dropDownMenu.value === icon.type || dropDownMenu.value === "all"){
                iconsPrintHtml (icon.family, icon.prefix, icon.name, icon.color, icon.type);
            }
        });  
    }
)


function iconsPrintHtml (family, prefix, name, color, type){
    containerGeneral.innerHTML += `
    <div class="icon ${type}">
    <i class="${family} ${prefix}${name}" style="color: ${color};"></i>
    <div>${name}</div>
    </div>
    `
}