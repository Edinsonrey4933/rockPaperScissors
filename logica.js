   let pc=0;
   let user=0;
   let ingresoUser="";
   
    function getComputerChoice () {
        variable    = new Array();
        variable[0] = 'Piedra';
        variable[1] = 'Papel';
        variable[2] = 'Tijera';
        aleatorio   = Math.floor(Math.random() * 3);
        return variable[aleatorio];
    }
    
    function verificaGanador(playerSelection,computerSelection){
    playerSelection=playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    console.log(computerSelection);
    console.log(playerSelection);
    
    if (computerSelection == playerSelection) {
      window.alert("empate");
    }else if((computerSelection=="PIEDRA" && playerSelection=="PAPEL")||(computerSelection=="TIJERA" && playerSelection=="PIEDRA")||(computerSelection=="PAPEL" && playerSelection=="TIJERA")){
      
      window.alert("Gana Jugador")
      user=user+1;
    } else {
      window.alert("Gana PC")
      pc=pc+1;
    }
    
     
    }
    
    function game (){
     while(user<=4 && pc<=4){
     ingresoUser = prompt("Ingrese piedra papel o tijera")
     verificaGanador(ingresoUser,getComputerChoice())
     alert("Puntos user "+user+" Puntos Pc "+pc)
    }
  if (user=5){
       alert("Gano Jugador")
     }else if(pc=5){
       alert("gano maquina")
     }
    }
    game();
 