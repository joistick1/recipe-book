import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecepiesComponent } from '../recepies/recepies.component';
import { RecepiesDetailComponent } from '../recepies/recepies-detail/recepies-detail.component';
import { RecepiesListComponent } from '../recepies/recepies-list/recepies-list.component';
import { RecepieStartComponent } from '../recepies/recepie-start/recepie-start.component';
import { RecepieEditComponent } from '../recepies/recepie-edit/recepie-edit.component';
import { AuthGuard } from '../auth/auth-guard.service';


const recepiesRoutes: Routes = [
  { path: '', component: RecepiesComponent, children: [
    { path: '', component: RecepieStartComponent },
    { path: 'new', component: RecepieEditComponent, canActivate: [AuthGuard] },
    { path: ':name', component: RecepiesDetailComponent },
    { path: ':name/edit', component: RecepieEditComponent, canActivate: [AuthGuard] }
  ] }
]

@NgModule({
	imports: [RouterModule.forChild(recepiesRoutes)],
	exports: [RouterModule],
	providers: [AuthGuard]
})
export class RecepiesRoutingModule {

}