import screen from './screen.js';
import gameWords from './words.js';
import audio from './audio.js';
export default {
    words: gameWords, //palavras ainda não jogadas
    previousWords: [], //palavras já jogadas
    correctAnswer: '',
    currentAnswer: [],
    typedLetters: [],
    mistakes: 0,
    maxMistakes: 3,

    startGame(){
        this.drawNewWord();
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
            audio.playSong('wrong.mp3');
        }else{
            this.updateCurrentAnswer(letterSended);
            audio.playSong('correct.wav');
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
        if(this.mistakes === this.maxMistakes) {
            audio.playSong('loss.wav');
            return false;
        }

        audio.playSong('win.wav');
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
    },

    drawNewWord(){
        if(this.words.length === 0) {
            this.resetWords();
            return;
        }

        //sorteando nova palavra
        let selectedWord = this.words[Math.floor(Math.random() * this.words.length)];
       
        //armazenando no histórico de palavras
        this.previousWords.push(selectedWord);
        this.words.splice(this.words.indexOf(selectedWord), 1);

        this.correctAnswer = selectedWord;
    },

    resetWords(){
        this.words = gameWords;
        this.previousWords = [];
    }
}