import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {MatButtonModule, MatInputModule, MatListModule, MatSidenavModule, MatToolbarModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import { GamelistComponent } from './gamelist/gamelist.component';
import {GamesService} from "./games.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        GamelistComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AngularFontAwesomeModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatListModule,
        MatInputModule,
        RouterModule.forRoot([
            {
                path: '',
                component: GamelistComponent
            }
        ])
    ],
    providers: [GamesService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

