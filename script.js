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

// Amazon Quiz
const amazonQuestions = [
    {
        question: "Which of the following is Amazon's cloud computing service?",
        options: ["Azure", "CloudDrive", "AWS", "GCP"],
        answer: 2
    },
    {
        question: "What is the name of Amazon's voice-controlled assistant?",
        options: ["Siri", "Cortana", "Alexa", "Bixby"],
        answer: 2
    },
    {
        question: "Which of these is NOT a service offered by Amazon?",
        options: ["Prime Video", "Kindle", "Drive", "Echo"],
        answer: 2
    }
];

function displayAmazonQuiz() {
    const amazonQuizContainer = document.getElementById('amazon-quiz-container');
    let output = [];

    amazonQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (let letter in currentQuestion.options) {
            answers.push(
                `<label>
                    <input type="radio" name="amazon-question${questionNumber}" value="${letter}">
                    ${currentQuestion.options[letter]}
                </label><br>`
            );
        }
        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div><br>`
        );
    });

    amazonQuizContainer.innerHTML = output.join('');
}

function showAmazonResults() {
    const answerContainers = document.querySelectorAll('#amazon-quiz-container .answers');
    let correct = 0;

    amazonQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=amazon-question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer == currentQuestion.answer) {
            correct++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    alert(`You got ${correct} out of ${amazonQuestions.length} questions right!`);
}

// Display the Amazon quiz
displayAmazonQuiz();

// On submit, show Amazon quiz results
document.getElementById('amazon-submit').addEventListener('click', showAmazonResults);

// Facebook Quiz
const facebookQuestions = [
    {
        question: "Which year was Facebook founded?",
        options: ["2002", "2004", "2006", "2008"],
        answer: 1
    },
    {
        question: "Who is the co-founder and CEO of Facebook?",
        options: ["Bill Gates", "Elon Musk", "Mark Zuckerberg", "Larry Page"],
        answer: 2
    },
    {
        question: "Which of these is a virtual reality company acquired by Facebook?",
        options: ["Rift", "Vive", "Oculus", "HoloLens"],
        answer: 2
    }
];

function displayFacebookQuiz() {
    const facebookQuizContainer = document.getElementById('facebook-quiz-container');
    let output = [];

    facebookQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (let letter in currentQuestion.options) {
            answers.push(
                `<label>
                    <input type="radio" name="facebook-question${questionNumber}" value="${letter}">
                    ${currentQuestion.options[letter]}
                </label><br>`
            );
        }
        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div><br>`
        );
    });

    facebookQuizContainer.innerHTML = output.join('');
}

function showFacebookResults() {
    const answerContainers = document.querySelectorAll('#facebook-quiz-container .answers');
    let correct = 0;

    facebookQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=facebook-question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer == currentQuestion.answer) {
            correct++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    alert(`You got ${correct} out of ${facebookQuestions.length} questions right!`);
}

// Display the Facebook quiz
displayFacebookQuiz();

// On submit, show Facebook quiz results
document.getElementById('facebook-submit').addEventListener('click', showFacebookResults);


// Netflix Quiz
const netflixQuestions = [
    {
        question: "Which of these is a popular Netflix original series?",
        options: ["Breaking Bad", "Stranger Things", "The Office", "Friends"],
        answer: 1
    },
    {
        question: "What was Netflix's initial business model before streaming?",
        options: ["Cable TV", "DVD rental by mail", "Video game rental", "Online news portal"],
        answer: 1
    },
    {
        question: "Which of these is NOT a Netflix documentary series?",
        options: ["Making a Murderer", "Tiger King", "Planet Earth", "The Last Dance"],
        answer: 2
    }
];

function displayNetflixQuiz() {
    const netflixQuizContainer = document.getElementById('netflix-quiz-container');
    let output = [];

    netflixQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (let letter in currentQuestion.options) {
            answers.push(
                `<label>
                    <input type="radio" name="netflix-question${questionNumber}" value="${letter}">
                    ${currentQuestion.options[letter]}
                </label><br>`
            );
        }
        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div><br>`
        );
    });

    netflixQuizContainer.innerHTML = output.join('');
}

function showNetflixResults() {
    const answerContainers = document.querySelectorAll('#netflix-quiz-container .answers');
    let correct = 0;

    netflixQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=netflix-question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer == currentQuestion.answer) {
            correct++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    alert(`You got ${correct} out of ${netflixQuestions.length} questions right!`);
}

// Display the Netflix quiz
displayNetflixQuiz();

// On submit, show Netflix quiz results
document.getElementById('netflix-submit').addEventListener('click', showNetflixResults);

// ... (Keep the Apple quiz code if you want both quizzes)

// Google Quiz
const googleQuestions = [
    {
        question: "Which product is Google's popular search engine?",
        options: ["Gmail", "Drive", "Search", "Docs"],
        answer: 2
    },
    {
        question: "Which mobile operating system is developed by Google?",
        options: ["iOS", "Windows Mobile", "Android", "Blackberry OS"],
        answer: 2
    },
    {
        question: "What was the name of Google's browser released in 2008?",
        options: ["Safari", "Firefox", "Opera", "Chrome"],
        answer: 3
    }
];

// Function to display the Google quiz
function displayGoogleQuiz() {
    const googleQuizContainer = document.getElementById('google-quiz-container');
    let output = [];

    googleQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (let letter in currentQuestion.options) {
            answers.push(
                `<label>
                    <input type="radio" name="google-question${questionNumber}" value="${letter}">
                    ${currentQuestion.options[letter]}
                </label><br>`
            );
        }
        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div><br>`
        );
    });

    googleQuizContainer.innerHTML = output.join('');
}

// Function to show the Google quiz results
function showGoogleResults() {
    const answerContainers = document.querySelectorAll('#google-quiz-container .answers');
    let correct = 0;

    googleQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=google-question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer == currentQuestion.answer) {
            correct++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    alert(`You got ${correct} out of ${googleQuestions.length} questions right!`);
}

// Display the Google quiz
displayGoogleQuiz();

// On submit, show Google quiz results
document.getElementById('google-submit').addEventListener('click', showGoogleResults);


