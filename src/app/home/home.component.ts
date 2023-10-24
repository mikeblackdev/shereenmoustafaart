import { Component } from '@angular/core';
import { SelectService } from '../select.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public pieces: string[] = [
    "art1.jpeg",
    "art2.jpeg",
    "art3.jpeg",
    "art4.jpeg",
    "art5.jpeg",
    "art6.jpeg",
    "art7.jpeg",
    "art8.jpeg",
    "art9.jpeg",
  ];

  constructor(private _selectionSvc: SelectService) {}

  public selectPiece(piece: string): void {
        console.log('piece:', piece);
        this._selectionSvc.select(piece);
    }
}
