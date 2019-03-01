document.getElementById("notetilte").placeholder = "Wprowadź tytuł";
document.getElementById("notecontent").placeholder = "wprowadź zawartość";

noteTitle = document.getElementById("notetilte");
note = document.getElementById("notecontent");
let number = 1;

window.onload = function add(){
    
    for (let i = 1; i <= 6; i++)
    {
        let ndata = JSON.parse(localStorage.getItem(i));
    
        document.getElementById('NoteTitle' + i).innerHTML = ndata['Title'];
        document.getElementById('NoteContent' + i).innerHTML = ndata['Note'];
        number = ndata['ID'];
    }
}

function add()
{
    let ndata = { "Tytuł" : notetilte.value,"Notatka" : notecontent.value, "ID" : number};
    let noteData = JSON.stringify(ndata);
    localStorage.setItem(number, noteData);
    
    document.getElementById('NoteTitle' + number).innerHTML = notetilte.value;
    document.getElementById('NoteContent' + number).innerHTML = notecontent.value;
    
    number += 1;
    if (number > 6) { number = 6};
}

function remove(){

    document.getElementById('NoteTitle' + number).innerHTML = "";
    document.getElementById('NoteContent' + number).innerHTML = "";
    localStorage.removeItem(number);
    number -= 1;
}
