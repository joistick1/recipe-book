import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { Observable } from 'rxjs';
import { Ingredient } from '../shared/ingridient.model';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromApp from '../store/app.reducers';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  animations: [
    trigger('itemState', [
      state('in', style({
        opacity : '1',
        transform : 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity : '0',
          transform : 'translateX(-100px)'
        }),
        animate(200)
      ]),
      transition('* => void', [
        animate(1000, style({
          transform: 'translateX(-100px)',
          opacity: 0
          })
        )
      ])
    ])
  ]
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select("shoppingList");
  }
  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index))
  }
}
