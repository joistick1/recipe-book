import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRecepie from '../store/recepie.reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css']
})
export class RecepiesListComponent implements OnInit {
  recepiesState: Observable<fromRecepie.State>;
  constructor(private store: Store<fromRecepie.FeatureState>,
  			  private router: Router,
  			  private route: ActivatedRoute) { }

  ngOnInit() {
    this.recepiesState = this.store.select("recepies");
  }
  onNewRecepie() {
  	this.router.navigate(['new'], {relativeTo: this.route})
  }
}
