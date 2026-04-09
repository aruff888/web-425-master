import { Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';

export const routes: Routes = [
  { path: '', redirectTo: 'players', pathMatch: 'full' },
  { path: 'players', component: PlayersComponent }
];
