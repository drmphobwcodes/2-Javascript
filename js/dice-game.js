function rollDice(){
    //this will keep track of how many gold coins the player has won
    let goldCoins = 0;
    for(let i = 0; i < 10; i++){
        //roll the dice
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('You rolled a ' + roll + '.');
        //check if the roll is 1 or 6
        if(roll === 1 || roll === 6){
            //if so, increment goldCoins by 1
            goldCoins++;
        }
        //if the roll triple equals 1 then , end the game
        if(roll === 1){
            alert('Game over, no more rolls!');
            break;
        }
        //if the roll is less than 5 then continue
        if(roll < 5){
            continue;
        }
        //if the roll is greater than or equal 5 then break
        if(roll >= 5){
            alert('Congratulations, you win ' + goldCoins + ' gold coins!');
            break;

    }
}
}
goldCoins++;
