const displayChoices = (choicesMapping) => {
    const choicesHtml = choicesMapping.map((letterMapping) => {
        if (letterMapping.isChosen === false) {
            return `<li>${letterMapping.letter}</li>`;
        } else {
            return `<li class="disabled">${letterMapping.letter}</li>`;
        }
    });
    els.choices.querySelector('ul').innerHTML = choicesHtml.join('');
};

const displayScore = () => {
    els.score.innerHTML = `<img src="00${scoreCount}.png" alt="hangman" />`;
};

const displayWord = (wordMapping) => {
    const wordHtml = wordMapping.map((letterMapping) => {
        if (letterMapping.isVisible === true) {
            return `<li>${letterMapping.letter}</li>`;
        } else {
            return `<li>_</li>`;
        }
    });

    els.answer.querySelector('ul').innerHTML = wordHtml.join('');
};

const generateChoices = () => {
    const choices = [];
    for(let index = 65; index <= 90; index++) {
        choices.push(String.fromCharCode(index));
    }
    return choices;
};

const getChoicesMapping = (choices) => {
    return choices.map((letter) => {
        return {
            letter,
            isChosen: false
        };
    });
};

const getWordMapping = (word) => {
    const wordArr = word.split('');
    return wordArr.map((letter, index) => {
        let isVisible = false;
        if (index === 0 || index === wordArr.length - 1) {
            isVisible = true;
        }

        return {
            letter,
            isVisible
        };
    });
};

const pickWord = () => {
    const randomIndex = getRandomInt(0, words.length - 1);

    return words[randomIndex];
};