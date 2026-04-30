import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { PlayersComponent } from './players/players.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { AuthGuard } from './auth.guard';
import { CreateGuildComponent } from './create-guild/create-guild.component';

export const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'create-guild', component: CreateGuildComponent },
  {
    path: 'create-character',
    component: CreateCharacterComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'signin' }
];
