const flashCards = document.getElementsByClassName("flashCards")[0];
const createBox = document.getElementsByClassName("createBox")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
let contentArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

contentArray.forEach(divMaker);
function divMaker(text) {
    var newDiv = document.createElement("newDiv");
    var h2Question = document.createElement("h2");
    var h2Answer = document.createElement("h2");

    newDiv.className = "flashcard";

    h2Question.setAttribute("style", "border-top: 1px solid red; padding: 15px; margin-top: 30px");

    h2Question.innerHTML = text.myQuestion;

    h2Answer.setAttribute("style", "text-align:center; display:none; color:red");
    h2Answer.innerHTML = text.myAnswer;

    newDiv.appendChild(h2Question);
    newDiv.appendChild(h2Answer);

    newDiv.addEventListener("click", function(){
        if(h2Answer.style.display == "none")
            h2Answer.style.display = "block";
        else
            h2Answer.style.display = "none";
    });

    flashCards.appendChild(newDiv);
}

function addFlashCard() {
    var flashCardInfo = {
        "myQuestion" : question.value,
        "myAnswer" : answer.value
    }
    contentArray.push(flashCardInfo);
    localStorage.setItem("items", JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length - 1]);
    question.value = "";
    answer.value = "";
}
function delFlashCards() {
    localStorage.clear();
    flashCards.innerHTML = "";
    contentArray = [];
}

function showCreateCardBox() {
    createBox.style.display = "block";
}

function hideCreateBox() {
    createBox.style.display = "none";
}