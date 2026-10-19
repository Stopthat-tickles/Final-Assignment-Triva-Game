


const questions = [
    {
        question: "How many eyelids do ducks have?",
        answers: ["One", "Two", "Three", "Four"],
        correct: 2
    },
    {
        question: "What is the shape of wombat poop?",
        answers: ["Circle, like rabbits", "Oblong, like humans", "liquid-randomness, like avian", "Cube, like a Gamecube"],
        correct: 3
    },
    {
        question: "In which contry is it illegal to own a singular guinea pig?",
        answers: ["Switzerland", "Denmark", "Aruba", "Canada"],
        correct: 0
    },
    {
        question: "Which animal is the largest mammal?",
        answers: ["Elephant", "Blue whale", "Giraffe", "Shark"],
        correct: 1
    },
    {
        question: "What was the original purpose of bubble wrap?",
        answers: ["To protect fragile items", " To allow you to see expensive items without touching it", " To act as wallpaper in interior design", " IDK man"],
        correct: 2
    },
     {
        question: "How long can snails sleep?",
        answers: ["2-4 hours", " 3 years ", " Throughout the cold seasons", " Seven days"],
        correct: 1
    },
     {
        question: "Which ocean is the smallest?",
        answers: ["Arctic", " Pacific ", " Indian", " Atlantic "],
        correct: 0
    },
     {
        question: "What did ancient Romans use for mouthwash?",
        answers: ["Water & crushed mint", " Wine ", " Urine ", " Blended onion & grapes "],
        correct: 2
    },
     {
        question: "What is the hardest substance in the human body?",
        answers: [" Bone ", " Enamel ", " Bile ", " collagen "],
        correct: 1
    },
      {
        question: "Who is the only person to win a double Nobel Prize in different subjects?",
        answers: [" Linus Pauling ", " Navi Pillay ", " Barack Obama ", " Marie Curie "],
        correct: 3
    }
];



let currentQuestion = 0;
let score = 0;
let answered = false;





function showQuestion() {
    answered = false;

    document.getElementById("feedback").textContent = "";
    document.getElementById("next-button").hidden = true;
    document.getElementById("restart-button").hidden = true;

    document.getElementById("question-number").textContent =
        "Question " + (currentQuestion + 1) + " of " + questions.length;

    document.getElementById("question").textContent =
        questions[currentQuestion].question;

    const buttons = document.querySelectorAll(".answer-button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = questions[currentQuestion].answers[i];
        buttons[i].disabled = false;
        buttons[i].style.backgroundColor = "#e8e0ff";
    }

    document.getElementById("score").textContent = "Score: " + score;
}


function checkAnswer(answerIndex) {
    if (answered) {
        return;
    }

    answered = true;

    const correctAnswer = questions[currentQuestion].correct;
    const buttons = document.querySelectorAll(".answer-button");






    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    if (answerIndex === correctAnswer) {
        score++;
        document.getElementById("feedback").textContent =
            "Correct! Great job!";
    } else {
        document.getElementById("feedback").textContent =
            "Not quite! The correct answer is " +
            questions[currentQuestion].answers[correctAnswer] + ".";
    }

   





    
    buttons[correctAnswer].style.backgroundColor = "#b8efc0";

    document.getElementById("score").textContent = "Score: " + score;

    if (currentQuestion < questions.length - 1) {
        document.getElementById("next-button").hidden = false;
    } else {
        document.getElementById("feedback").textContent +=
            " Quiz complete! You scored " + score +
            " out of " + questions.length + ".";

        document.getElementById("restart-button").hidden = false;
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    }
}

function restartGame() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

showQuestion();
