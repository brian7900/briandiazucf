document.addEventListener("DOMContentLoaded", function() {

    const appleQuestions = [
        {
            question: "Which product was Apple's revolutionary music player introduced in 2001?",
            options: ["iPhone", "iPod", "iMac", "iPad"],
            answer: 1
        },
        // ... other apple questions
    ];

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

    document.getElementById('apple-submit').addEventListener('click', function() {
        const answerContainers = appleQuizContainer.querySelectorAll('.answers');
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
    });

});
