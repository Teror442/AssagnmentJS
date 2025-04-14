export const screens = {
    playerSelection: document.getElementById('player-selection-screen'),
    subjectSelection: document.getElementById('subject-selection-screen'),
    game: document.getElementById('game-screen'),
    gameEnd: document.getElementById('game-end-screen'),
    review: document.getElementById('review-screen')
};

export const showScreen = (screenId) => {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenId].classList.add('active');
};

export const updateQuestionDisplay = (question, playerName, playerIndex) => {
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('player-turn').textContent = `${playerName}'s Turn`;
    document.getElementById('player-turn').className = `player-${playerIndex + 1}`;

    const answerOptions = document.querySelectorAll('.answer-option');
    answerOptions.forEach((option, index) => {
        option.textContent = question.options[index];
        option.classList.remove('selected');
    });

    document.getElementById('submit-answer').disabled = true;
};

export const updateTimer = (time) => {
    document.getElementById('timer').textContent = time;
};

export const updateScoreboard = (players) => {
    const scoreboard = document.getElementById('scoreboard');
    scoreboard.innerHTML = '<h2>Scoreboard</h2><ol>';
    players.sort((a, b) => b.score - a.score).forEach(player => {
        scoreboard.innerHTML += `<li>${player.name}: ${player.score} points</li>`;
    });
    scoreboard.innerHTML += '</ol>';
};

export const showWinners = (winners) => {
    const winnersDiv = document.getElementById('winners');
    winnersDiv.innerHTML = `<h2>Winner${winners.length > 1 ? 's' : ''}: ${winners.join(', ')}</h2>`;
};