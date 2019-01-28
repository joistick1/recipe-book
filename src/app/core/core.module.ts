import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

//import { DropdownDirective } from '../shared/dropdown.directive';
import { RecepieService } from '../recepies/recepies.service'
import { DataStorageService } from '../shared/data-storage.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'app/shared/auth.interceptor';
import { LoggingInterceptor } from 'app/shared/logging.interceptor';

@NgModule({
	declarations: [
		HeaderComponent,
		HomeComponent
	],
	imports: [
		SharedModule,
		AppRoutingModule,
		CommonModule
	],
	exports: [
		AppRoutingModule,
		HeaderComponent
	],
	providers: [
		RecepieService, 
		DataStorageService,
		{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
		{provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
	]
})

export class CoreModule {}