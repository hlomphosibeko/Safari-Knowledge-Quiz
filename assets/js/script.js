document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.querySelectorAll('input[type=radio]');

    for (let btn of buttons) {
        btn.addEventListener('click', function () {
            let gameType = this.id;
            mylist.push(gameType)
            myCheckAnswer();
            myUserAnswer();
            
          
        })

    }
})



/**  for (let sub of mySubmit) {
      sub.addEventListener('click', function() {
              if(this.getAttribute("type") === "submit") {
                  alert("You clicked Submit!")
               }
  
  })}}
*/

let mylist = []

//let userAnswer = mySafariQuestions[y][gameType];
// console.log('player answer is: ',userAnswer)




/** 
 
let calculatedAnswer = calculateCorrectAnswer();
let isCorrect = userAnswer === calculatedAnswer[0];

if (isCorrect) {
   alert("Hey! You got it right! :D");
   incrementScore();
} else {
   alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
   incrementWrongScore();
}
   
*/


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
        safariQuizAnimals: '<img src="assets/images/zebra.jpg">',
        Answer1: " it walks",
        Answer2: "it hops",
        Answer3: "it swims",
        Answer4: "it crawls",
        correctAnswer: "it walks",
    }
];

function myRunGame(y) {
    return y;
}

/**function checkAnswer() {
    let playerAnswer = document.getElementById("answer-clue").innerHTML;
    let correctAnswer = myCorrectAnswer();
    let isCorrect = playerAnswer === correctAnswer;

    if (isCorrect) {
        alert('Well done, you really know your animal!')
        incrementScore();
    } else {
        alert(`Oops, you chose the wrong answer! 
            The correct answer is ${mySafariQuestions[x]['correctAnswer']}.`)
        incrementWrongScore();
    }


}*/

/**function incrementScore() {
    let safariPoints = parseInt(document.getElementById("correct").innerHTML);
    document.getElementById("correct").innerHTML = ++safariPoints;
}

function incrementWrongScore() {
    let safariPoints = parseInt(document.getElementById("wrong").innerHTML);
    document.getElementById("wrong").innerHTML = ++safariPoints;
}*/


function myCorrectAnswer(x) {
    //console.log(x, mySafariQuestions)
    //console.log('The correct answer is :', mySafariQuestions[x]['correctAnswer'])
    return mySafariQuestions[x]['correctAnswer']

}

function myOptionsDisplay(x) {

    document.getElementById("answer-clue").innerHTML =
    `<input type="radio" name="response" value="answer1" id="Answer1">${mySafariQuestions[x]['Answer1']}
    <input type="radio" name="response" value="answer2" id="Answer2">${mySafariQuestions[x]['Answer2']}
    <input type="radio" name="response" value="answer3" id="Answer3">${mySafariQuestions[x]['Answer3']}
    <input type="radio" name="response" value="answer4" id="Answer4">${mySafariQuestions[x]['Answer4']}`

}

function myUserAnswer() {
   console.log('The user answer is', mySafariQuestions[mylist[0]][mylist[1]])
    return mySafariQuestions[mylist[0]][mylist[1]];
}

let correctCounter = 0
let wrongCounter = 0

function replace() {
    let x = Math.abs(6 - Math.floor(Math.random() * 10));
    document.getElementsByTagName('p')[0].innerText = mySafariQuestions[x]['safariQuestion']
    document.getElementsByClassName("safari-quizAnimals")[0].innerHTML = mySafariQuestions[x]['safariQuizAnimals']
    myOptionsDisplay(x);
    mylist.push(x);
    myCorrectAnswer(x);
    console.log('The correct answer is ', myCorrectAnswer(x))
   
   
    
}

function myCorrectIncrement() {
    
   // console.log("The correct increment is", ++correctCounter);
    return ++correctCounter;
}

function myWrongIncrement() {
    //console.log("The wrong increment is", ++wrongCounter)
    return ++wrongCounter

}

function myCheckAnswer() {

    let t =myUserAnswer()
    let q =myCorrectAnswer(mylist[0])
if (t===q) {
 console.log("Well done, you know your animals!")
 document.getElementById("correct").innerHTML=myCorrectIncrement()
      return true;
} else {
     console.log("Oops! That is not the right answer." )
     document.getElementById("wrong").innerHTML=myWrongIncrement()
    
     return false;
}
}


window.onload = replace();



/**
 * A variable which consists of a list of objects with 
 * questions and answers.
 */



/**
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



*/








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
