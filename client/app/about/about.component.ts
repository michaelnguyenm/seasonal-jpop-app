import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  host: string = "moc.liamg";
  user: string = "mneyugnleahcim";
  at: string = "@";
  mr: string = this.rev(this.host + this.at + this.user);

  constructor() { }

  ngOnInit() {
  }

  rev(toReverse: string): string {
    return toReverse.split('').reverse().join('');
  }
}
