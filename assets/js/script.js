document.addEventListener("DOMContentLoaded", function() {
    let radios = document.querySelectorAll("input[type=radio]");
       
    for (let btn of radios) {
        btn.addEventListener("click", function() {
                let gameType = this.id;
                startGame(gameType);
            })

        }

    let buttons = document.getElementsByTagName("button"); 

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("type") === "submit") {
                myCheckAnswer();
            } 
        })
    }

   startGame('Answer1');
})

let mylist = []


let mySafariQuestions = [
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
    },
    {
        safariQuestion: "What color is the below animal?",
        safariQuizAnimals: '<img src="assets/images/crocodile.jpg">',
        Answer1: "yellow",
        Answer2: "purple",
        Answer3: "brown",
        Answer4: "green",
        correctAnswer: "green",
    },
    {
        safariQuestion: "How many legs does this animal have?",
        safariQuizAnimals: '<img src="assets/images/fish.jpg">',
        Answer1: "2 legs",
        Answer2: "4 legs",
        Answer3: "8 legs",
        Answer4: "no legs",
        correctAnswer: "no legs",
    },
    {
        safariQuestion: "Does this animal lay eggs?",
        safariQuizAnimals: '<img src="assets/images/frog.jpg">',
        Answer1: "no",
        Answer2: "only in summer",
        Answer3: "no idea",
        Answer4: "yes",
        correctAnswer: "yes",
    },
    {
        safariQuestion: "Is this animal fast or slow?",
        safariQuizAnimals: '<img src="assets/images/tortoise.jpg">',
        Answer1: "it is slow",
        Answer2: "it is fast",
        Answer3: "it can't move",
        Answer4: "it is fast only when it is hungry",
        correctAnswer: "it is slow",
    },
    {
        safariQuestion: "How does this animal move?",
        safariQuizAnimals: '<img src="assets/images/tiger.jpg">',
        Answer1: " it walks",
        Answer2: "it hops",
        Answer3: "it swims",
        Answer4: "it crawls",
        correctAnswer: "it walks",
    }
];



function myCorrectAnswer(x) {

   alert('The correct answer is :', mySafariQuestions[x]['correctAnswer'])
    return mySafariQuestions[x]['correctAnswer']

}

function myOptionsDisplay(x,gameType) {

    document.getElementById("answer-clue").innerHTML =
    `<input type="radio" name="response" value="answer1" id="Answer1">${mySafariQuestions[x][gameType]}
    <input type="radio" name="response" value="answer2" id="Answer2">${mySafariQuestions[x][gameType]}
    <input type="radio" name="response" value="answer3" id="Answer3">${mySafariQuestions[x][gameType]}
    <input type="radio" name="response" value="answer4" id="Answer4">${mySafariQuestions[x][gameType]}`

}

function myUserAnswer() {
   alert('The user answer is', mySafariQuestions[mylist[0]][mylist[1]])
    return mySafariQuestions[mylist[0]][mylist[1]];
}

let correctCounter = 0
let wrongCounter = 0

/**function gameOver() {

    let i = myWrongIncrement();

    for ( let i = 0; i = 2; i++) {
        document.getElementById("hide-gameover").= ""
    }
    
    
    }*/


function startGame(gameType) {

    //gameOver();

    let x = Math.abs(6 - Math.floor(Math.random() * 10));
    document.getElementsByTagName('p')[0].innerText = mySafariQuestions[x]['safariQuestion']
    document.getElementsByClassName("safari-quizAnimals")[0].innerHTML = mySafariQuestions[x]['safariQuizAnimals']
    myOptionsDisplay(x,gameType);
    mylist.push(x);
   
   
}

function myCorrectIncrement() {
    
    return ++correctCounter;
}

function myWrongIncrement() {
    
    return ++wrongCounter

}

function myCheckAnswer() {

    let t =myUserAnswer()
    let q =myCorrectAnswer(mylist[0])
    if (t===q) {
 alert("Well done, you know your animals!")
 document.getElementById("correct").innerHTML=myCorrectIncrement()
    } else {
     alert("Oops! That is not the right answer." )
     document.getElementById("wrong").innerHTML=myWrongIncrement()
     
             
    }
    mylist=[];
   startGame();

}
