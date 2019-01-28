import { Recepie } from "../recepies-list/recepie-model";
import { Ingredient } from "app/shared/ingridient.model";
import * as RecepieActions from "./recepie.actions";
import * as fromApp from "../../store/app.reducers";

export interface FeatureState extends fromApp.AppState {
    recepies: State
}
export interface State {
    recepies: Recepie[];
    chosenRecepie: Recepie
}
const initialState: State = {
    recepies: [
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
    ],
    chosenRecepie: null
}

export function recepieReducer(state = initialState, action: RecepieActions.RecepieActions) {
    switch(action.type) {
        case(RecepieActions.SET_RECEPIES):
            return {
                ...state,
                recepies: [...action.payload]
            }
        case(RecepieActions.ADD_RECEPIE):
            return {
                ...state,
                recepies: [...state.recepies, action.payload]
            }
        case(RecepieActions.UPDATE_RECEPIE):
            for (let k in state.recepies) {
                if(state.recepies[k].name === action.payload.name) {
                    state.recepies[k] = action.payload.newRecepie;
                }
            }
            return {
                ...state,
                recepies: state.recepies
            }
        case(RecepieActions.DELETE_RECEPIE):
            for (let k in state.recepies) {
                if(state.recepies[k].name === action.payload) {
                    state.recepies.splice(+k,1);
                }
            }
            return {
                ...state,
                recepies: state.recepies
            }
        case(RecepieActions.GET_RECEPIE_BY_NAME):
        const chosenRecepie = state.recepies.filter(
            val => {
                return val.name == action.payload
            }
        )
            return {
                ...state,
                recepies: state.recepies,
                chosenRecepie: chosenRecepie
            }
        default:
            return state;
    }
}

// getRecepieByName(name: string) {
//     for (let val of this.recepies) {
//        if(val.name == name) {
//          return val;
//         }
//      }
//   }