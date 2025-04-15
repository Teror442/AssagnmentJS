import { gameState, updateGameState } from './gameState.js';
import { loadQuestions, questionsData } from './questions.js';
import { showScreen, updateQuestionDisplay, updateScoreboard, showWinners } from './ui.js';
import { Timer } from './timer.js';
import { initializePlayers, getWinners } from './players.js';

export const initializeEventListeners = () => {
    document.querySelectorAll('.player-option').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.player-option').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const numPlayers = parseInt(button.dataset.players);
            updateGameState({ players: initializePlayers(numPlayers) });
            showScreen('subjectSelection');
        });
    });

    document.querySelectorAll('.subject-option').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.subject-option').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            updateGameState({ subject: button.dataset.subject });
        });
    });

    document.querySelectorAll('.difficulty-option').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.difficulty-option').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            updateGameState({ difficulty: button.dataset.difficulty });
        });
    });

    document.getElementById('prev-to-players').addEventListener('click', () => {
        showScreen('playerSelection');
    });

    document.getElementById('start-game').addEventListener('click', () => {
        if (gameState.subject && gameState.difficulty) {
            updateGameState({
                questions: loadQuestions(gameState.subject, gameState.difficulty, gameState.players.length)
            });
            showScreen('game');
            displayQuestion();
            startTimer();
        }
    });

    document.querySelectorAll('.answer-option').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.answer-option').forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            updateGameState({ selectedAnswer: parseInt(option.dataset.option) - 1 });
            document.getElementById('submit-answer').disabled = false;
        });
    });

    document.getElementById('submit-answer').addEventListener('click', submitAnswer);
    document.getElementById('new-game').addEventListener('click', resetGame);
    document.getElementById('review-answers').addEventListener('click', () => {
        showScreen('review');
        showReview();
    });
    document.getElementById('back-to-end').addEventListener('click', () => {
        showScreen('gameEnd');
    });
};

const displayQuestion = () => {
    const question = gameState.questions[gameState.currentQuestionIndex];
    const player = gameState.players[gameState.currentPlayerIndex];
    updateQuestionDisplay(question, player.name, gameState.currentPlayerIndex);
};

const startTimer = () => {
    const timer = new Timer(30,
        (time) => document.getElementById('timer').textContent = time,
        submitAnswer
    );
    timer.start();
    updateGameState({ timer });
};

const submitAnswer = () => {
    if (gameState.timer) {
        gameState.timer.stop();
    }

    const question = gameState.questions[gameState.currentQuestionIndex];
    const player = gameState.players[gameState.currentPlayerIndex];
    const isCorrect = gameState.selectedAnswer === question.correct;

    if (isCorrect) {
        player.updateScore(10);
    }

    gameState.answerHistory.push({
        questionIndex: gameState.currentQuestionIndex,
        question: question.question,
        playerName: player.name,
        playerIndex: gameState.currentPlayerIndex,
        selectedAnswer: gameState.selectedAnswer,
        correctAnswer: question.correct,
        isCorrect
    });

    gameState.currentQuestionIndex++;
    gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;

    if (gameState.currentQuestionIndex < gameState.questions.length) {
        displayQuestion();
        startTimer();
    } else {
        endGame();
    }
};

const endGame = () => {
    showScreen('gameEnd');
    showWinners(getWinners(gameState.players));
    updateScoreboard(gameState.players);
};

const showReview = () => {
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
};

const resetGame = () => {
    updateGameState({
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
    });

    document.querySelectorAll('.player-option, .subject-option, .difficulty-option').forEach(btn => {
        btn.classList.remove('active');
    });

    showScreen('playerSelection');
};