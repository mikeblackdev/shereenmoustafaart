import { Injectable, OnInit} from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class SelectService {
    private _selection: any = '';
    constructor() {
        this._selection = localStorage.getItem('selection');
        console.log('service got:', this._selection);
    }
    public select(selection: string): void {
        this._selection = selection;
        localStorage.setItem('selection', selection);
    }
    public getPiece(): string {
        return this._selection;
    }
}