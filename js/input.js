import game from './game.js';
import elements from './elements.js';
export default {
    setActions(){
        elements.getElements.call(this);

        this.sendButtonElement.onclick = () => {
            this.onLetterSend(this.letterInputElement.value);
            this.letterInputElement.value = '';
        }
    },

    onLetterSend(letterSended){
        if(!this.isCharacterValid(letterSended)) return;

        game.checkLetterSended(letterSended.toLowerCase());
    },

    isCharacterValid(char){
        let uppercaseLetter = char.toUpperCase();
        let allowedInput = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        if(
            !uppercaseLetter || 
            allowedInput.indexOf(uppercaseLetter) === -1
        ) return false;

        return true;
    }
}