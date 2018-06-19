import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Game} from "./types/Game";
import {Observable, Observer} from "rxjs/Rx";

@Injectable()
export class GamesService {

    private _games: Array<Game> = []

    public get games(): Array<Game> {
        return this._games
    }

    constructor(private http: HttpClient) {
        this.loadData()
    }

    public getGameByGameId(gameId: string): Observable<Game> {
        return new Observable<Game>((observer: Observer<Game>) => {
            if (this.games.length < 1) {
                this.loadData(() => {
                    observer.next(this.findGameById(gameId))
                })
            } else {
                observer.next(this.findGameById(gameId))
            }
        })

    }

    private findGameById(gameId: string): Game {
        for (const game of this.games) {
            if(game.id === gameId) {
                return game
            }
        }
        return undefined
    }

    private loadData(callback?: Function): void {
        this.http.get('assets/games.json')
            .subscribe((res: any) => {
                for (const gameData of res.games) {
                    const gameObject: Game = new Game(gameData)
                    this._games.push(gameObject)
                }
                if(callback) callback()
            });
    }
}
