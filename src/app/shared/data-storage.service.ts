import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { RecepieService } from '../recepies/recepies.service';
import { Recepie } from '../recepies/recepies-list/recepie-model';
import 'rxjs/add/operator/map';
//import  'rxjs/add/operator/switchMap';

@Injectable()
export class DataStorageService { 
	url = 'https://ng-recepie-book-a74e0.firebaseio.com/data.json'
	constructor(private httpClient: HttpClient, private recepieService: RecepieService) {}

	storeRecepie() {
		const req = new HttpRequest("PUT", this.url, this.recepieService.getRecepies(), {reportProgress: true});
		return this.httpClient.request(req);
	}

	fetchRecepie() {
		this.httpClient.get<Recepie[]>(this.url, {
			observe: 'body',
			responseType: 'json'
		})
		.map(
			(recepies: Recepie[]) => {
				for(let recepie of recepies) {
					if(!recepie['ingredients']) {
						recepie['ingredients'] = [];
					}
				}

				return recepies;
		})
		.subscribe(
			(recepies: Recepie[]) => {
				this.recepieService.setRecepie(recepies);
			}
		)
	}		
		
	
}