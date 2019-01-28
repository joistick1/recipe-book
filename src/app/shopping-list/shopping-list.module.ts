import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ShoppingEditComponent } from '../shopping-list/shopping-edit/shopping-edit.component';
import { AppRoutingModule } from '../shopping-list/shopping-list-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		ShoppingListComponent,
		ShoppingEditComponent
	],
	imports: [
		CommonModule,
		AppRoutingModule,
		FormsModule
	]
})
export class ShoppinglistModule {

}