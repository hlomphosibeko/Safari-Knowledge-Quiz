/**
 * An array of objects that will hold the questions, answers and the correct answer
 */
let myAnimals = ['cheetah', 'elephant', 'fish', 'giraffe', 'crocodile', 'bird', 'frog', 
                 'hippo', 'lion', 'tiger', 'tortoise', 'zebra']
                 
let mySafariQuestions = ['1. What is the name of the above animal?', '2. What is its habitat?', 
    '3. What color is it?', '4. How many legs does it have?', '5. Does it lay eggs?', 
    '6. Is it fast or slow?', '7. How does it move?'];

    function displaySafariQuestion(animalQuestion, animalImage) {
    document.getElementById('animalQuestion')[0].textContent = safari-questions;
    document.getElementById('animalImage').textContent = safari-quizAnimals;
}

let mySafariAnswers = [ ]
                
/**
 * Create a variable that will hold the index number of the question you are currently displaying
 */
let indexQuestion = mySafariQuestions[2];


/**
 * Create a function that will generate a random number from the array and store it in the global variable in number 2
 */

function randomQuestion(gameType) {
    let mySafariQuestions = Math.floor(Math.random);

    if (gameType === "hidden-question") {
       displayQuestion(mySafariQuestions);
    } else {
        alert(`Unkown game type: ${gameType}`);
        throw `Unkown game type: ${gameType}. Aborting!`;
    }
}
/**
 * Create a function that will pull a question from the array of objects
 */
function getQuestion() {

}
/**
 *  The above function will create/select some HTML element on the page, and put the question and options into them,
 */

/**
 * Create an event listener to capture the users click
 */
document.addEventListener("DOMContentLoaded", function() {
    let submitButton = document.getElementsByTagName("button");

    for (let button of submitButton) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                randomQuestion(gameType);
            }
        })
    }

    randomQuestion("hidden-question");
})
/**
 * when the click is registered, you want to compare the correct answer with the users answers
 */
function checkUserAnswer() {
    let animalQuestion = String(document.getElementById('animalQuestion').innerText);
    let animalImage = String(document.getElementById('animalImage').innerText);

    
}

/**
 * update the correct/incorrect counter and call the next question
 */