    function getComputerChoice () {
        variable    = new Array();
        variable[0] = 'Piedra';
        variable[1] = 'Papel';
        variable[2] = 'Tijera';
        aleatorio   = Math.floor(Math.random() * 3);
        console.log( variable[aleatorio]);
    }
    
    getComputerChoice()