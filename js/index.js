const currentWord = 'Tangerina';
const gameWordElement = document.querySelector('.word');

function render(word){
    for(letter of word){
        let letterElement = document.createElement('div');
        letterElement.classList.add('letter');
        console.log(letterElement);

        gameWordElement.appendChild(letterElement);
    }
}


render(currentWord);