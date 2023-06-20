const buttonGame = document.getElementById("game1");
console.log(buttonGame);
function colorOver(){
buttonGame.style.backgroundColor = "#6B8E23";
}
function colorOut(){
buttonGame.style.backgroundColor = "#808000";
}
buttonGame.addEventListener('mouseover', colorOver);
buttonGame.addEventListener('mouseout', colorOut);


//По нажатию кнопки сохраняются данные которые игрок ввёл и переход на следующую страницу 

function myName(){
    const inputName = document.getElementById("Name1").value;
    //console.log(inputName);
    const personaMan = document.getElementById("man").checked;
    const personaGirl = document.getElementById("girl").checked;
    //console.log(personaMan);
    //console.log(personaGirl);
    let Persona;
    if(personaMan){
        Persona = "Ты выбрали Парня";
    } else if(personaGirl){
        Persona = "Ты выбрали Девушку";
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
        location.href = 'ChoosingaOpponent.html'
    }

}
buttonGame.addEventListener('click', myName);

//Далее идёт код для работы сайта ChoosingaOpponent.html

