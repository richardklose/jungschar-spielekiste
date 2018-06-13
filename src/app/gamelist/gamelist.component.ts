import { Component, OnInit } from '@angular/core';
import {GamesService} from "../games.service";
import {GameData} from "../types/GameData";

@Component({
  selector: 'js-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent implements OnInit {

  private get games(): Array<GameData> {
    return this. gamesService.games
  }

  public searchString: string = ''

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
  }

}
