import { Component, OnInit } from '@angular/core';
import { PieceService } from '../services/piece.service';
import { Piece } from '../interfaces/piece.interface';

@Component({
  selector: 'piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss']
})
export class PieceComponent implements OnInit {
  public piece!: Piece;

  constructor(private _pieceSvc: PieceService) {}

  ngOnInit() {
    setTimeout(() => {
        this.piece = this._pieceSvc.getPiece();
    });
  }
}
