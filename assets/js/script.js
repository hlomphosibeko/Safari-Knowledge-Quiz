document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementsByClassName('btn');

    for (let btn of button) {
        btn.addEventListener('click', function() {
            if(this.getAttribute("type") === "submit") {
               alert("You clicked Submit!")
            } else {
                let gameType = this.getAttribute("type");
                startGame(gameType);
            }
        })
    }

    startGame("mySafariQuesions");
})

function myDisplayedQuestions(safariQuestion, safariQuizAnimals) {
    let x = Math.abs(6 - Math.floor(Math.random() * 10));

    document.getElementsByClassName("safari-question").innerText = mySafariQuestions[x][safariQuestion];
    document.getElementsByClassName("safari-quizAnimals").innerHTML = mySafariQuestions[x][safariQuizAnimals];

    myDisplayedQuestions();
}

function displayAnswer1() {
    if (document.getElementById("answer1").checked) {
        document.getElementById("answer1").textContent = mySafariQuestions[0][correctAnswer];
    } else if (document.getElementById("answer2").checked) {
            alert(`You selected ${document.getElementById("answer2")
            .textContent} which is incorrect. The correct answer is ${document.getElementById("answer1")}`)
        }
    
        displayAnswer1();
}

/**
 * A variable which consists of a list of objects with 
 * questions and answers.
 */
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




