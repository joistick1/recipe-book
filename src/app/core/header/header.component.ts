import { Component, Output, EventEmitter, OnInit } from '@angular/core'
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers'
import { Observable } from 'rxjs';
import * as AuthActions from '../../auth/store/auth.actions';
import * as RecepieActions from '../../recepies/store/recepie.actions';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit{
	constructor(private store: Store<fromApp.AppState>) {}
    @Output() featureSelected = new EventEmitter<string>();
    authState: Observable<fromAuth.State>
    
    ngOnInit() {
        this.authState = this.store.select("auth")
        console.log(this.authState)
    }

    onSelect(feature:string) {
        this.featureSelected.emit(feature);
        
    }
    onSaveData() {
    	this.store.dispatch(new RecepieActions.StoreRecepies())
    }

    onFetchData() {
    	this.store.dispatch(new RecepieActions.FetchRecepies());
    }

    onLogout() {
        this.store.dispatch(new AuthActions.LogOut());
    }
}

