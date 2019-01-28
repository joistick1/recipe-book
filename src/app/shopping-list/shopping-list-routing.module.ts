import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from '../shopping-list/shopping-list.component';


const shoppinglistRoutes: Routes = [
  { path: '', component: ShoppingListComponent },

]

@NgModule({
	imports: [RouterModule.forChild(shoppinglistRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {

}