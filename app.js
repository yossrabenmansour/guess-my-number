function guessMyNumber(){
    const numRandom= Math.floor(Math.random() * 20) + 1;
    let tries=0;


    function tryGuess(guess){
        tries++;

        if (guess===numRandom){
            console.log(`Congratulations! You guessed the number in ${tries} tries.`)
        }else if (guess<numRandom){
             console.log('Too low. Try again.')
        }else if(guess>numRandom){
           console.log('Too high. Try again.')
        }
    }
}