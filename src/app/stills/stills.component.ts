import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: 'stills',
  templateUrl: './stills.component.html',
  styleUrls: ['./stills.component.scss']
})
export class StillsComponent implements OnInit {
  public margin: { 'margin': string } = { 'margin': '100px' };

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    this.margin = event.target.innerWidth < 768 ? { 'margin': '10px' } : { 'margin': '100px' };
  }

  ngOnInit() {
    this.margin = window.innerWidth < 768 ? { 'margin': '10px' } : { 'margin': '100px' };
  }
}
