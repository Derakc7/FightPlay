let buttonGame = document.querySelectorAll('.ColorButton');
console.log(buttonGame);
function colorOver1(){
        buttonGame[0].style.backgroundColor = "#A7FF83";
        buttonGame[0].style.color = "black";
}
function colorOut1(){
        buttonGame[0].style.backgroundColor = "#086972";
        buttonGame[0].style.color = "white";
}
function colorOver2(){
        buttonGame[1].style.backgroundColor = "#A7FF83";
        buttonGame[1].style.color = "black";
}
function colorOut2(){
        buttonGame[1].style.backgroundColor = "#086972";
        buttonGame[1].style.color = "white";
}
function colorOver3(){
        buttonGame[2].style.backgroundColor = "#A7FF83";
        buttonGame[2].style.color = "black";
}
function colorOut3(){
        buttonGame[2].style.backgroundColor = "#086972";
        buttonGame[2].style.color = "white";
}
function colorOver4(){
        buttonGame[3].style.backgroundColor = "#A7FF83";
        buttonGame[3].style.color = "black";
}
function colorOut4(){
        buttonGame[3].style.backgroundColor = "#086972";
        buttonGame[3].style.color = "white";
}
function colorOver5(){
        buttonGame[4].style.backgroundColor = "#A7FF83";
        buttonGame[4].style.color = "black";
}
function colorOut5(){
        buttonGame[4].style.backgroundColor = "#086972";
        buttonGame[4].style.color = "white";
}

buttonGame[0].addEventListener('mouseover', colorOver1);
buttonGame[0].addEventListener('mouseout', colorOut1);
buttonGame[1].addEventListener('mouseover', colorOver2);
buttonGame[1].addEventListener('mouseout', colorOut2);
buttonGame[2].addEventListener('mouseover', colorOver3);
buttonGame[2].addEventListener('mouseout', colorOut3);
buttonGame[3].addEventListener('mouseover', colorOver4);
buttonGame[3].addEventListener('mouseout', colorOut4);
buttonGame[4].addEventListener('mouseover', colorOver5);
buttonGame[4].addEventListener('mouseout', colorOut5);


//По нажатию кнопки сохраняются данные которые игрок ввёл и переход на следующую страницу 

let WP = document.getElementById("w");

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
let Win = 0;
let Character = document.getElementById("Ikon1");
let MonsterCharacter = document.getElementById("Ikon2");

let specifications = document.querySelectorAll('.Abilities');
console.log(specifications);
let XP;
let Damage;
let Scill;
function Specifications(){
    if(You == 1){
        XP = 75;
        Damage = 20;
        Scill = 50;
        specifications[0].textContent = `XP: ${XP}`;
        specifications[1].textContent = `Damage: ${Damage}`;
        specifications[2].textContent = `Scill: XP+${Scill}`;
    }
    else{
        XP = 100;
        Damage = 15;
        Scill = 10;
        specifications[0].textContent = `XP: ${XP}`;
        specifications[1].textContent = `Damage: ${Damage}`;
        specifications[2].textContent = `Damage: +${Scill}`;
        
        Character.src = "ФайтЯе.jpg";
    }
}
fight.addEventListener('click', Specifications);

let enemy = document.querySelectorAll('.Enemy');
let OrkXP = 100;
let OrkDamage = 10;
let OrkEnergeScill = 0;
enemy[0].textContent = `XP: ${OrkXP}`; 
enemy[1].textContent = `Damage: ${OrkDamage}`;
enemy[2].textContent = `Scill: ${"Damage" + "+" + 10}`; 



buttonAttack = document.getElementById("Attack");
buttonHill = document.getElementById("Xill");
buttonScill = document.getElementById("Q");
let buttonEnergeScill = 0;

function attack(){
    OrkXP = OrkXP - Damage;
    enemy[0].textContent = `XP: ${OrkXP}`;
    buttonEnergeScill = buttonEnergeScill + 1;
    if(OrkXP <= 0){
        worldFight.hidden = true;
        SelectionField.hidden = false;
        Win = Win + 1;
        OrkXP = (OrkXP*0) +100;
        OrkDamage = (OrkDamage*0)+10;
        OrkEnergeScill = 0;
        enemy[0].textContent = `XP: ${OrkXP}`; 
        enemy[1].textContent = `Damage: ${OrkDamage}`;
        WP.textContent = `Выбери место куда ты хочешь отправиться! Побед:${Win}`;
        alert(`You Win!!! Количество побед: ${Win}`);
        return;
    }
    Character.style.borderColor = "#086972";
    MonsterCharacter.style.borderColor = "red";
    setTimeout(MonsterAttack, 500);
}
buttonAttack.addEventListener('click', attack);
function hill(){
    XP = XP + 15;
    specifications[0].textContent = `XP: ${XP}`;
    buttonEnergeScill = buttonEnergeScill + 1;
    
    setTimeout(MonsterAttack, 500);
}
buttonHill.addEventListener('click', hill);
function scill(){
    if(buttonEnergeScill >= 3){
        if(You == 1){
            XP = XP + Scill;
            specifications[0].textContent = `XP: ${XP}`;
            buttonEnergeScill = buttonEnergeScill - 3;
        }else{
            Damage = Damage + Scill;
            specifications[1].textContent = `Damage: ${Damage}`;
            buttonEnergeScill = buttonEnergeScill - 3;
        }
        
    }else{
        alert("Для испльзования скила нужно сделать минимум 3 действия!");
    }
    
    setTimeout(MonsterAttack, 500);
}
buttonScill.addEventListener('click', scill);



let GetRandom; 
function getRandom(){
    GetRandom = Math.random();
}


function MonsterAttack(){
    MonsterCharacter.style.borderColor = "red";
    getRandom();
    if(OrkEnergeScill == 3){
        alert('О нет, Орк использовал супер приём!');
        OrkDamage = OrkDamage + 10;
        OrkEnergeScill = OrkEnergeScill - 3;
        enemy[1].textContent = `Damage: ${OrkDamage}`;
    }else if(GetRandom < 0.5){
        alert('О нет, Орк подлечился!');
        OrkXP = OrkXP + 14;
        OrkEnergeScill = OrkEnergeScill + 1;
        enemy[0].textContent = `XP: ${OrkXP}`;
    }else if(GetRandom > 0.5){
        alert('О нет, Орк атаковал!');
        XP = XP - OrkDamage;
        OrkEnergeScill = OrkEnergeScill + 1;
        specifications[0].textContent = `XP: ${XP}`;
    }
    if(OrkXP <= 0){
        worldFight.hidden = true;
        SelectionField.hidden = false;
        Win = Win + 1;
        OrkXP = (OrkXP*0) +100;
        OrkDamage = (OrkDamage*0)+10;
        OrkEnergeScill = 0;
        enemy[0].textContent = `XP: ${OrkXP}`; 
        enemy[1].textContent = `Damage: ${OrkDamage}`;
        WP.textContent = `Выбери место куда ты хочешь отправиться! Побед:${Win}`;
        alert(`You Win!!! Количество побед: ${Win}`);
    }
    if(XP <= 0){
        alert('Ты проиграл!');
        location.reload();
    }
    Character.style.borderColor = "red";
    MonsterCharacter.style.borderColor = "#086972";
}



