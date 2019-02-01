import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import * as fromRecepie from './recepie.reducers';
import * as RecepieActions from './recepie.actions';
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/withLatestFrom";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Recepie } from "../recepies-list/recepie-model";
import { Store } from "@ngrx/store";

@Injectable()
export class RecepieEffects {
    url = 'https://ng-recepie-book-a74e0.firebaseio.com/data.json';

    @Effect()

    fetchRecepies = this.actions$
        .ofType(RecepieActions.FETCH_RECEPIES)
        .switchMap((action: RecepieActions.FetchRecepies) =>{
            return this.httpClient.get<Recepie[]>(this.url, {
                observe: 'body',
                responseType: 'json'
            })
        })
        .map(
            (recepies: Recepie[]) => {
                for(let recepie of recepies) {
                    if(!recepie['ingredients']) {
                        recepie['ingredients'] = [];
                    }
                }

                return {
                    type: RecepieActions.SET_RECEPIES,
                    payload: recepies
                };
        });

    @Effect({dispatch: false})

    storeRecepies = this.actions$
        .ofType(RecepieActions.STORE_RECEPIES)
        .withLatestFrom(this.store.select("recepies"))
        .switchMap(([action, state]) => {
            const req = new HttpRequest("PUT", this.url, state.recepies, {reportProgress: true});
		    return this.httpClient.request(req);
        })
        

    constructor(private actions$: Actions, private httpClient: HttpClient, private store: Store<fromRecepie.FeatureState>) {}
}