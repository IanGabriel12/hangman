import game from './game.js';
import elements from './elements.js';
import audio from './audio.js';

export default {
    setActions(){
        elements.getElements.call(this);

        //Ações do teclado:
        const Enter = () => {
            this.onLetterSend(this.letterInputElement.value);
        };
        const Control = () => {
            audio.toggleAudio();
        }

        const keyboardActions = {
            Enter,
            Control,
        };

        this.gameBodyElement.onkeydown = event => {
            let action = keyboardActions[event.key];
            if(action) action();
        };

        //Ações de clique:
        this.sendButtonElement.onclick = () => {
            this.onLetterSend(this.letterInputElement.value);
        } 

        this.gameAudioElement.onclick = () => {
            audio.toggleAudio();
        }
    },

    onLetterSend(letterSended){
        if(!this.isCharacterValid(letterSended)) return;

        game.checkLetterSended(letterSended.toLowerCase());
    },

    isCharacterValid(char){
        let uppercaseLetter = char.toLowerCase();
        let allowedInput = 'abcdefghijklmnopqrstuvwxyz';

        if(
            !uppercaseLetter || 
            allowedInput.indexOf(uppercaseLetter) === -1
        ) return false;

        return true;
    }
}