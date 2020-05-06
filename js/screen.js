import game from './game.js';
import input from './input.js';
import elements from './elements.js';

export default {
    startScreen(){
        elements.getElements.call(this);
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

        if(gameState.gameEnded) this.renderModalElement(game.isGameWon(), gameState.correctAnswer);

        this.renderWordElement(gameState.currentAnswer);
        this.renderMistakesElement(gameState.mistakes, gameState.maxMistakes);
        this.renderTypedLetters(gameState.typedLetters, gameState.currentAnswer);
    },

    renderWordElement(wordToRender){
        //aqui qualquer letra não nula está correta
        for(let letter of wordToRender){
            this.gameWordElement.appendChild(
                elements.createLetterElement(letter, letter)
            );
        }
    },

    renderMistakesElement(mistakesCount, maxMistakes){
        let solidIconCount = mistakesCount;

        for(let i=0; i<maxMistakes; i++){
            this.gameMistakesElement.appendChild(
                elements.createMistakeIconElement(solidIconCount > 0)
            );
            solidIconCount--;
        }
    },

    renderTypedLetters(typedLetters, currentAnswer){
        //aqui letras corretas estão presentes na currentAnswer
        for(let letter of typedLetters){
            let isLetterCorrect = currentAnswer.indexOf(letter) != -1;

            this.gameTypedLetters.appendChild(
                elements.createLetterElement(letter, isLetterCorrect)
            );
        }
    },

    renderModalElement(isGameWon, correctAnswer){
        this.gameBodyElement.appendChild(
            elements.createModalElement(isGameWon, correctAnswer, this.restart.bind(this))
        )
    },

    restart(){
        console.log(this);
        this.gameBodyElement.removeChild(
            document.querySelector('.modal')
        );

        game.startGame();
    }


}