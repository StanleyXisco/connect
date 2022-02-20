import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessfulComponent } from './successful/successful.component';
import { PhraseComponent } from './writeup/phrase/phrase.component';
import { WriteupComponent } from './writeup/writeup.component';

const routes: Routes = [
  {path:'welcome', component: WriteupComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path:'connect', component: PhraseComponent},
  {path: 'success', component: SuccessfulComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
