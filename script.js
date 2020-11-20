
function getView() {
    document.getElementById("object").style.display = "none"; 
    document.getElementById("people").style.display = "none"; 
    document.getElementById("view").style.display = "flex";
    document.getElementById("menuView").style.borderBottom = "thick solid skyblue";
    document.getElementById("menuObject").style.borderBottom = "0.5px solid black";
    document.getElementById("menuPeople").style.borderBottom = "0.5px solid black";
    document.getElementById("menuAll").style.borderBottom = "0.5px solid black";
    
}

function getObject() {
    document.getElementById("view").style.display = "none"; 
    document.getElementById("people").style.display = "none"; 
    document.getElementById("object").style.display = "flex"; 
    document.getElementById("menuObject").style.borderBottom = "thick solid skyblue";
    document.getElementById("menuView").style.borderBottom = "0.5px solid black";
    document.getElementById("menuPeople").style.borderBottom = "0.5px solid black";
    document.getElementById("menuAll").style.borderBottom = "0.5px solid black";
    
}

function getPeople() {
    document.getElementById("object").style.display = "none"; 
    document.getElementById("view").style.display = "none"; 
    document.getElementById("people").style.display = "flex";
    document.getElementById("menuPeople").style.borderBottom = "thick solid skyblue";
    document.getElementById("menuObject").style.borderBottom = "0.5px solid black";
    document.getElementById("menuView").style.borderBottom = "0.5px solid black";
    document.getElementById("menuAll").style.borderBottom = "0.5px solid black"; 
}

function getAll() {
    document.getElementById("object").style.display = "flex"; 
    document.getElementById("view").style.display = "flex"; 
    document.getElementById("people").style.display = "flex";
    document.getElementById("menuAll").style.borderBottom = "thick solid skyblue"; 
    document.getElementById("menuObject").style.borderBottom = "0.5px solid black";
    document.getElementById("menuPeople").style.borderBottom = "0.5px solid black";
    document.getElementById("menuView").style.borderBottom = "0.5px solid black"; 
}

