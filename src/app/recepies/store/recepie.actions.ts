import { Action } from '@ngrx/store';
import { Recepie } from '../recepies-list/recepie-model';

export const SET_RECEPIES = "SET_RECEPIES";
export const ADD_RECEPIE = "ADD_RECEPIE";
export const UPDATE_RECEPIE = "UPDATE_RECEPIE";
export const DELETE_RECEPIE = "DELETE_RECEPIE";
export const GET_RECEPIE_BY_NAME = "GET_RECEPIE_BY_NAME";

export class SetRecepies implements Action {
    readonly type = SET_RECEPIES;

    constructor(public payload: Recepie[]) {}
}

export class AddRecepie implements Action {
    readonly type = ADD_RECEPIE;

    constructor(public payload: Recepie) {}
}

export class UpdateRecepie implements Action {
    readonly type = UPDATE_RECEPIE;

    constructor(public payload: {name: string, newRecepie: Recepie}) {}
}

export class DeleteRecepie implements Action {
    readonly type = DELETE_RECEPIE;

    constructor(public payload: string) {}
}

export class GetRecepieByName implements Action {
    readonly type = GET_RECEPIE_BY_NAME;

    constructor(public payload: string) {}
}
export type RecepieActions = 
    SetRecepies | 
    AddRecepie |
    UpdateRecepie |
    DeleteRecepie |
    GetRecepieByName;