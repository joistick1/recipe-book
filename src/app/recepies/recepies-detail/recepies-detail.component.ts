import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recepie } from '../recepies-list/recepie-model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as fromApp from '../../store/app.reducers';
import * as fromReceipe from '../store/recepie.reducers';
import * as RecepieActions from '../store/recepie.actions';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-recepies-detail',
  templateUrl: './recepies-detail.component.html',
  styleUrls: ['./recepies-detail.component.css']
})
export class RecepiesDetailComponent implements OnInit{
  recepieState: Observable<fromReceipe.State>;
  recepie: Recepie;
  id: number;
  name: string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromReceipe.FeatureState>) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.name = params['name'];
          this.recepieState = this.store.select("recepies");
          this.recepieState.pipe(
            tap( recepies => {
              this.recepie = recepies.recepies.filter((recep:Recepie) => recep.name === this.name)[0];
            })
          ).subscribe()
        }
      );
  };
  addToShoppingList() {
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recepie.ingredients))
    }
  // ngOnDestroy() {
  //   this.paramsSubscription.unsubscribe();
  // }
  onEditRecepie() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
  onDeleteRecepie() {
    this.store.dispatch(new RecepieActions.DeleteRecepie(this.name));
    this.router.navigate(['/recepies'])
  }

}
