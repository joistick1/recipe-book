import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recepies', loadChildren: './recepies/recepie.module#RecepieModule' },
  { path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppinglistModule' }
]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {

}