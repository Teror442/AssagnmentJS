export class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }

    updateScore(points) {
        this.score += points;
    }
}

export const initializePlayers = (numPlayers) => {
    const players = [];
    for (let i = 1; i <= numPlayers; i++) {
        players.push(new Player(`Player ${i}`));
    }
    return players;
};

export const getWinners = (players) => {
    const maxScore = Math.max(...players.map(player => player.score));
    return players.filter(player => player.score === maxScore).map(player => player.name);
};