import {GameData} from "./GameData";

export class Game {

    public id: string
    public title: string

    constructor(gameData: GameData) {
        this.id = gameData.gameId.replace(/\s/g, '')
        this.title = gameData.title
    }
}