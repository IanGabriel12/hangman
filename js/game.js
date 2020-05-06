import screen from './screen.js';
export default {
    correctAnswer: 'tangerina',
    currentAnswer: [],
    typedLetters: [],
    mistakes: 0,
    maxMistakes: 3,

    startGame(){
        this.currentAnswer = Array(this.correctAnswer.length).fill(null);
        this.mistakes = 0;
        this.gameEnded = false;
        this.typedLetters = [];
        screen.render();
    },

    checkLetterSended(letterSended){
        if(this.typedLetters.indexOf(letterSended) != -1) return;

        if(this.correctAnswer.indexOf(letterSended) === -1){
            this.mistakes++;
        }else{
            this.updateCurrentAnswer(letterSended);
        }
        
        this.typedLetters.push(letterSended);
        screen.render();
    },

    updateCurrentAnswer(letterSended){
        for(let i=0; i<this.correctAnswer.length; i++){
            if(letterSended === this.correctAnswer[i]){
                this.currentAnswer[i] = this.correctAnswer[i];
            }
        }
    },

    checkGameEnd(){
        /*será chamada em toda atualização do 
        jogo para indicar se o jogo acabou*/
        if(this.currentAnswer.indexOf(null) === -1) return true;

        if(this.mistakes === this.maxMistakes) return true;

        return false;
    },

    isGameWon(){
        /*apenas será chamada quando o jogo acabar
        retorna se foi uma vitória ou derrota*/
        if(this.mistakes === this.maxMistakes) return false;

        return true;
    },

    getGameState(){
        const {correctAnswer, currentAnswer, mistakes, maxMistakes, typedLetters} = this;

        const gameEnded = this.checkGameEnd();

        return {
            correctAnswer,
            currentAnswer,
            mistakes,
            maxMistakes,
            typedLetters,
            gameEnded,
        }
    }
}