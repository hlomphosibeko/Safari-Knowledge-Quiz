document.addEventListener("DOMContentLoaded", function() {

    let radios = document.querySelectorAll("input[type=radio]");

    

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                myCheckAnswer();
            }
        {for (let btn of radios) {
            btn.addEventListener("click", function() {
               
                    let gameType = this.getAttribute("data-type");
                    startGame(gameType);
                
            })
        }}
        })
        }

    startGame("frog")
})



let mySafariQuestions = [{
        safariQuestion: "What is the name of the below animal?",
        safariQuizAnimals: '<img src="assets/images/bird.jpg">',
        Answer1: "bird",
        Answer2: "tiger",
        Answer3: "frog",
        Answer4: "fish",
        correctAnswer: "bird",
        Species:"bird",
    },
    {
        safariQuestion: "Where does the below animal live?",
        safariQuizAnimals: '<img src="assets/images/cheetah.jpg">',
        Answer1: "in the ocean",
        Answer2: "at the zoo",
        Answer3: "space",
        Answer4: "in a house",
        correctAnswer: "at the zoo",
        Species:"cheetah",
    },
    {
        safariQuestion: "What color is the below animal?",
        safariQuizAnimals: '<img src="assets/images/crocodile.jpg">',
        Answer1: "yellow",
        Answer2: "purple",
        Answer3: "brown",
        Answer4: "green",
        correctAnswer: "green",
        Species:"crocodile",
    },
    {
        safariQuestion: "How many legs does this animal have?",
        safariQuizAnimals: '<img src="assets/images/fish.jpg">',
        Answer1: "2 legs",
        Answer2: "4 legs",
        Answer3: "8 legs",
        Answer4: "no legs",
        correctAnswer: "no legs",
        Species:"fish",
    },
    {
        safariQuestion: "Does this animal lay eggs?",
        safariQuizAnimals: '<img src="assets/images/frog.jpg">',
        Answer1: "no",
        Answer2: "only in summer",
        Answer3: "no idea",
        Answer4: "yes",
        correctAnswer: "yes",
        Species:"frog",
    },
    {
        safariQuestion: "Is this animal fast or slow?",
        safariQuizAnimals: '<img src="assets/images/tortoise.jpg">',
        Answer1: "it is slow",
        Answer2: "it is fast",
        Answer3: "it can't move",
        Answer4: "it is fast only when it is hungry",
        correctAnswer: "it is slow",
        Species:"tortoise",
    },
    {
        safariQuestion: "How does this animal move?",
        safariQuizAnimals: '<img src="assets/images/tiger.jpg">',
        Answer1: " it walks",
        Answer2: "it hops",
        Answer3: "it swims",
        Answer4: "it crawls",
        correctAnswer: "it walks",
        Species:"tiger",
    }
];



function myCorrectAnswer(animal) {


    for (let obtj of mySafariQuestions) {
       if(obtj['speicies']===animal){
        return obtj['correctAnswer']
       }
        }
}

function myOptionsDisplay(x) {
 // let x = Math.abs(6 - Math.floor(Math.random() * 10));
    document.getElementById("answer-clue").innerHTML =
    `<input type="radio" name="response" value="Answer1" id="Answer1">${mySafariQuestions[x]['Answer1']}
    <input type="radio" name="response" value="Answer2" id="Answer2">${mySafariQuestions[x]['Answer2']}
    <input type="radio" name="response" value="Answer3" id="Answer3">${mySafariQuestions[x]['Answer3']}
    <input type="radio" name="response" value="Answer4" id="Answer4">${mySafariQuestions[x]['Answer4']}`

}

function myUserAnswer() { 
    
     var radioCollection =document.getElementById('answer-clue');

    for(i=0;i<radioCollection.length;i++){

        if(radioCollection[i].checked){
            console.log(radioCollection[i].value,radioCollection[i].data-type);
            return [radioCollection[i].value,radioCollection[i].data-type]
        }
    }
}

let correctCounter = 0
let wrongCounter = 0

/**function showReview() {
    document.querySelector(".gameover").style.opacity ="100%"
    document.querySelector("playground").style.filter = "brightness(0.4)"
}

function gameOver() {

    let i = myWrongIncrement();

    for ( let i = 0; i = 3; i++) {
        document.getElementById("hide-gameover").classList.add()
    }
    
    
    } */


function startGame(gameType) {
   
    //gameOver();
  

if(gameType==="bird"){
    document.getElementsByTagName('p')[0].innerText = mySafariQuestions[0]['safariQuestion']
    document.getElementsByClassName("safari-quizAnimals")[0].innerHTML = mySafariQuestions[0]['safariQuizAnimals']
    myOptionsDisplay(0);
} else if (gameType==="cheetah") {
    document.getElementsByTagName('p')[0].innerText = mySafariQuestions[1]['safariQuestion']
    document.getElementsByClassName("safari-quizAnimals")[0].innerHTML = mySafariQuestions[1]['safariQuizAnimals']
    myOptionsDisplay(1);
} else if (gameType === "crocodile") {
    document.getElementsByTagName('p')[0].innerText = mySafariQuestions[2]['safariQuestion']
    document.getElementsByClassName("safari-quizAnimals")[0].innerHTML = mySafariQuestions[2]['safariQuizAnimals']
    myOptionsDisplay(2);
} else if (gameType === "fish") {
    document.getElementsByTagName('p')[0].innerText = mySafariQuestions[3]['safariQuestion']
    document.getElementsByClassName("safari-quizAnimals")[0].innerHTML = mySafariQuestions[3]['safariQuizAnimals']
    myOptionsDisplay(3);
} else if (gameType === "frog") {
    document.getElementsByTagName('p')[0].innerText = mySafariQuestions[4]['safariQuestion']
    document.getElementsByClassName("safari-quizAnimals")[0].innerHTML = mySafariQuestions[0]['safariQuizAnimals']
    myOptionsDisplay(4);
} else if (gameType === "tortoise") {
    document.getElementsByTagName('p')[0].innerText = mySafariQuestions[5]['safariQuestion']
    document.getElementsByClassName("safari-quizAnimals")[0].innerHTML = mySafariQuestions[5]['safariQuizAnimals']
    myOptionsDisplay(5);
} else if (gameType === "tiger") {
    document.getElementsByTagName('p')[0].innerText = mySafariQuestions[6]['safariQuestion']
    document.getElementsByClassName("safari-quizAnimals")[0].innerHTML = mySafariQuestions[6]['safariQuizAnimals']
    myOptionsDisplay(6);
} else {
    alert(`Unknown game type: ${gameType}`);
    throw `Unknown game type: ${gameType}.Aborting!`;
}
}


function myCorrectIncrement() {
    
    return ++correctCounter;
}

function myWrongIncrement() {
    
    return ++wrongCounter;

}

function myCheckAnswer() {
    let userAnswer = myUserAnswer()
    console.log('The user answer is',userAnswer)
    
    let calculatedAnswer =myCorrectAnswer(userAnswer[1])
    console.log('But the correct answer is',calculatedAnswer)


    if (userAnswer===calculatedAnswer) {
    alert("Well done, you know your animals!")
    document.getElementById("correct").innerHTML=myCorrectIncrement()
    } 
    else {
     alert(`Oops! You chose ${userAnswer} which is not correct, the correct answer is${calculatedAnswer}`)
     document.getElementById("wrong").innerHTML=myWrongIncrement()
    }
 //  console.log(calculatedAnswer[1])
//startGame(calculatedAnswer[1]);

}


