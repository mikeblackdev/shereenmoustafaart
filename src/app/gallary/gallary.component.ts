import { Component } from '@angular/core';
import { PieceService } from '../services/piece.service';
import { Piece } from '../interfaces/piece.interface';

@Component({
  selector: 'gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent {
  private _dummyDesc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  public pieces: Piece[] = [
    { name: "art1.jpeg", description: this._dummyDesc }, 
    { name: "art2.jpeg", description: this._dummyDesc }, 
    { name: "art3.jpeg", description: this._dummyDesc }, 
    { name: "art4.jpeg", description: this._dummyDesc }, 
    { name: "art5.jpeg", description: this._dummyDesc }, 
    { name: "art6.jpeg", description: this._dummyDesc }, 
    { name: "art7.jpeg", description: this._dummyDesc }, 
  ];

  constructor(private _pieceSvc: PieceService) {}

  public selectPiece(piece: Piece): void {
    this._pieceSvc.setPiece(piece);
  }
}
