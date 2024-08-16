document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementsByClassName('btn');

    for (let btn of button) {
        btn.addEventListener('click', function() {
            if(this.getAttribute("type") === "submit") {
               alert("You clicked Submit!")
            } else {
                let gameType = this.getAttribute("type");
                myPlayground(gameType);
            }
        })
    }

    myPlayground("mySafariQuesions");
})

function myPlayground() {
    document.getElementsByClassName("safari-question").innerHTML = "";
    window.CSSImageValue("images")
    
    let myQuestions =  mySafariQuestions[0][myListOfKeys[Math.abs(6 - Math.floor(Math.random() * 10))]];
    let myListOfKeys = ['question', 'questionImg', 'Answer1', 'Answer2', 'Answer3', 'Answer4', ' correctAnswer'];
}





