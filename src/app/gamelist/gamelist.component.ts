import {Component, OnInit} from '@angular/core';
import {GamesService} from "../games.service";
import {Game} from "../types/Game";
import {Router} from "@angular/router";

@Component({
    selector: 'js-gamelist',
    templateUrl: './gamelist.component.html',
    styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent implements OnInit {

    private get games(): Array<Game> {
        return this.gamesService.games
    }

    public searchString: string = ''

    constructor(
        private gamesService: GamesService,
        private router: Router) {
    }

    ngOnInit() {
    }

    public navigateToGame(game) {
        this.router.navigateByUrl('game/' + game.id)
    }

}
