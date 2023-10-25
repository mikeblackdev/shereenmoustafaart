import { Injectable, OnInit} from "@angular/core";
import { piece } from './interfaces/piece.interface';

@Injectable()
export class SelectService {
    private _selection: any;
    constructor() {
        try {
            this._selection = JSON.parse(<any>localStorage.getItem('selection'));
            console.log('service got:', this._selection);
        } catch (err) {
            console.error('There was a problem setting the peice in local storage:', err);
        }
    }
    public select(selection: piece): void {
        this._selection = selection;
        console.log('JSON:', JSON.stringify(selection));
        try {
            localStorage.setItem('selection', JSON.stringify(selection));
        } catch (err) {
            console.error('There was a problem setting the peice in local storage:', err);
        }
    }
    public getPiece(): piece {
        return this._selection;
    }
}