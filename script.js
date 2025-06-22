alert('Phishing Quiz JS is working!');
// Sample questions array
const questions = [
  {
    text: "You receive an email from your bank asking you to verify your account by clicking a link. The email address looks suspicious. What is this?",
    answer: "phishing"
  },
  {
    text: "An email from 3MTT has an attachment you were expecting. The email address is correct. What is this?",
    answer: "safe"
  },
  {
    text: "You get a message saying you've won a lottery you never entered, and it asks for your personal details. What is this?",
    answer: "phishing"
  },
  {
    text: "Darey.io sends an email from the official address reminding you to update your password using their official  portal. What is this?",
    answer: "safe"
  }
];

let current = 0;
let score = 0;

function showQuestion() {
  document.getElementById('question').textContent = questions[current].text;
  document.getElementById('feedback').textContent = '';
  document.getElementById('next-btn').disabled = true;
}

function answer(userAnswer) {
  const correct = questions[current].answer;
  if (userAnswer === correct) {
    document.getElementById('feedback').textContent = 'Correct!';
    score++;
  } else {
    document.getElementById('feedback').textContent = 'Incorrect!';
  }
  document.getElementById('score').textContent = `Score: ${score}/${questions.length}`;
  document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    document.getElementById('question').textContent = 'Quiz complete! A million thanks.';
    document.querySelector('.buttons').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
  }
}

// Initialize the quiz
window.onload = function() {
  showQuestion();
  document.getElementById('score').textContent = `Score: 0/${questions.length}`;
};
