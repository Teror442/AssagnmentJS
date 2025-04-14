export const gameState = {
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

export const updateGameState = (newState) => {
    Object.assign(gameState, newState);
};