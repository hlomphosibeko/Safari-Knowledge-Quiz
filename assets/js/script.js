/**
 * An array of objects that will hold the questions, answers and the correct answer
 */
let mySafariQuestions = ['1. What is the name of the above animal?', '2. What is its habitat?', 
    '3. What color is it?', '4. How many legs does it have?', '5. Does it lay eggs?', 
    '6. Is it fast or slow?', '7. How does it move?']

                    

/**
 * Create a variable that will hold the index number of the question you are currently displaying
 */
let indexQuestion = mySafariQuestions[2];


/**
 * Create a function that will generate a random number from the array and store it in the global variable in number 2
 */

function randomQuestion() {

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
                alert(`You clicked ${gameType}`);
            }
        })
    }
})
/**
 * when the click is registered, you want to compare the correct answer with the users answers
 */


/**
 * update the correct/incorrect counter and call the next question
 */