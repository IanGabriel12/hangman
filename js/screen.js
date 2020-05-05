import game from './game.js';
import input from './input.js';

export default {
    gameWordElement: document.querySelector('.word'),

    startScreen(){
        game.startGame();
        input.setActions();

        this.render();
    },

    render(){
        const gameState = game.getGameState();

        for(let letter of gameState.currentAnswer){
            this.gameWordElement.appendChild(
                this.createLetterElement(letter)
            );
        }
    },

    createLetterElement(letter){
        let letterElement = document.createElement('div');
        letterElement.innerText = letter;
        letterElement.classList.add('letter');
    
        if(letter) letterElement.classList.add('correct');
    
        return letterElement;
    }
}