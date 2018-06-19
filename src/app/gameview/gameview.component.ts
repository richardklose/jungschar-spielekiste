import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GamesService} from "../games.service";
import {Game} from "../types/Game";

@Component({
  selector: 'js-gameview',
  templateUrl: './gameview.component.html',
  styleUrls: ['./gameview.component.css']
})
export class GameviewComponent implements OnInit {

  private _game: Game

  public get game(): Game {
    return this._game
  }

  constructor(
      private route: ActivatedRoute,
      private gamesService: GamesService
  ) {
  }

  ngOnInit() {
    this.gamesService.getGameByGameId(this.route.params['value']['id']).subscribe((game: Game) => {
      this._game = game
    })
    console.log(this._game)
  }

}
