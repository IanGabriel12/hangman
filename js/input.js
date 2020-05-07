import game from './game.js';
import elements from './elements.js';
export default {
    setActions(){
        elements.getElements.call(this);

        //Ações do teclado:
        const Enter = () => {
            this.onLetterSend(this.letterInputElement.value);
        };

        const keyboardActions = {
            Enter,
        };

        this.gameBodyElement.onkeydown = event => {
            let action = keyboardActions[event.key];
            if(action) action();
        };

        //Ações de clique:
        this.sendButtonElement.onclick = () => {
            this.onLetterSend(this.letterInputElement.value);
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