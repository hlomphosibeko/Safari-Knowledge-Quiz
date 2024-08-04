function checkAnswer() {
    let userAnswer = parseInt(document.getElementsByTagName("answer-box").value)
    let correspondImage = showCorrectAnswer();
    let isCorrect = userAnswer === correspondImage[0];

    if (isCorrect) {
        alert("Well done...You definitely know your animals!");
        incrementScore();
    } else {
        alert(`Try again next time! ${userAnswer}. Correct answer is ${showCorrectAnswer[0]}!`);
        incrementScore();
    }

    runGame(correspondImage[1])
}

/**
 * An array of objects that will hold the questions, answers and the correct answer
 */
let safariQuestions = ['What is the name of this animal?', 'Where does it live?', 
                        'What color is it?', 'How many legs does it have?', 'What food does this animal eat?', 
                        'What color are the spots?', 'Can a hippo swim?', 'What is the fastest animal?']

        if ()                

/**
 * Create a variable that will hold the index number of the question you are currently displaying
 */

/**
 * Create a function that will generate a random number from the array and store it in the global variable in number 2
 */

/**
 * Create a function that will pull a question from the array of objects
 */

/**
 *  The above function will create/select some HTML element on the page, and put the question and options into them,
 */

/**
 * Create an event listener to capture the users click
 */

/**
 * when the click is registered, you want to compare the correct answer with the users answers
 */


/**
 * update the correct/incorrect counter and call the next question
 */