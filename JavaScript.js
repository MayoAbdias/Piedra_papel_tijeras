//Creo variables del score del usuario y de la computadora.
let scoreHuman = 0;
let scoreComputer = 0;

//Creo la funcion para que salga aleatoriamente piedra,papel o tijeras.
function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if(num === 0){
        return "piedra";
    
    } 
    else if(num === 1){
        return "papel";
    }
    else{
        return "tijeras";
    }
}
//Funcion para el usuario
function getHumanChoice(){
    let juego = prompt("Elija una opcion..(piedra,papel o tijeras):");
    return juego.toLowerCase();
}
function playRound(humanChoice,computerChoice){
    
    if(humanChoice === "piedra"){
        if(computerChoice === "tijeras"){
            scoreHuman ++;

            return `Ganaste!! ${humanChoice} beats ${computerChoice}`;
        }else if(computerChoice === "papel"){
            scoreComputer ++;
            return `Perdiste.. ${computerChoice} beats ${humanChoice}`;
        }else{
            return `Empate!`;
        }      
    }else if(humanChoice === "papel"){
        if(computerChoice === "piedra"){

            scoreHuman ++;
            return `Ganaste! ${humanChoice} beats ${computerChoice}`;
        }else if(computerChoice === "tijeras"){
            scoreComputer ++;
            return `Perdiste ${computerChoice} beats ${humanChoice}`;
        }else{
            return `Empate`;
        }
    }else if(humanChoice === "tijeras"){
        if(computerChoice === "papel"){

            scoreHuman ++;
            console.log(`Ganaste!! ${humanChoice} beats ${computerChoice}`)
        }else if(computerChoice === "piedra"){

            scoreComputer ++;
            return `Perdiste! ${computerChoice} beats ${humanChoice}`;
        }else{
            return `Empate`
        }   
    }
}
//Funcion para que se jueguen 5 rondas y ver quien gano.    
function playGame(){
    for (let x = 0; x < 5; x++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection,computerSelection));
        console.log(`Human Score: ${scoreHuman}\n Computer Score: ${scoreComputer}`);        
    }
} 
playGame(); 


    

