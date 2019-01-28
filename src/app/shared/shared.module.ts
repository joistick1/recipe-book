import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';

@NgModule({
	declarations: [
		DropdownDirective
	],
	exports: [
		DropdownDirective
	]
})

export class SharedModule {

}