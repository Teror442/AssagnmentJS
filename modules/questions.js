export const questionsData = {
    html: [{
            question: "What is the correct tag for the largest heading?",
            options: ["<h6>", "<head>", "<title>", "<h1>"],
            correct: 3,
            difficulty: "easy"
        },
        {
            question: "What does the `<a>` tag do in HTML?",
            options: ["Creates a paragraph", "Adds an image", "Creates a hyperlink", "Adds a list"],
            correct: 2,
            difficulty: "easy"
        }
    ],
    css: [{
            question: "Which CSS property adds space inside an element?",
            options: ["padding", "margin", "spacing", "border"],
            correct: 0,
            difficulty: "easy"
        },
        {
            question: "Which property sets the text color?",
            options: ["color", "font-color", "text-style", "background"],
            correct: 0,
            difficulty: "easy"
        }
    ],
    js: [{
            question: "What is the result of `typeof \"hello\"`?",
            options: ["string", "word", "text", "char"],
            correct: 0,
            difficulty: "easy"
        },
        {
            question: "Which keyword declares a variable in JavaScript?",
            options: ["let", "define", "create", "varr"],
            correct: 0,
            difficulty: "easy"
        }
    ]
};

export const loadQuestions = (subject, difficulty, numPlayers) => {
    let questionPool = subject === 'mixed' ?
        [...questionsData.html, ...questionsData.css, ...questionsData.js] :
        questionsData[subject];

    const easyQuestions = questionPool.filter(q => q.difficulty === 'easy').sort(() => Math.random() - 0.5);
    const mediumQuestions = questionPool.filter(q => q.difficulty === 'medium').sort(() => Math.random() - 0.5);
    const hardQuestions = questionPool.filter(q => q.difficulty === 'hard').sort(() => Math.random() - 0.5);

    let totalQuestionsPerPlayer;
    let questions = [];

    switch (difficulty) {
        case 'easy':
            totalQuestionsPerPlayer = 3;
            questions = easyQuestions.slice(0, totalQuestionsPerPlayer * numPlayers);
            break;
        case 'medium':
            totalQuestionsPerPlayer = 4;
            for (let i = 0; i < numPlayers; i++) {
                const playerQuestions = [
                    ...easyQuestions.slice(i * 2, i * 2 + 2),
                    ...mediumQuestions.slice(i * 2, i * 2 + 2)
                ];
                questions = [...questions, ...playerQuestions];
            }
            break;
        case 'hard':
            totalQuestionsPerPlayer = 5;
            for (let i = 0; i < numPlayers; i++) {
                const playerQuestions = [
                    ...easyQuestions.slice(i * 2, i * 2 + 2),
                    ...mediumQuestions.slice(i * 2, i * 2 + 2),
                    ...hardQuestions.slice(i, i + 1)
                ];
                questions = [...questions, ...playerQuestions];
            }
            break;
    }

    return questions.sort(() => Math.random() - 0.5);
};