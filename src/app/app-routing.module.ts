import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartgameComponent } from './components/startgame/startgame.component';

import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: 'game', component: StartgameComponent },
  {
    path: '',
    component: WelcomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
