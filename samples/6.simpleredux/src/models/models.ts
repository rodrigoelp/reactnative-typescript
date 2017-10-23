
export enum Game {
    PacMan,
    Pitfall,
    Tron,
    WhackAMole,
}

export enum Gender {
    Male,
    Female,
    Other,
}

export interface User {
    id: number;
    name: string;
    userName: string;
    gender: Gender,
    ownGames: GameScore[],
}

export interface GameScore  {
    game: Game;
    highestScore: number;
}