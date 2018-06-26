import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {GamesService} from "../games.service";
import {Game} from "../types/Game";
import {Router} from "@angular/router";

@Component({
    selector: 'js-gamelist',
    templateUrl: './gamelist.component.html',
    styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent implements OnInit {

    public get games(): Array<Game> {
        return this.gamesService.games.filter((game: Game) => {
            return game.title.includes(this._searchString)
        })
    }

    private _searchString: string = ''

    public set searchString(s: string) {
        console.log(s)
        this._searchString = s || ''
    }

    public get searchString(): string {
        return this._searchString
    }

    constructor(
        private gamesService: GamesService,
        private router: Router,
        private changeDetectorRef: ChangeDetectorRef
    ) {}

    ngOnInit() {
    }
}
