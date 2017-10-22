
export enum Game {
    PacMan,
    Pitfall,
    Tron,
    WhackAMole,
}

export interface User {
    id: number;
    name: string;
    userName: string;
    ownGames: GameScore[],
}

export interface GameScore  {
    game: Game;
    highestScore: number;
}