
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

export function genderToAdjective(gender: Gender) {
    switch (gender) {
        case Gender.Male: return "His";
        case Gender.Female: return "Her";
        default: return "Its";
    }
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

export enum ScreenName {
    Home,
    UserDetails
}