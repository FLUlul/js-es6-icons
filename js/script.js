/* 
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.

Milestone 2
Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
*/
const container = document.getElementById("container")
console.log(icons);


icons.forEach((icon) => {
    console.log(icon.name, icon.prefix, icon.type, icon.family, icon.color);
    printHtml (icon.family, icon.prefix, icon.name, icon.color);
});



function printHtml (family, prefix, name, color){
    container.innerHTML += `
    <div id="icon">
    <i class="${family} ${prefix}${name}" style="color: ${color};"></i>
    <div>${name}</div>
    </div>
    `
}