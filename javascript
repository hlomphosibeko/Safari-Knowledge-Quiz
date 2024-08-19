// represents an array 
const questions = [
	    {
        safariQuestion: "What is the name of the below animal?",
        safariQuizAnimals: '<img src="assets/images/bird.jpg">',
        Answer1: "bird",
        Answer2: "tiger",
        Answer3: "frog",
        Answer4: "fish",
        correctAnswer: "bird",
    },
    {
        safariQuestion: "Where does the below animal live?",
        safariQuizAnimals: '<img src="assets/images/cheetah.jpg">',
        Answer1: "in the ocean",
        Answer2: "at the zoo",
        Answer3: "space",
        Answer4: "in a house",
        correctAnswer: "at the zoo",
    }
]


let index = 0;

// this add the question at the index variable to the DOM
function displayQuestion() {
	const currentQuestion = questions[index];

	// add the value of the current questions to theor respective radio button
};

function addButtonEventListeners() {
	const buttons = document.querySelectorAll('input[type=radio]');

    for (let btn of buttons) {
        btn.addEventListener('click', function (event) {
            // we pass the value of the clicked radio button to our checkAnswer function
            // the event.target IS the clicked radio button
            checkAnswer(event.target.value);
        })
    }
}

function checkAnswer(value) {
	// the answer is correct
	if (value === questions[index].correctAnswer) {}
	// the answer is not correct
	else {}

	// increase the index to move to the next question
	index++;
}