import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: 'motion',
  templateUrl: './motion.component.html',
  styleUrls: ['./motion.component.scss']
})
export class MotionComponent implements OnInit {
  public margin: { 'margin': string } = { 'margin': '100px' };

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    this.margin = event.target.innerWidth < 768 ? { 'margin': '10px' } : { 'margin': '100px' };
  }

  ngOnInit() {
    this.margin = window.innerWidth < 768 ? { 'margin': '10px' } : { 'margin': '100px' };
  }
}
