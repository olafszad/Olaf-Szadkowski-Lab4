document.getElementById("notetitle").placeholder = "Wprowadź tytuł";
document.getElementById("notecontent").placeholder = "wprowadź zawartość";

noteTitle = document.getElementById("noteTitle");
note = document.getElementById("note");

let number = 1;
let noteBackground = '#c4d6b0';

// Ładowanie zapisanych w Local Storage notatek
window.onload = function add(){
    
    for (let i = 1; i <= 6; i++)
    {
        let ndata = JSON.parse(localStorage.getItem(i));
    
        document.getElementById('NoteTitle' + i).innerHTML = ndata['Title'];
        document.getElementById('NoteContent' + i).innerHTML = ndata['Note'];
        document.getElementById('Note' + i).style.background = ndata['Color'];
        let data = document.createElement('div')
        data.innerHTML=ndata['Date']
        document.getElementById('Note' + number).appendChild(data)
        number = i+1;
        if (number > 6) { number = 6};
    }
    
}
// Usuwanie notatki
function remove(){
    localStorage.clear();
    location.reload(); 
}
// Dodanie notatki do Local Storage
function add(){
    console.log(number)
    let ndata = { "Title" : notetitle.value,"Note" : notecontent.value, "ID" : number,"Color": noteBackground,"Date":getDate()};
    let noteData = JSON.stringify(ndata);
    localStorage.setItem(number, noteData);
    
    document.getElementById('NoteTitle' + number).innerHTML = notetitle.value;
    document.getElementById('NoteContent' + number).innerHTML = notecontent.value;
    document.getElementById('Note' + number).style.background = noteBackground;
    let data = document.createElement('div')
    data.innerHTML=getDate();
    document.getElementById('Note' + number).appendChild(data)

    number += 1;
    if (number > 6) { number = 6};
    
}

function ChangeColor(n){
    noteBackground = n;
}
document.querySelector('#red').addEventListener('click',()=>{ChangeColor('red')})
document.querySelector('#blue').addEventListener('click',()=>{ChangeColor('blue')})
document.querySelector('#yellow').addEventListener('click',()=>{ChangeColor('yellow')})
document.querySelector('#pink').addEventListener('click',()=>{ChangeColor('pink')})
document.querySelector('#green').addEventListener('click',()=>{ChangeColor('green')})
document.querySelector('#purple').addEventListener('click',()=>{ChangeColor('purple')})


function getDate(){
    let data = new Date()
    let dataDay = data.getDate();
    let dataMonth = data.getMonth() + 1;
    let dataYear = data.getFullYear();
    let dataHour = data.getHours();
    let dataMinutes = data.getMinutes();
    if(dataMinutes<10){dataMinutes = "0" + dataMinutes}
    let dataSeconds = data.getSeconds();
    if(dataSeconds<10){dataSeconds = "0" + dataSeconds}
    return "<br>" + dataDay + "." + dataMonth + "." + dataYear + "  " + dataHour + ":" + dataMinutes + ":" + dataSeconds
}
