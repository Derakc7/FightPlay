let buttonGame = document.querySelectorAll('.ColorButton');
console.log(buttonGame);
function colorOver(){
    for(let i = 0; i <buttonGame.length; i++){
        let msg = buttonGame[i];
        msg.style.backgroundColor = "#6B8E23"; 
    }
}
function colorOut(){
    for(let i = 0; i <buttonGame.length; i++){
        let msg = buttonGame[i];
        msg.style.backgroundColor = "#384521";; 
    }
}
buttonGame[0].addEventListener('mouseover', colorOver);
buttonGame[0].addEventListener('mouseout', colorOut);
buttonGame[1].addEventListener('mouseover', colorOver);
buttonGame[1].addEventListener('mouseout', colorOut);


//По нажатию кнопки сохраняются данные которые игрок ввёл и переход на следующую страницу 
const Window = document.getElementById("window");
const SelectionField = document.getElementById("selectionField");
const worldFight = document.getElementById("WorldFight");
let You;
let a = document.getElementById("Saef1");
console.log(a);
const I1 = function myName(){
    const inputName = document.getElementById("Name1").value;
    //console.log(inputName);
    const personaMan = document.getElementById("man").checked;
    const personaGirl = document.getElementById("girl").checked;
    //console.log(personaMan);
    //console.log(personaGirl);
    let Persona;
    if(personaMan){
        Persona = "Ты выбрали Парня";
        You = 1;
    } else if(personaGirl){
        Persona = "Ты выбрали Девушку";
        You = 2;
    } else{
        Persona = true;
    }
    while(Persona == true){
        alert("Ты не выбрали персонажа!");
        Persona = false;
        location.reload();
    }
    if(Persona == "Ты выбрали Парня" || Persona == "Ты выбрали Девушку"){
        alert(`Привет ${inputName}. ${Persona}`);
        Window.hidden = true;
        SelectionField.hidden = false;
    }
}
a.addEventListener('click', I1);

//Далее идёт код для работы с боями
const fight = document.getElementById("Fight");

function startFight(){
    SelectionField.hidden = true;
    worldFight.hidden = false;
}
fight.addEventListener('click', startFight);



