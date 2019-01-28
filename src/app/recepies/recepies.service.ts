import { Recepie } from './recepies-list/recepie-model';
import { Ingredient } from '../shared/ingridient.model';
import { Subject } from 'rxjs';

export class RecepieService {
  recepiesChanged = new Subject<Recepie[]>();
  startedEditing = new Subject<number>();
	private recepies: Recepie[] = [
      new Recepie('Meat', 'Very very tasty meat from pork with apples', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81GUDAz0U7c9Y0MOUOeOtvqG9YfjQf9rRBU3hlq9ZInXuWUcd', 
      	[
      		new Ingredient("Meat", 1),
      		new Ingredient("Apples", 2)
      	]),
      new Recepie('Borsch', 'Very very tasty borsch from my grand ma', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFHxhb3lf7AkCwS8P-fLcDsJDWAFQg0tsW8FC4UVT5RQ2btMN9', 
      	[
      		new Ingredient("Chicken", 1),
      		new Ingredient("Potatoes", 5),
      		new Ingredient("Buryak", 2)
      	]),
      new Recepie('Tomatoes', 'Just tomatoes. Nothing more.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAkXu1zscjkfQkfEUK215j5mtLJPzlpqJfscWyPs_uAPxUbqV6A', 
      	[
      		new Ingredient("Tomatoes", 4)
      	])
  ];

  constructor() {}
  getRecepies() {
  	return this.recepies.slice();
  }
  onConsole() {
    console.log(this.recepies)
  }
  getRecepie(index: number) {
    return this.recepies[index];
  }

  getRecepieByName(name: string) {
    for (let val of this.recepies) {
       if(val.name == name) {
         return val;
        }
     }
  }

  addRecepie(recepie: Recepie) {
    this.recepies.push(recepie);
    this.recepiesChanged.next(this.recepies.slice());
    console.log("THIS sss", this.recepies)
  }

  updateRecepie(name: string, newRecepie: Recepie) {
    for (let k in this.recepies) {
       if(this.recepies[k].name === name) {
         this.recepies[k] = newRecepie;
         this.recepiesChanged.next(this.recepies.slice());
        }
     }
  }
  deleteRecepie(name: string) {
    for (let k in this.recepies) {
      console.log(this.recepies[k].name === name)
       if(this.recepies[k].name === name) {
         this.recepies.splice(+k,1)
         this.recepiesChanged.next(this.recepies.slice());
       }
     }
  }

  setRecepie(recepies: Recepie[]) {
    this.recepies = recepies;
    this.recepiesChanged.next(this.recepies.slice());
  }
}