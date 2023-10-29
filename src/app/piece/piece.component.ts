import { Component, HostListener, OnInit } from '@angular/core';
import { PieceService } from '../services/piece.service';
import { Piece } from '../interfaces/piece.interface';

@Component({
  selector: 'piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss']
})
export class PieceComponent implements OnInit {
  public piece!: Piece;
  public flexDirection: { 'flex-direction': string } = { 'flex-direction': 'row' }; 

  constructor(private _pieceSvc: PieceService) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    this.flexDirection = event.target.innerWidth < 768 ? { 'flex-direction': 'column' } : { 'flex-direction': 'row' };
  }

  ngOnInit() {
    setTimeout(() => {
        this.piece = this._pieceSvc.getPiece();
    });
    this.flexDirection = window.innerWidth < 768 ? { 'flex-direction': 'column' } : { 'flex-direction': 'row' };
  }
}
