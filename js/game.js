import screen from './screen.js';
export default {
    correctAnswer: 'tangerina',
    currentAnswer: [],
    mistakes: 0,
    maxMistakes: 3,

    startGame(){
        this.currentAnswer = Array(this.correctAnswer.length).fill(null);
        this.mistakes = 0;
    },

    checkLetterSended(letterSended){
        if(this.correctAnswer.indexOf(letterSended) === -1){
            this.mistakes++;
        }else{
            this.updateCurrentAnswer(letterSended);
        }

        screen.render();
    },

    updateCurrentAnswer(letterSended){
        for(let i=0; i<this.correctAnswer.length; i++){
            if(letterSended === this.correctAnswer[i]){
                this.currentAnswer[i] = this.correctAnswer[i];
            }
        }
    },

    getGameState(){
        const {currentAnswer, mistakes, maxMistakes} = this;

        return {
            currentAnswer,
            mistakes,
            maxMistakes,
        }
    }
}