const gameState = {
    players: [],
    currentPlayerIndex: 0,
    questions: [],
    currentQuestionIndex: 0,
    subject: '',
    difficulty: 'easy',
    selectedAnswer: null,
    answerHistory: [],
    timer: null,
    timeLeft: 30
};

const questionsData = {
    "html": [{
            "question": "What is the correct tag for the largest heading?",
            "options": [
                "<h6>",
                "<head>",
                "<title>",
                "<h1>"
            ],
            "correct": 3,
            "difficulty": "easy"
        },
        {
            "question": "What does the `<a>` tag do in HTML?",
            "options": [
                "Creates a paragraph",
                "Adds an image",
                "Creates a hyperlink",
                "Adds a list"
            ],
            "correct": 2,
            "difficulty": "easy"
        },
        {
            "question": "Which attribute is used to define an image source?",
            "options": [
                "href",
                "link",
                "src",
                "alt"
            ],
            "correct": 2,
            "difficulty": "easy"
        },
        {
            "question": "What does the `<p>` tag do?",
            "options": [
                "Creates a link",
                "Creates a paragraph",
                "Adds an image",
                "Displays a list"
            ],
            "correct": 1,
            "difficulty": "easy"
        },
        {
            "question": "Which attribute provides alternative text for an image?",
            "options": [
                "src",
                "alt",
                "title",
                "href"
            ],
            "correct": 1,
            "difficulty": "medium"
        },
        {
            "question": "Which tag is used to create a list item?",
            "options": [
                "<li>",
                "<ul>",
                "<ol>",
                "<item>"
            ],
            "correct": 0,
            "difficulty": "medium"
        },
        {
            "question": "Which tag defines a table row?",
            "options": [
                "<tr>",
                "<td>",
                "<table>",
                "<row>"
            ],
            "correct": 0,
            "difficulty": "medium"
        },
        {
            "question": "Which tag is used to create an unordered list?",
            "options": [
                "<ol>",
                "<ul>",
                "<list>",
                "<items>"
            ],
            "correct": 1,
            "difficulty": "medium"
        },
        {
            "question": "Which attribute is used to open a link in a new tab?",
            "options": [
                "href",
                "target=\"_new\"",
                "target=\"_blank\"",
                "newtab"
            ],
            "correct": 2,
            "difficulty": "hard"
        },
        {
            "question": "Which tag is used to embed a video in HTML5?",
            "options": [
                "<video>",
                "<media>",
                "<vid>",
                "<embed>"
            ],
            "correct": 0,
            "difficulty": "hard"
        },
        {
            "question": "What is the correct structure of a basic HTML document?",
            "options": [
                "<html><head><title><body>",
                "<head><html><body><title>",
                "<!DOCTYPE html><html><head><title></title></head><body></body></html>",
                "<html><title><head><body>"
            ],
            "correct": 2,
            "difficulty": "hard"
        },
        {
            "question": "Which tag is used to group block elements in HTML?",
            "options": [
                "<div>",
                "<span>",
                "<section>",
                "<group>"
            ],
            "correct": 0,
            "difficulty": "hard"
        }
    ],
    "css": [{
            "question": "Which CSS property adds space inside an element?",
            "options": [
                "padding",
                "margin",
                "spacing",
                "border"
            ],
            "correct": 0,
            "difficulty": "easy"
        },
        {
            "question": "Which property sets the text color?",
            "options": [
                "color",
                "font-color",
                "text-style",
                "background"
            ],
            "correct": 0,
            "difficulty": "easy"
        },
        {
            "question": "How do you select an element by its ID?",
            "options": [
                ".idname",
                "#idname",
                "idname",
                "*idname"
            ],
            "correct": 1,
            "difficulty": "easy"
        },
        {
            "question": "Which property sets the background color?",
            "options": [
                "fill",
                "background-color",
                "bg-color",
                "color-bg"
            ],
            "correct": 1,
            "difficulty": "easy"
        },
        {
            "question": "What unit is used most commonly for font sizes in CSS?",
            "options": [
                "px",
                "kg",
                "dpi",
                "em"
            ],
            "correct": 0,
            "difficulty": "easy"
        },
        {
            "question": "Which CSS property adds space inside an element?",
            "options": [
                "margin",
                "padding",
                "spacing",
                "border"
            ],
            "correct": 1,
            "difficulty": "medium"
        },
        {
            "question": "Which value makes an element invisible but keeps its space?",
            "options": [
                "display: none",
                "visibility: hidden",
                "opacity: 0",
                "hidden: true"
            ],
            "correct": 1,
            "difficulty": "medium"
        },
        {
            "question": "What does the `position: relative;` property do?",
            "options": [
                "Moves the element off the page",
                "Positions the element absolutely",
                "Keeps it in the normal flow but allows shifting",
                "Fixes the element on scroll"
            ],
            "correct": 2,
            "difficulty": "medium"
        },
        {
            "question": "How do you apply a style to all `<p>` tags inside a `<div>`?",
            "options": [
                "div.p",
                "div > p",
                "div + p",
                "div ~ p"
            ],
            "correct": 1,
            "difficulty": "medium"
        },
        {
            "question": "How do you create a flex container?",
            "options": [
                "display: grid",
                "display: inline-block",
                "display: flex",
                "position: flex"
            ],
            "correct": 2,
            "difficulty": "hard"
        },
        {
            "question": "Which property allows wrapping in a flex container?",
            "options": [
                "flex-wrap",
                "flex-break",
                "wrap",
                "overflow-wrap"
            ],
            "correct": 0,
            "difficulty": "hard"
        },
        {
            "question": "Which CSS feature allows nesting media queries?",
            "options": [
                "@responsive",
                "@media",
                "@nest",
                "@container"
            ],
            "correct": 1,
            "difficulty": "hard"
        },
        {
            "question": "How do you center an element horizontally using Flexbox?",
            "options": [
                "align-items: center",
                "justify-content: center",
                "text-align: center",
                "margin: auto"
            ],
            "correct": 1,
            "difficulty": "hard"
        }
    ],
    "js": [{
            "question": "What is the result of `typeof \"hello\"`?",
            "options": [
                "string",
                "word",
                "text",
                "char"
            ],
            "correct": 0,
            "difficulty": "easy"
        },
        {
            "question": "Which keyword declares a variable in JavaScript?",
            "options": [
                "let",
                "define",
                "create",
                "varr"
            ],
            "correct": 0,
            "difficulty": "easy"
        },
        {
            "question": "What does console.log() do?",
            "options": [
                "Shows an alert",
                "Logs output to the console",
                "Opens a prompt",
                "Triggers an error"
            ],
            "correct": 1,
            "difficulty": "easy"
        },
        {
            "question": "What is the result of typeof \"hello\"?",
            "options": [
                "string",
                "text",
                "char",
                "object"
            ],
            "correct": 0,
            "difficulty": "easy"
        },
        {
            "question": "What does alert(\"Hi\") do?",
            "options": [
                "Logs to the console",
                "Opens a popup",
                "Redirects the page",
                "Prints to PDF"
            ],
            "correct": 1,
            "difficulty": "easy"
        },
        {
            "question": "What is the output of 5 + \"5\" in JavaScript?",
            "options": [
                "10",
                "\"55\"",
                "undefined",
                "NaN"
            ],
            "correct": 1,
            "difficulty": "medium"
        },
        {
            "question": "Which method converts a string to a number?",
            "options": [
                "Number()",
                "parseInt()",
                "parseFloat()",
                "All of the above"
            ],
            "correct": 3,
            "difficulty": "medium"
        },
        {
            "question": "What is a closure in JavaScript?",
            "options": [
                "An object method",
                "A function with private scope access",
                "A browser event",
                "A comment block"
            ],
            "correct": 1,
            "difficulty": "medium"
        },
        {
            "question": "Which loop guarantees execution at least once?",
            "options": [
                "while",
                "for",
                "do...while",
                "each"
            ],
            "correct": 2,
            "difficulty": "medium"
        },
        {
            "question": "What does === compare?",
            "options": [
                "Only values",
                "Only types",
                "Values and types",
                "Length only"
            ],
            "correct": 2,
            "difficulty": "hard"
        },
        {
            "question": "What is hoisting in JavaScript?",
            "options": [
                "Delaying execution",
                "Removing unused variables",
                "Moving declarations to the top",
                "Lowering execution time"
            ],
            "correct": 2,
            "difficulty": "hard"
        },
        {
            "question": "Which object is the global scope in browsers?",
            "options": [
                "this",
                "global",
                "window",
                "root"
            ],
            "correct": 2,
            "difficulty": "hard"
        },
        {
            "question": "What is the result of null == undefined?",
            "options": [
                "true",
                "false",
                "NaN",
                "undefined"
            ],
            "correct": 0,
            "difficulty": "hard"
        }
    ],
    "mixed": [{
            "question": "What symbol is used for strict equality in JS?",
            "options": [
                "==",
                "=",
                "===",
                "!="
            ],
            "correct": 2,
            "difficulty": "easy"
        },
        {
            "question": "Which tag is used to link CSS to HTML?",
            "options": [
                "<style>",
                "<script>",
                "<css>",
                "<link>"
            ],
            "correct": 3,
            "difficulty": "easy"
        },
        {
            "question": "What does the <img> tag do?",
            "options": [
                "Adds a table",
                "Embeds an image",
                "Creates a heading",
                "Links a stylesheet"
            ],
            "correct": 1,
            "difficulty": "easy"
        },
        {
            "question": "Which property controls the size of text in CSS?",
            "options": [
                "font-size",
                "text-style",
                "text-size",
                "font-weight"
            ],
            "correct": 0,
            "difficulty": "easy"
        },
        {
            "question": "What does the alt attribute do in an image tag?",
            "options": [
                "Sets size",
                "Adds a link",
                "Provides alternate text",
                "Applies a style"
            ],
            "correct": 2,
            "difficulty": "medium"
        },
        {
            "question": "What is the result of typeof []?",
            "options": [
                "object",
                "array",
                "list",
                "undefined"
            ],
            "correct": 0,
            "difficulty": "medium"
        },
        {
            "question": "Which HTML tag creates a dropdown menu?",
            "options": [
                "<dropdown>",
                "<select>",
                "<menu>",
                "<input type=\"menu\">"
            ],
            "correct": 1,
            "difficulty": "medium"
        },
        {
            "question": "Which CSS property controls element stacking order?",
            "options": [
                "position",
                "index",
                "z-index",
                "layer"
            ],
            "correct": 2,
            "difficulty": "medium"
        },
        {
            "question": "What is the difference between == and === in JS?",
            "options": [
                "Both are strict",
                "No difference",
                "=== checks type and value",
                "== is for numbers only"
            ],
            "correct": 2,
            "difficulty": "hard"
        },
        {
            "question": "Which HTML element is used to embed JavaScript?",
            "options": [
                "<js>",
                "<javascript>",
                "<script>",
                "<code>"
            ],
            "correct": 2,
            "difficulty": "hard"
        },
        {
            "question": "What does box-sizing: border-box; do in CSS?",
            "options": [
                "Adds borders only",
                "Excludes padding from size",
                "Includes padding and border in total width/height",
                "Resets layout"
            ],
            "correct": 2,
            "difficulty": "hard"
        },
        {
            "question": "What's the output of typeof NaN in JS?",
            "options": [
                "number",
                "NaN",
                "undefined",
                "object"
            ],
            "correct": 0,
            "difficulty": "hard"
        }
    ]
};

// DOM Elements
const screens = {
    playerSelection: document.getElementById('player-selection-screen'),
    subjectSelection: document.getElementById('subject-selection-screen'),
    game: document.getElementById('game-screen'),
    gameEnd: document.getElementById('game-end-screen'),
    review: document.getElementById('review-screen')
};

// Initialize players
function initializePlayers(numPlayers) {
    gameState.players = [];
    for (let i = 1; i <= numPlayers; i++) {
        gameState.players.push({
            name: `Player ${i}`,
            score: 0
        });
    }
    gameState.currentPlayerIndex = 0;
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Player selection
    document.querySelectorAll('.player-option').forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            document.querySelectorAll('.player-option').forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Get number of players
            const numPlayers = parseInt(button.dataset.players);
            // Initialize players
            initializePlayers(numPlayers);
            // Show subject selection screen
            document.getElementById('player-selection-screen').classList.remove('active');
            document.getElementById('subject-selection-screen').classList.add('active');
        });
    });

    // Subject selection
    document.querySelectorAll('.subject-option').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.subject-option').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            gameState.subject = button.dataset.subject;
        });
    });

    // Difficulty selection
    document.querySelectorAll('.difficulty-option').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.difficulty-option').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            gameState.difficulty = button.dataset.difficulty;
        });
    });

    // Previous button
    document.getElementById('prev-to-players').addEventListener('click', () => {
        document.getElementById('subject-selection-screen').classList.remove('active');
        document.getElementById('player-selection-screen').classList.add('active');
    });

    // Start game button
    document.getElementById('start-game').addEventListener('click', () => {
        if (gameState.subject && gameState.difficulty) {
            loadQuestions();
            showGameScreen();
        }
    });

    // Answer selection
    document.querySelectorAll('.answer-option').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.answer-option').forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            gameState.selectedAnswer = parseInt(option.dataset.option);
            document.getElementById('submit-answer').disabled = false;
        });
    });

    // Submit answer
    document.getElementById('submit-answer').addEventListener('click', submitAnswer);

    // New game button
    document.getElementById('new-game').addEventListener('click', () => {
        document.getElementById('game-end-screen').classList.remove('active');
        document.getElementById('player-selection-screen').classList.add('active');
    });

    // Review answers button
    document.getElementById('review-answers').addEventListener('click', () => {
        document.getElementById('game-end-screen').classList.remove('active');
        document.getElementById('review-screen').classList.add('active');
        showReview();
    });

    // Back to results button
    document.getElementById('back-to-end').addEventListener('click', () => {
        document.getElementById('review-screen').classList.remove('active');
        document.getElementById('game-end-screen').classList.add('active');
    });
});

// Functions
function loadQuestions() {
    let questionPool = [];
    // Get the right question pool based on selected subject
    if (gameState.subject === 'mixed') {
        questionPool = [
            ...questionsData.html,
            ...questionsData.css,
            ...questionsData.js
        ];
    } else {
        questionPool = questionsData[gameState.subject];
    }

    // Split questions by difficulty level
    const easyQuestions = questionPool.filter(q => q.difficulty === 'easy').sort(() => Math.random() - 0.5);
    const mediumQuestions = questionPool.filter(q => q.difficulty === 'medium').sort(() => Math.random() - 0.5);
    const hardQuestions = questionPool.filter(q => q.difficulty === 'hard').sort(() => Math.random() - 0.5);

    // Determine number of questions based on selected difficulty
    let totalQuestionsPerPlayer;
    gameState.questions = [];

    // Form array of questions based on selected difficulty level
    switch (gameState.difficulty) {
        case 'easy':
            totalQuestionsPerPlayer = 3; // Easy - 3 questions
            gameState.questions = easyQuestions.slice(0, totalQuestionsPerPlayer * gameState.players.length);
            break;

        case 'medium':
            totalQuestionsPerPlayer = 4; // Medium - 4 questions
            // 2 easy questions, 2 medium questions
            for (let i = 0; i < gameState.players.length; i++) {
                const playerQuestions = [
                    ...easyQuestions.slice(i * 2, i * 2 + 2),
                    ...mediumQuestions.slice(i * 2, i * 2 + 2)
                ];
                gameState.questions = [...gameState.questions, ...playerQuestions];
            }
            break;

        case 'hard':
            totalQuestionsPerPlayer = 5; // Hard - 5 questions
            // 2 easy questions, 2 medium questions, 1 hard question
            for (let i = 0; i < gameState.players.length; i++) {
                const playerQuestions = [
                    ...easyQuestions.slice(i * 2, i * 2 + 2),
                    ...mediumQuestions.slice(i * 2, i * 2 + 2),
                    ...hardQuestions.slice(i, i + 1)
                ];
                gameState.questions = [...gameState.questions, ...playerQuestions];
            }
            break;
    }

    // Shuffle questions for random order
    gameState.questions.sort(() => Math.random() - 0.5);
}

function showGameScreen() {
    screens.subjectSelection.classList.remove('active');
    screens.game.classList.add('active');
    displayQuestion();
    startTimer();
}

function displayQuestion() {
    const question = gameState.questions[gameState.currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;

    const answerOptions = document.querySelectorAll('.answer-option');
    answerOptions.forEach((option, index) => {
        option.textContent = question.options[index];
        option.classList.remove('selected');
    });

    document.getElementById('player-turn').textContent = `${gameState.players[gameState.currentPlayerIndex].name}'s Turn`;
    document.getElementById('player-turn').className = `player-${gameState.currentPlayerIndex + 1}`;
    document.getElementById('submit-answer').disabled = true;
}

function startTimer() {
    gameState.timeLeft = 30;
    document.getElementById('timer').textContent = gameState.timeLeft;

    if (gameState.timer) clearInterval(gameState.timer);

    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        document.getElementById('timer').textContent = gameState.timeLeft;

        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timer);
            submitAnswer();
        }
    }, 1000);
}

function submitAnswer() {
    clearInterval(gameState.timer);

    const selectedOption = document.querySelector('.answer-option.selected');
    const question = gameState.questions[gameState.currentQuestionIndex];
    const player = gameState.players[gameState.currentPlayerIndex];

    if (selectedOption) {
        const answerIndex = parseInt(selectedOption.dataset.option) - 1;
        const isCorrect = answerIndex === question.correct;

        if (isCorrect) {
            player.score += 10;
        }

        // Save answer in history with player and question reference
        gameState.answerHistory.push({
            questionIndex: gameState.currentQuestionIndex,
            question: question.question,
            playerName: player.name,
            playerIndex: gameState.currentPlayerIndex,
            selectedAnswer: answerIndex,
            correctAnswer: question.correct,
            isCorrect: isCorrect
        });

        gameState.selectedAnswer = answerIndex;
    } else {
        // If no answer selected, also record this in history
        gameState.answerHistory.push({
            questionIndex: gameState.currentQuestionIndex,
            question: question.question,
            playerName: player.name,
            playerIndex: gameState.currentPlayerIndex,
            selectedAnswer: null,
            correctAnswer: question.correct,
            isCorrect: false
        });
    }

    gameState.currentQuestionIndex++;
    gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;

    if (gameState.currentQuestionIndex < gameState.questions.length) {
        displayQuestion();
        startTimer();
    } else {
        endGame();
    }
}

function endGame() {
    screens.game.classList.remove('active');
    screens.gameEnd.classList.add('active');

    const winners = getWinners();
    const winnersDiv = document.getElementById('winners');
    winnersDiv.innerHTML = `<h2>Winner${winners.length > 1 ? 's' : ''}: ${winners.join(', ')}</h2>`;

    const scoreboard = document.getElementById('scoreboard');
    scoreboard.innerHTML = '<h2>Scoreboard</h2><ol>';

    gameState.players.sort((a, b) => b.score - a.score).forEach((player, index) => {
        scoreboard.innerHTML += `<li>${player.name}: ${player.score} points</li>`;
    });

    scoreboard.innerHTML += '</ol>';
}

function getWinners() {
    const maxScore = Math.max(...gameState.players.map(player => player.score));
    return gameState.players.filter(player => player.score === maxScore).map(player => player.name);
}

function showReview() {
    screens.gameEnd.classList.remove('active');
    screens.review.classList.add('active');

    const reviewContent = document.getElementById('review-content');
    reviewContent.innerHTML = '';

    gameState.answerHistory.forEach((answer, index) => {
        const div = document.createElement('div');
        div.className = 'review-item';
        div.innerHTML = `
            <h3>Question ${index + 1}</h3>
            <p>${answer.question}</p>
            <p>${answer.playerName}</p>
            <p>Selected Answer: ${answer.selectedAnswer !== null ? 
                gameState.questions[answer.questionIndex].options[answer.selectedAnswer] : 'Not selected'}</p>
            <p>Correct Answer: ${gameState.questions[answer.questionIndex].options[answer.correctAnswer]}</p>
            <p>${answer.isCorrect ? 'Correct!' : 'Incorrect'}</p>
        `;
        reviewContent.appendChild(div);
    });
}

function resetGame() {
    gameState = {
        players: [],
        currentPlayerIndex: 0,
        questions: [],
        currentQuestionIndex: 0,
        subject: '',
        difficulty: 'easy',
        selectedAnswer: null,
        answerHistory: [],
        timer: null,
        timeLeft: 30
    };

    document.querySelectorAll('.player-option, .subject-option, .difficulty-option').forEach(btn => {
        btn.classList.remove('active');
    });

    screens.gameEnd.classList.remove('active');
    screens.playerSelection.classList.add('active');
}