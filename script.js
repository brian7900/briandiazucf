document.addEventListener("DOMContentLoaded", function() {

    // Apple Quiz
    const appleQuestions = [
        {
            question: "Which product was Apple's revolutionary music player introduced in 2001?",
            options: ["iPhone", "iPod", "iMac", "iPad"],
            answer: 1
        },
        {
            question: "Who co-founded Apple alongside Steve Jobs?",
            options: ["Bill Gates", "Mark Zuckerberg", "Steve Wozniak", "Larry Page"],
            answer: 2
        },
        {
            question: "Which operating system runs on Apple's Mac computers?",
            options: ["Windows", "Linux", "macOS", "iOS"],
            answer: 2
        }
    ];

    // Function to display the Apple quiz
    function displayAppleQuiz() {
        const appleQuizContainer = document.getElementById('apple-quiz-container');
        let output = [];

        appleQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            for (let letter in currentQuestion.options) {
                answers.push(
                    `<label>
                        <input type="radio" name="apple-question${questionNumber}" value="${letter}">
                        ${currentQuestion.options[letter]}
                    </label><br>`
                );
            }
            output.push(
                `<div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers.join('')}</div><br>`
            );
        });

        appleQuizContainer.innerHTML = output.join('');
    }

    // Function to show the Apple quiz results
    function showAppleResults() {
        const answerContainers = document.querySelectorAll('#apple-quiz-container .answers');
        let correct = 0;

        appleQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=apple-question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer == currentQuestion.answer) {
                correct++;
                answerContainers[questionNumber].style.color = 'green';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        alert(`You got ${correct} out of ${appleQuestions.length} questions right!`);
    }

    // Display the Apple quiz
    displayAppleQuiz();

    // On submit, show Apple quiz results
    document.getElementById('apple-submit').addEventListener('click', showAppleResults);
});
