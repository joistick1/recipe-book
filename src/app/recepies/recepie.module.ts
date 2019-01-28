import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RecepiesComponent } from '../recepies/recepies.component';
import { RecepiesListComponent } from '../recepies/recepies-list/recepies-list.component';
import { RecepiesDetailComponent } from '../recepies/recepies-detail/recepies-detail.component';
import { RecepiesItemComponent } from '../recepies/recepies-list/recepies-item/recepies-item.component';
import { RecepieStartComponent } from '../recepies/recepie-start/recepie-start.component';
import { RecepieEditComponent } from '../recepies/recepie-edit/recepie-edit.component';
import { RecepiesRoutingModule } from '../recepies/recepies-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { recepieReducer } from './store/recepie.reducers';

@NgModule({
	declarations: [
		RecepiesComponent,
	    RecepiesListComponent,
	    RecepiesDetailComponent,
	    RecepiesItemComponent,
		RecepieStartComponent,
	    RecepieEditComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		RecepiesRoutingModule,
		SharedModule,
		StoreModule.forFeature('recepies', recepieReducer)
	]
})

export class RecepieModule {

}