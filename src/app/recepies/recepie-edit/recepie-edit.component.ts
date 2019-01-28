import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms'
import { RecepieService } from '../recepies.service';
import { Store } from '@ngrx/store';
import * as fromReceipe from '../store/recepie.reducers';
import * as RecepieActions from '../store/recepie.actions';
import { Recepie } from '../recepies-list/recepie-model';

@Component({
  selector: 'app-recepie-edit',
  templateUrl: './recepie-edit.component.html',
  styleUrls: ['./recepie-edit.component.css']
})
export class RecepieEditComponent implements OnInit {
  name: string;
  editMode = false;
  receipeForm: FormGroup;
  receipe: Recepie;
  constructor(private route: ActivatedRoute, 
              private receipeService: RecepieService,
              private router: Router,
              private store: Store<fromReceipe.FeatureState>) { }

  ngOnInit() {
    this.receipeService.onConsole();
  	this.route.params
  		.subscribe(
  		(params: Params) => {
  			  this.name = params['name'];
          //console.log(this.name)
  			  this.editMode = params['name'] != null;
          this.initForm();
  		  }
  		)
  }

  onSubmit() {
    if(this.editMode) {
      this.store.dispatch(new RecepieActions.UpdateRecepie({name: this.name, newRecepie: this.receipeForm.value}))
    } else {
      this.store.dispatch(new RecepieActions.AddRecepie(this.receipeForm.value))
    }
    this.onCancel();
  }

  private initForm() {
    let recepieName = '';
    let recepieImageUrl = '';
    let recepieDescription  ='';
    let recepieIngredients = new FormArray([]);

    if(this.editMode) {
      this.store.select("recepies")
        .subscribe((receipeState: fromReceipe.State) => {
          this.receipe = receipeState.recepies.filter((recep:Recepie) => recep.name === this.name)[0] || this.receipeForm.value;
          console.log(" receipeState ", this.receipe)
          recepieName = this.receipe.name;
          recepieImageUrl = this.receipe.imagePath;
          recepieDescription =this.receipe.description;
  
          if(this.receipe['ingredients']) {
            for(let ingredient of this.receipe.ingredients) {
                recepieIngredients.push(new FormGroup({
                'name': new FormControl(ingredient.name, Validators.required),
                'amount': new FormControl(ingredient.amount,
                  [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
              }));
            }
          }
        });
    }

    this.receipeForm = new FormGroup({
      'name': new FormControl(recepieName, Validators.required),
      'imagePath': new FormControl(recepieImageUrl, Validators.required),
      'description': new FormControl(recepieDescription, Validators.required),
      'ingredients': recepieIngredients
    })
  }

  onAddIngredient() {
    (<FormArray>this.receipeForm.get('ingredients')).push(new FormGroup({
            'name': new FormControl(null, Validators.required),
            'amount': new FormControl(null,
              [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));

  }
  onDeleteIngredient(index: number) {
    (<FormArray>this.receipeForm.get('ingredients')).removeAt(index);
  }
  onCancel() {
    this.router.navigate(['/'], {relativeTo: this.route})
  }

  getControls() {
    return (<FormArray>this.receipeForm.get('ingredients')).controls;
  }
}