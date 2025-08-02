const questions = [
  {
    question: "Which of the following is a non-renewable resource?",
    options: ["Solar", "Wind", "Petroleum", "Hydro"],
    answer: 2
  },
  {
    question: "The unit of electric current is?",
    options: ["Volt", "Ampere", "Ohm", "Watt"],
    answer: 1
  }
];

let currentQuestion = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(idx);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) {
    alert("Correct!");
  } else {
    alert("Wrong answer!");
  }
}

function nextQuestion() {
  currentQuestion = (currentQuestion + 1) % questions.length;
  loadQuestion();
}

function prevQuestion() {
  currentQuestion = (currentQuestion - 1 + questions.length) % questions.length;
  loadQuestion();
}

window.onload = loadQuestion;
