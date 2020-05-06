export default {
    getElements(){
        //Faz com que elementos fiquem acessíveis usando o .call(this);
        this.gameBodyElement = document.querySelector('body');
        this.gameWordElement = document.querySelector('.word');
        this.gameMistakesElement = document.querySelector('.mistakes');
        this.gameTypedLetters = document.querySelector('.typed-letters');
        this.sendButtonElement = document.querySelector('#send');
        this.letterInputElement = document.querySelector('#letter-input');
    },

    createModalElement(isGameWon, correctAnswer){
        let modalElement = document.createElement('div');
        modalElement.classList.add('modal');

        let modalMessageDiv = document.createElement('div');
        modalMessageDiv.classList.add('modal-message');
        
        let modalHeader = document.createElement('h1');
        modalHeader.innerText = isGameWon ? 'Vitória' : 'Derrota';
        modalHeader.classList.add(isGameWon ? 'win' : 'loss');
        
        let modalParagraph = document.createElement('p');
        modalParagraph.innerText = 'A resposta é:';

        let modalCorrectAnswer = document.createElement('h2');
        modalCorrectAnswer.innerText = correctAnswer;

        let modalButton = document.createElement('button');
        modalButton.innerText = 'Jogar novamente';
        modalButton.onclick = () => {
            this.deleteModalElement();
        };
        console.log(modalButton.onclick);

        modalMessageDiv.append(modalHeader, modalParagraph, modalCorrectAnswer, modalButton);
        modalElement.appendChild(modalMessageDiv);

        return modalElement; 
    },

    deleteModalElement(){
        console.log(this);
        this.getElements();

        const modalElement = document.querySelector('.modal');
        this.gameBodyElement.removeChild(modalElement);
    },

    createMistakeIconElement(isIconActive){
        let iconElement = document.createElement('i');
        iconElement.classList.add('fa-times-circle', 'far');
        if(isIconActive) iconElement.classList.add('active');
        
        return iconElement;
    },

    createLetterElement(letter, isLetterCorrect){
        let letterElement = document.createElement('div');
        letterElement.innerText = letter;
        letterElement.classList.add('letter');
    
        if(isLetterCorrect) letterElement.classList.add('correct');
    
        return letterElement;
    },
}