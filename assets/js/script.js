document.addEventListener("DOMContentLoaded", function() {

    let mySubmit = document.querySelectorAll('input[type=submit]');
    //let buttons = document.querySelectorAll('input[type=radio]');
    

    for (let sub of mySubmit) {
        sub.addEventListener('click', function() {
                if(this.getAttribute("type") === "submit") {
                    alert("You clicked Submit!")
                 }
    
    })}}


  /**  for (let btn of buttons) {
        btn.addEventListener('click', function() {
                     let gameType = this.getAttribute("id");
                     startGame(gameType);
        })
    
    }}*/)




let mySafariQuestions = [
    {
        safariQuestion: "What is the name of the above animal?",
        safariQuizAnimals: '<img src="assets/images/bird.jpg">',
        Answer1: "bird",
        Answer2: "tiger",
        Answer3: "frog",
        Answer4: "fish",
        correctAnswer: "bird",
    },
    {
        safariQuestion: "Where does this animal live?",
        safariQuizAnimals: '<img src="assets/images/cheetah.jpg">',
        Answer1: "in the ocean",
        Answer2: "at the zoo",
        Answer3: "space",
        Answer4: "in a house",
        correctAnswer: "at the zoo",
    },
    {
        safariQuestion: "What color is it?",
        safariQuizAnimals: '<img src="assets/images/crocodile.jpg">',
        Answer1: "yellow",
        Answer2: "purple",
        Answer3: "brown",
        Answer4: "green",
        correctAnswer: "green",
    },
    {
        safariQuestion: "How many legs does it have?",
        safariQuizAnimals: '<img src="assets/images/fish.jpg">',
        Answer1: "2",
        Answer2: "4",
        Answer3: "8",
        Answer4: "0",
        correctAnswer: "0",
    },
    {
        safariQuestion: "Does it lay eggs?",
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
        safariQuestion: "How does it move?",
        safariQuizAnimals: '<img src="assets/images/zebra.jpg">',
        Answer1: "walk",
        Answer2: "hops",
        Answer3: "swim",
        Answer4: "crawl",
        correctAnswer: "walk",
    }
];

function myCorrectAnswer(x){
    //console.log(mySafariQuestions[x]['correctAnswer'])
    return mySafariQuestions[x]['correctAnswer']

}

function myCorrectOptionsDisplay(x) {

document.getElementById("answer-clue").innerHTML=
`<input type="radio" name="response" value="choose-answer" id="answer1">${mySafariQuestions[x]['Answer1']} 
<input type="radio" name="response" value="choose-answer" id="answer1">${mySafariQuestions[x]['Answer2']} 
<input type="radio" name="response" value="choose-answer" id="answer1">${mySafariQuestions[x]['Answer3']} 
<input type="radio" name="response" value="choose-answer" id="answer1">${mySafariQuestions[x]['Answer4']}`

}


function replace() {
let x = Math.abs(6 - Math.floor(Math.random() * 10));
document.getElementsByTagName('p')[0].innerText=mySafariQuestions[x]['safariQuestion']
document.getElementsByClassName("safari-quizAnimals")[0].innerHTML=mySafariQuestions[x]['safariQuizAnimals']
myCorrectAnswer(x);
myCorrectOptionsDisplay(x);
}

window.onload = replace();
    





/**
 * A variable which consists of a list of objects with 
 * questions and answers.
 */



function myDisplayedQuestions(safariQuestion, safariQuizAnimals) {
    let x = Math.abs(6 - Math.floor(Math.random() * 10));

    document.getElementsByClassName("safari-question").innerText = mySafariQuestions[x][safariQuestion];
    document.getElementsByClassName("safari-quizAnimals").innerHTML = mySafariQuestions[x][safariQuizAnimals];
}

function displayBirdAnswer() {
    if (document.getElementById("answer1").checked) {
        document.getElementById("answer1").textContent = mySafariQuestions[0]['correctAnswer'];
    } else if (document.getElementById("answer2").checked) {
            alert(`You selected ${document.getElementById("answer2")
            .textContent} which is incorrect. The correct answer is ${document.getElementById("answer1")}`)
        } else if (document.getElementById("answer3").checked) {
            alert(`You selected ${document.getElementById("answer3")
            .textContent} which is incorrect. The correct answer is ${document.getElementById("answer1")}`)
        } else if (document.getElementById("answer4").checked) {
            alert(`You selected ${document.getElementById("answer4")
            .textContent} which is incorrect. The correct answer is ${document.getElementById("answer1")}`) 
        } else {throw `You selected ${document.getElementById("answer4")
            .textContent} which is incorrect. The correct answer is ${document.getElementById("answer1")}`}      
}

function displayCheetahAnswer() {
    if (document.getElementById("answer1").checked) {
        alert(`You selected ${document.getElementById("answer1")
        .textContent} which is incorrect. The correct answer is ${document.getElementById("answer2")}`)
    } else if (document.getElementById("answer2").checked) {
        document.getElementById("answer2").textContent = mySafariQuestions[0]['correctAnswer']; 
        } else if (document.getElementById("answer3").checked) {
            alert(`You selected ${document.getElementById("answer3")
            .textContent} which is incorrect. The correct answer is ${document.getElementById("answer1")}`)
        } else if (document.getElementById("answer4").checked) {
            alert(`You selected ${document.getElementById("answer4")
            .textContent} which is incorrect. The correct answer is ${document.getElementById("answer1")}`) 
        } else {
            throw `You selected ${document.getElementById("answer4")
            .textContent} which is incorrect. The correct answer is ${document.getElementById("answer1")}`}
}












/**function myFunction(event) {
    console.log('You clicked the button!');
   
    }

let myButton = document.getElementsByClassName("btn");
myButton.addEventListener('click', myFunction);

**/
/**
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

function startGame(gameType) {

}

 */
