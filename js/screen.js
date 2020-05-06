import game from './game.js';
import input from './input.js';

export default {
    gameWordElement: document.querySelector('.word'),
    gameMistakesElement: document.querySelector('.mistakes'),
    gameTypedLetters: document.querySelector('.typed-letters'),

    startScreen(){
        game.startGame();
        input.setActions();

        this.render();
    },

    resetScreen(){
        this.gameMistakesElement.innerHTML = '';
        this.gameWordElement.innerHTML = '';
        this.gameTypedLetters.innerHTML = '';
    },

    render(){
        this.resetScreen();
        const gameState = game.getGameState();

        this.renderWordElement(gameState.currentAnswer);
        this.renderMistakesElement(gameState.mistakes, gameState.maxMistakes);
        this.renderTypedLetters(gameState.typedLetters, gameState.currentAnswer);
    },

    createLetterElement(letter, isLetterCorrect){
        let letterElement = document.createElement('div');
        letterElement.innerText = letter;
        letterElement.classList.add('letter');
    
        if(isLetterCorrect) letterElement.classList.add('correct');
    
        return letterElement;
    },

    renderWordElement(wordToRender){
        //aqui qualquer letra não nula está correta
        for(let letter of wordToRender){
            this.gameWordElement.appendChild(
                this.createLetterElement(letter, letter)
            );
        }
    },

    createMistakeIconElement(isIconActive){
        let iconElement = document.createElement('i');
        iconElement.classList.add('fa-times-circle', 'far');
        if(isIconActive) iconElement.classList.add('active');
        
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
    },

    renderTypedLetters(typedLetters, currentAnswer){
        //aqui letras corretas estão presentes na currentAnswer
        for(let letter of typedLetters){
            let isLetterCorrect = currentAnswer.indexOf(letter) != -1;

            this.gameTypedLetters.appendChild(
                this.createLetterElement(letter, isLetterCorrect)
            );
        }
    }


}