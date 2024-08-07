const safariQuestions = document.querySelector(".safari-questions");
const safariQuizAnimals = document.querySelector(".safari-quizAnimals");
const allAnswerClues = document.querySelectorAll(".btn");
const answerClue1 = document.querySelector("#answer1");
const answerClue2 = document.querySelector("#answer2");
const answerClue3 = document.querySelector("#answer3");
const answerClue4 = document.querySelector("#answer4");
const safariPoints = document.querySelector(".safari-points");

// My Questionair
let mySafariQuestions = [
    {
        question: "What is the name of the above animal?",
        questionImg: "img/bird.jpg",
        Answer1: "bird",
        Answer2: "tiger",
        Answer3: "frog",
        Answer4: "fish",
        correctAnswer: "bird",
    },
    {
        question: "Where does this animal live?",
        questionImg: "img/cheetah.jpg",
        Answer1: "in the ocean",
        Answer2: "at the zoo",
        Answer3: "space",
        Answer4: "in a house",
        correctAnswer: "at the zoo",
    },
    {
        question: "What color is it?",
        questionImg: "img/crocodile.jpg",
        Answer1: "yellow",
        Answer2: "purple",
        Answer3: "brown",
        Answer4: "green",
        correctAnswer: "green",
    },
    {
        question: "How many legs does it have?",
        questionImg: "img/fish.jpg",
        Answer1: "2",
        Answer2: "4",
        Answer3: "8",
        Answer4: "0",
        correctAnswer: "0",
    },
    {
        question: "Does it lay eggs?",
        questionImg: "img/frog.jpg",
        Answer1: "no",
        Answer2: "only in summer",
        Answer3: "no idea",
        Answer4: "yes",
        correctAnswer: "yes",
    },
    {
        question: "Is this animal fast or slow?",
        questionImg: "img/tortoise.jpg",
        Answer1: "it is slow",
        Answer2: "it is fast",
        Answer3: "it can't move",
        Answer4: "it is fast only when it is hungry",
        correctAnswer: "it is slow",
    },
    {
        question: "How does it move?",
        questionImg: "img/zebra.jpg",
        Answer1: "walk",
        Answer2: "hops",
        Answer3: "swim",
        Answer4: "crawl",
        correctAnswer: "walk",
    }
];