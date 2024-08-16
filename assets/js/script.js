function myRadio() {
    console.log('You clicked a button')
}
let input = document.getElementsByTagName('input')
    input.addEventListener('click', myRadio);

let myListOfKeys = ['question', 'questionImg', 'Answer1', 'Answer2', 'Answer3', 'Answer4', ' correctAnswer']    
let myQuestion =  mySafariQuestions[0][myListOfKeys[Math.abs(6 - Math.floor(Math.random() * 10))]];    

function fetchMyQuestion(mySafariQuestions) {
    let safariQuestions = [];
    for (let i = 0; i < mySafariQuestions; i++) {
        safariQuestions.push('safariQuestion');
    }
    return safariQuestions;
}
fetchMyQuestion(7); 

// My array of questions, answers and correct answer

let mySafariQuestions = [
    {
        safariQuestion: "What is the name of the above animal?",
        safariQuizAnimals: "img/bird.jpg",
        Answer1: "bird",
        Answer2: "tiger",
        Answer3: "frog",
        Answer4: "fish",
        correctAnswer: "bird",
    },
    {
        safariQuestion: "Where does this animal live?",
        safariQuizAnimals: "img/cheetah.jpg",
        Answer1: "in the ocean",
        Answer2: "at the zoo",
        Answer3: "space",
        Answer4: "in a house",
        correctAnswer: "at the zoo",
    },
    {
        safariQuestion: "What color is it?",
        safariQuizAnimals: "img/crocodile.jpg",
        Answer1: "yellow",
        Answer2: "purple",
        Answer3: "brown",
        Answer4: "green",
        correctAnswer: "green",
    },
    {
        safariQuestion: "How many legs does it have?",
        safariQuizAnimals: "img/fish.jpg",
        Answer1: "2",
        Answer2: "4",
        Answer3: "8",
        Answer4: "0",
        correctAnswer: "0",
    },
    {
        safariQuestion: "Does it lay eggs?",
        safariQuizAnimals: "img/frog.jpg",
        Answer1: "no",
        Answer2: "only in summer",
        Answer3: "no idea",
        Answer4: "yes",
        correctAnswer: "yes",
    },
    {
        safariQuestion: "Is this animal fast or slow?",
        safariQuizAnimals: "img/tortoise.jpg",
        Answer1: "it is slow",
        Answer2: "it is fast",
        Answer3: "it can't move",
        Answer4: "it is fast only when it is hungry",
        correctAnswer: "it is slow",
    },
    {
        safariQuestion: "How does it move?",
        safariQuizAnimals: "img/zebra.jpg",
        Answer1: "walk",
        Answer2: "hops",
        Answer3: "swim",
        Answer4: "crawl",
        correctAnswer: "walk",
    }
];



function checkAnswer(){
    addClass(document.getElementById('correct').hide,);
    addClass(document.getElementById('wrong').hide,);

    if (answer === correctAnswer) {
        console.log("Correct Answer!");
        removeClass(document.getElementById('correct').hide,);  
    } else {
        console.log("That is an incorrecet answer.");
        removeClass(document.getElementById('wrong').hide,);
    }
}
checkAnswer();




// Variable which will hold the index number of the question currently displayed



// Function that will generate a random number from the array



// Function that will pull a question from the array of objects

