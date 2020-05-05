import game from './game.js';
import input from './input.js';

export default {
    gameWordElement: document.querySelector('.word'),
    gameMistakesElement: document.querySelector('.mistakes'),

    startScreen(){
        game.startGame();
        input.setActions();

        this.render();
    },

    resetScreen(){
        this.gameMistakesElement.innerHTML = '';
        this.gameWordElement.innerHTML = '';
    },

    render(){
        this.resetScreen();
        const gameState = game.getGameState();

        this.renderWordElement(gameState.currentAnswer);
        this.renderMistakesElement(gameState.mistakes, gameState.maxMistakes);
    },

    createLetterElement(letter){
        let letterElement = document.createElement('div');
        letterElement.innerText = letter;
        letterElement.classList.add('letter');
    
        if(letter) letterElement.classList.add('correct');
    
        return letterElement;
    },

    renderWordElement(wordToRender){
        for(let letter of wordToRender){
            this.gameWordElement.appendChild(
                this.createLetterElement(letter)
            );
        }
    },

    createMistakeIconElement(isIconSolid){
        let iconElement = document.createElement('i');
        iconElement.classList.add('fa-times-circle');
        iconElement.classList.add(isIconSolid ? 'fas' : 'far');
        return iconElement;
    },

    renderMistakesElement(mistakesCount, maxMistakes){
        let solidIconCount = mistakesCount;

        for(let i=0; i<maxMistakes; i++){
            this.gameMistakesElement.appendChild(
                this.createMistakeIconElement(solidIconCount > 0)
            );
            solidIconCount--;
        }
    }
}