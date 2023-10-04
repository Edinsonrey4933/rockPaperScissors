    function getComputerChoice () {
        variable    = new Array();
        variable[0] = 'Piedra';
        variable[1] = 'Papel';
        variable[2] = 'Tijera';
        aleatorio   = Math.floor(Math.random() * 3);
        return variable[aleatorio];
    }
    
    getComputerChoice()
    
    function game(playerSelection,computerSelection){
    playerSelection=playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    console.log(computerSelection);
    console.log(playerSelection);
    
    if (computerSelection == playerSelection) {
      console.log("empate");
    }else if((computerSelection=="PIEDRA" && playerSelection=="PAPEL")||(computerSelection=="TIJERA" && playerSelection=="PIEDRA")||(computerSelection=="PAPEL" && playerSelection=="TIJERA")){
      
      console.log("Gana Jugador")
    } else {
      console.log("Gana PC")
    }
    
     
    }
    game("TIJERA",getComputerChoice());