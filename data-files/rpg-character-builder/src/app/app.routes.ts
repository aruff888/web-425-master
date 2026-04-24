import { Routes } from '@angular/router';

import { PlayersComponent } from './players/players.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'players', pathMatch: 'full' },

  { path: 'players', component: PlayersComponent },

  {
    path: 'create-character',
    component: CreateCharacterComponent,
    canActivate: [AuthGuard]
  }
];
