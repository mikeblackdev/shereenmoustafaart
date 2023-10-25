import { Component, OnInit } from '@angular/core';
import { SelectService } from '../select.service';
import { piece } from '../interfaces/piece.interface';

@Component({
    selector: 'closeup',
    templateUrl: './closeup.component.html',
    styleUrls: ['./closeup.component.scss']
})
export class CloseupComponent implements OnInit {
    public piece: piece = { name: '', description: '' };
    constructor(private _selectSvc: SelectService) {}

    ngOnInit() {
        setTimeout(() => {
            this.piece = this._selectSvc.getPiece();
        });
    }
}
