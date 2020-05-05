export default {
    correctAnswer: 'Tangerina',
    currentAnswer: [],
    mistakes: 0,

    startGame(){
        this.currentAnswer = Array(this.correctAnswer.length).fill(null);
        this.mistakes = 0;
    },

    getGameState(){
        const currentAnswer = this.currentAnswer;
        const mistakes = this.mistakes;

        return {
            currentAnswer,
            mistakes,
        }
    }
}