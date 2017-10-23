
import { Reducer } from "redux";
import { Game, User, Gender } from "../models/models";

const userlist: Array<User> = [
    {
        id: 1, name: "John", userName: "knowerOfNothing@thewall.org", gender: Gender.Male,
        ownGames: [
            { game: Game.Pitfall, highestScore: 32000 },
            { game: Game.PacMan, highestScore: 31000 },
            { game: Game.Tron, highestScore: 30000 },
            { game: Game.WhackAMole, highestScore: 29000 },
        ]
    } as User,
    {
        id: 2, name: "Danaerys", userName: "motherOfDragons@goingforthethrone.com", gender: Gender.Female,
        ownGames: [
            { game: Game.Pitfall, highestScore: 31999 },
            { game: Game.PacMan, highestScore: 32000 },
            { game: Game.Tron, highestScore: 29999 },
            { game: Game.WhackAMole, highestScore: 0 },
        ]
    } as User,
    {
        id: 3, name: "Sandor", userName: "fuckthis@fuckthat.co", gender: Gender.Male,
        ownGames: [
            { game: Game.WhackAMole, highestScore: 9999999 }
        ]
    } as User,
];

export function UserReducer(state: Array<User>, action: any): Array<User> {
    return userlist;
}

