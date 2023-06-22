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
        Persona = "Ты выбрал Парня";
        You = 1;
    } else if(personaGirl){
        Persona = "Ты выбрал Девушку";
        You = 2;
    } else{
        Persona = true;
    }
    while(Persona == true){
        alert("Ты не выбрал персонажа!");
        Persona = false;
        location.reload();
    }
    if(Persona == "Ты выбрал Парня" || Persona == "Ты выбрал Девушку"){
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

//Сама бевая система
let Character = document.getElementById("Ikon1");

let specifications = document.getElementById("P");

let XP;
let Damage;
let Scill;
function Specifications(){
    if(You == 1){
        XP = 75;
        Damage = 20;
        Scill = 50;
        specifications.textContent = `|Здоровье: ${XP}  ` + `|Урон: ${Damage} ` + `|Скилл: ХР врага -${Scill}`;
    }
    else{
        XP = 100;
        Damage = 15;
        Scill = 100;
        specifications.textContent = `|Здоровье: ${XP}  ` + `|Урон: ${Damage} ` + `|Скилл: ХР+${Scill}`;
        
        
        Character.src = "ФайтЯе.jpg";
    }
}
fight.addEventListener('click', Specifications);

let enemy = document.getElementById("PEnemy");
enemy.textContent = `|Здоровье врага: 200  ` + `|Урон врага: 10 ` + `|Скилл: Урон +20`;




