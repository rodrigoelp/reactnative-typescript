import { Game } from "../models/models";

const imageLocation: { [key: string]: string } = {};
const baseUrl = "https://raw.githubusercontent.com/rodrigoelp/reactnative-typescript/master/samples/6.simpleredux/resources/"
imageLocation[Game[Game.WhackAMole]] = `${baseUrl}mole.png`;
imageLocation[Game[Game.Pitfall]] = `${baseUrl}pitfall.jpg`
imageLocation[Game[Game.PacMan]] = `${baseUrl}pacman.png`
imageLocation[Game[Game.Tron]] = `${baseUrl}tron.png`

export function getImageForGame(game: Game): string {
    return imageLocation[Game[game]];
}
