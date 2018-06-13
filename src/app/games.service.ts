import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GameData} from "./types/GameData";

@Injectable()
export class GamesService {

    private _games: Array<GameData>

    public get games(): Array<GameData> {
        return this._games
    }

    constructor(private http: HttpClient) {
        this.http.get('assets/games.json')
            .subscribe((res: any) => {
                this._games = res.games
            });
    }
}
