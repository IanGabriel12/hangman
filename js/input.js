export default {
    sendButtonElement: document.querySelector('#send'),
    letterInputElement: document.querySelector('.letter-input input'),
    
    setActions(){
        this.sendButtonElement.onclick = () => {
            this.onLetterSend(this.letterInputElement.value)
        }
    },

    onLetterSend(letterSended){
        if(!this.isCharacterValid(letterSended)) return;

        console.log(letterSended);
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