import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public margin: { 'margin': string } = { 'margin': '100px' };

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    this.margin = event.target.innerWidth < 768 ? { 'margin': '10px' } : { 'margin': '100px' };
  }

  ngOnInit() {
    this.margin = window.innerWidth < 768 ? { 'margin': '10px' } : { 'margin': '100px' };
  }
}
