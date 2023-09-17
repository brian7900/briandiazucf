document.addEventListener("DOMContentLoaded", function() {

    function displayQuiz(questions, containerId, submitId) {
        const quizContainer = document.getElementById(containerId);
        let output = [];

        questions.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            for (let letter in currentQuestion.options) {
                answers.push(
                    `<label>
                        <input type="radio" name="${containerId}-question${questionNumber}" value="${letter}">
                        ${currentQuestion.options[letter]}
                    </label><br>`
                );
            }
            output.push(
                `<div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers.join('')}</div><br>`
            );
        });

        quizContainer.innerHTML = output.join('');

        document.getElementById(submitId).addEventListener('click', function() {
            const answerContainers = quizContainer.querySelectorAll('.answers');
            let correct = 0;

            questions.forEach((currentQuestion, questionNumber) => {
                const answerContainer = answerContainers[questionNumber];
                const selector = `input[name=${containerId}-question${questionNumber}]:checked`;
                const userAnswer = (answerContainer.querySelector(selector) || {}).value;

                if (userAnswer == currentQuestion.answer) {
                    correct++;
                    answerContainers[questionNumber].style.color = 'green';
                } else {
                    answerContainers[questionNumber].style.color = 'red';
                }
            });

            alert(`You got ${correct} out of ${questions.length} questions right!`);
        });
    }

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

    displayQuiz(appleQuestions, 'apple-quiz-container', 'apple-submit');
    displayQuiz(amazonQuestions, 'amazon-quiz-container', 'amazon-submit');
    displayQuiz(facebookQuestions, 'facebook-quiz-container', 'facebook-submit');
    displayQuiz(netflixQuestions, 'netflix-quiz-container', 'netflix-submit');
    displayQuiz(googleQuestions, 'google-quiz-container', 'google-submit');

});
