// ВСЕ ПЕРЕМЕННЫЕ_____________________________
let inputName;
let You;
//Переменные игрока
let Win = 0;
let XP;
let Damage;
let Scill;
let buttonEnergeScill = 0;
//Переменные противнмка
let Monster = 0;
let MonsterXP = 100;
let MonsterDamage = 10;
let MonsterEnergeScill = 0;

let GetRandom; 

let XPHerous;
let XPZla;
//Переменные которым присваиваются бульбочки из html кода
const Window = document.getElementById("window");
let buttonGame = document.querySelectorAll('.ColorButton');
let a = document.getElementById("Saef1");
//
const SelectionField = document.getElementById("selectionField");
let WP = document.getElementById("w");
const fight = document.getElementById("Fight");
const fight1 = document.getElementById("Fight1");
const fight2 = document.getElementById("Fight2");
//
const worldFight = document.getElementById("WorldFight");
let Character = document.getElementById("Ikon1");
let MonsterCharacter = document.getElementById("Ikon2");
let heightMotion = document.getElementById("Height1");
let WindowFight = document.getElementById("windoFight");
let specifications = document.querySelectorAll('.Abilities');
let enemy = document.querySelectorAll('.Enemy');
let buttonAttack = document.getElementById("Attack");
let buttonHill = document.getElementById("Xill");
let buttonScill = document.getElementById("Q");
//
let finish = document.getElementById("Finish");
let nameFinish = document.getElementById("NameFinish");
//Конец всем основным переменным дальше идут только переменные с музыкой--------
let fon = document.getElementById("Fon");




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
function colorOver6(){
        buttonGame[5].style.backgroundColor = "#A7FF83";
        buttonGame[5].style.color = "black";
}
function colorOut6(){
        buttonGame[5].style.backgroundColor = "#086972";
        buttonGame[5].style.color = "white";
}
function colorOver7(){
        buttonGame[6].style.backgroundColor = "#A7FF83";
        buttonGame[6].style.color = "black";
}
function colorOut7(){
        buttonGame[6].style.backgroundColor = "#086972";
        buttonGame[6].style.color = "white";
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
buttonGame[5].addEventListener('mouseover', colorOver6);
buttonGame[5].addEventListener('mouseout', colorOut6);
buttonGame[6].addEventListener('mouseover', colorOver7);
buttonGame[6].addEventListener('mouseout', colorOut7);

//По нажатию кнопки сохраняются данные которые игрок ввёл и переход на следующую страницу 

const I1 = function myName(){
    inputName = document.getElementById("Name1").value;
    const personaMan = document.getElementById("man").checked;
    const personaGirl = document.getElementById("girl").checked;
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
a.addEventListener('click', AudioFon);

//Далее идёт код для работы с боями



function startFight(){
    SelectionField.hidden = true;
    worldFight.hidden = false;
    document.body.style.background = "#5C341E";
}
function startFight1(){
    SelectionField.hidden = true;
    worldFight.hidden = false;
    document.body.style.background = "#5C341E";
}
fight.addEventListener('click', startFight);
fight1.addEventListener('click', startFight1);
fight2.addEventListener('click', startFight);


//Сама бевая система



console.log(specifications);


function Specifications(){
    fon.src = "Пещера.mp3";
    fon.play();
    if(You == 1){
        XP = 75;
        Damage = 20;
        Scill = 40;
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
    enemy[0].textContent = `XP: ${MonsterXP}`; 
    enemy[1].textContent = `Damage: ${MonsterDamage}`;
    enemy[2].textContent = `Scill: ${"Damage" + "+" + 10}`;
    MonsterCharacter.src = "Орк.jpg";
    Monster = 1;
}
function Specifications1(){
    fon.src = "Баар.mp3";
    fon.play();
    if(You == 1){
        XP = 75;
        Damage = 20;
        Scill = 40;
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
    Monster = 2;
    MonsterCharacter.src = "Скелет.jpg";
    MonsterXP = 65;
    MonsterDamage = 30;
    MonsterEnergeScill = 0;
    enemy[0].textContent = `XP: ${MonsterXP}`; 
    enemy[1].textContent = `Damage: ${MonsterDamage}`;
    enemy[2].textContent = 'Scill: Юморист'; 
}
function Specifications2(){
    fon.src = "Леес.mp3";
    fon.play();
    if(You == 1){
        XP = 75;
        Damage = 20;
        Scill = 35;
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
    Monster = 3;
    MonsterCharacter.src = "Хранитель.jpg";
    MonsterXP = 200;
    MonsterDamage = 2;
    MonsterEnergeScill = 0;
    enemy[0].textContent = `XP: ${MonsterXP}`; 
    enemy[1].textContent = `Damage: ${MonsterDamage}`;
    enemy[2].textContent = 'Scill: Хук Метеора'; 
}

fight.addEventListener('click', Specifications);
fight1.addEventListener('click', Specifications1);
fight2.addEventListener('click', Specifications2);



Character.style.borderColor = "red";
heightMotion.textContent = 'Ваш ход';
    
function attack(){
    
    if(Character.style.borderColor == "red"){
    fonAttack();
    heightMotion.textContent = 'Ваш ход';
    MonsterXP = MonsterXP - Damage;
    enemy[0].textContent = `XP: ${MonsterXP}`;
    buttonEnergeScill = buttonEnergeScill + 1;
    }
        
    if(MonsterXP <= 0){
        worldFight.hidden = true;
        SelectionField.hidden = false;
        Win = Win + 1;
        MonsterXP = (MonsterXP*0) +100;
        MonsterDamage = (MonsterDamage*0)+10;
        enemy[0].textContent = `XP: ${MonsterXP}`;
        enemy[1].textContent = `Damage: ${MonsterDamage}`;
        MonsterEnergeScill = 0;
        buttonEnergeScill = 0;
        WP.textContent = `Выбери место куда ты хочешь отправиться! Побед:${Win}/5`;
        alert(`You Win!!! Количество побед: ${Win}`);
        document.body.style.background =  "#071A52";
        if(Win == 5){
            SelectionField.hidden = true;
            finish.hidden = false;
            nameFinish.textContent = `${inputName} стал героем!`;
            document.body.style.background =  "#071A52";
        }
        return;
    }
    Character.style.borderColor = "#086972";
    MonsterCharacter.style.borderColor = "red";
    setTimeout(MonsterAttack, 1500);
 
}
buttonAttack.addEventListener('click', attack);
function hill(){
    heightMotion.textContent = 'Ваш ход';
    if(Character.style.borderColor == "red"){
        XP = XP + 15;
    specifications[0].textContent = `XP: ${XP}`;
    buttonEnergeScill = buttonEnergeScill + 1;
        
    }
    Character.style.borderColor = "#086972";
    MonsterCharacter.style.borderColor = "red";
    setTimeout(MonsterAttack, 1500);
}
buttonHill.addEventListener('click', hill);
function scill(){
    heightMotion.textContent = 'Ваш ход';
    if(Character.style.borderColor = "red"){
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
        return;
    }
    
        
    }
    Character.style.borderColor = "#086972";
    MonsterCharacter.style.borderColor = "red";
    setTimeout(MonsterAttack, 1500);
}
buttonScill.addEventListener('click', scill);


 
function getRandom(){
    GetRandom = Math.random();
}


function MonsterAttack(){
    if(MonsterCharacter.style.borderColor == "red"){
        if(Monster == 1){
        getRandom();
        console.log(GetRandom);
    if(MonsterEnergeScill == 3){
        heightMotion.textContent = 'Scill врага: противник использовал Scill';
        MonsterDamage = MonsterDamage + 10;
        MonsterEnergeScill = MonsterEnergeScill - 3;
        enemy[1].textContent = `Damage: ${MonsterDamage}`;
    }else if(GetRandom < 0.5){
        heightMotion.textContent = 'Ход врага: противник излечился. ХР + 14';
        MonsterXP = MonsterXP + 14;
        MonsterEnergeScill = MonsterEnergeScill + 1;
        enemy[0].textContent = `XP: ${MonsterXP}`;
    }else if(GetRandom > 0.5){
        fonAttack();
        heightMotion.textContent = `Ход врага: противник нанёс удар. ХР - ${MonsterDamage}`;
        XP = XP - MonsterDamage;
        MonsterEnergeScill = MonsterEnergeScill + 1;
        specifications[0].textContent = `XP: ${XP}`;
    }
    if(MonsterXP <= 0){
        worldFight.hidden = true;
        SelectionField.hidden = false;
        Win = Win + 1;
        MonsterXP = (MonsterXP*0) +100;
        MonsterDamage = (MonsterDamage*0)+10;
        MonsterEnergeScill = 0;
        WP.textContent = `Выбери место куда ты хочешь отправиться! Побед:${Win}/10`;
        alert(`You Win!!! Количество побед: ${Win}`);
    }
    if(XP <= 0){
        alert('Ты проиграл!');
        location.reload();
    }
        Character.style.borderColor = "red";
    MonsterCharacter.style.borderColor = "#086972";
  }

    
      else if(Monster == 2){
      getRandom();
        console.log(GetRandom);
      
    if(MonsterEnergeScill == 3){
        heightMotion.textContent = 'Scill врага: поменял ХР местами';
        XPHerous = XP;
        XPZla = MonsterXP;
        XP = XPZla;
        MonsterXP = XPHerous;
        MonsterEnergeScill = MonsterEnergeScill - 3;
        enemy[0].textContent = `XP: ${MonsterXP}`;
        specifications[0].textContent = `XP: ${XP}`;
    }else if(GetRandom < 0.5){
        heightMotion.textContent = 'Ход врага: противник излечился. ХР + 14';
        console.log(MonsterXP);
        MonsterXP = MonsterXP + 14;
        console.log(MonsterXP);
        MonsterEnergeScill = MonsterEnergeScill + 1;
        enemy[0].textContent = `XP: ${MonsterXP}`;
    }else if(GetRandom > 0.5){
        fonAttack();
        heightMotion.textContent = `Ход врага: противник нанёс удар. ХР - ${MonsterDamage}`;
        XP = XP - MonsterDamage;
        MonsterEnergeScill = MonsterEnergeScill + 1;
        specifications[0].textContent = `XP: ${XP}`;
    }
    if(MonsterXP <= 0){
        worldFight.hidden = true;
        SelectionField.hidden = false;
        Win = Win + 1;
        MonsterXP = (MonsterXP*0) + 65;
        MonsterDamage = (MonsterDamage*0)+30;
        MonsterEnergeScill = 0;
        WP.textContent = `Выбери место куда ты хочешь отправиться! Побед:${Win}/10`;
        alert(`You Win!!! Количество побед: ${Win}`);
    }
    if(XP <= 0){
        alert('Ты проиграл!');
        location.reload();
    }
        Character.style.borderColor = "red";
        MonsterCharacter.style.borderColor = "#086972";
          
    }
      else if(Monster == 3){
      getRandom();
        console.log(GetRandom);
      
    if(MonsterEnergeScill == 3){
        fonAttack();
        heightMotion.textContent = 'Scill врага: Ваше ХР - 50';
        XP = XP - 50;
        MonsterEnergeScill = MonsterEnergeScill - 3;
        specifications[0].textContent = `XP: ${XP}`;
    }else if(GetRandom < 0.6){
        heightMotion.textContent = 'Ход врага: противник излечился. ХР + 5';
        MonsterXP = MonsterXP + 5;
        console.log(MonsterXP);
        MonsterEnergeScill = MonsterEnergeScill + 1;
        enemy[0].textContent = `XP: ${MonsterXP}`;
    }else if(GetRandom > 0.6){
        fonAttack();
        heightMotion.textContent = `Ход врага: противник нанёс удар. ХР - ${MonsterDamage}`;
        XP = XP - MonsterDamage;
        MonsterEnergeScill = MonsterEnergeScill + 1;
        specifications[0].textContent = `XP: ${XP}`;
    }
    if(MonsterXP <= 0){
        worldFight.hidden = true;
        SelectionField.hidden = false;
        Win = Win + 1;
        MonsterXP = (MonsterXP*0) + 200;
        MonsterDamage = (MonsterDamage*0)+ 2;
        MonsterEnergeScill = 0;
        WP.textContent = `Выбери место куда ты хочешь отправиться! Побед:${Win}/10`;
        alert(`You Win!!! Количество побед: ${Win}`);
    }
    if(XP <= 0){
        alert('Ты проиграл!');
        location.reload();
    }
        Character.style.borderColor = "red";
        MonsterCharacter.style.borderColor = "#086972";
  }
        
  }
}

//музакальная состовляющая игры

function AudioFon(){
    fon.play();
    fon.volume = 0.2;
}

function fonAttack(){
    let fonA = document.getElementById("attackFon");
    fonA.play();
    fonA.volume = 0.4;
}
