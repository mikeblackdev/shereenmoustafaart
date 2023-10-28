import { Injectable } from "@angular/core";
import { Piece } from '../interfaces/piece.interface';

@Injectable()
export class PieceService {
  private _piece!: Piece;

  constructor() {
    let pieceStr: string | null = localStorage.getItem('piece');
    if (pieceStr) {
      this._piece = JSON.parse(pieceStr);
    }
  }

  public setPiece(piece: Piece): void {
    this._piece = piece;
    localStorage.setItem('piece', JSON.stringify(piece));
  }

  public getPiece(): Piece {
    return this._piece;
  }
}
