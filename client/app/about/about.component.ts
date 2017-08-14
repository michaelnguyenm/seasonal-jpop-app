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

  // .state('contact', {
  //     url: '/contact',
  //     templateUrl: 'contact.html',
  //     controller: function($scope) {
  //         // Obfuscation for fun
  //         $scope.host = "moc.liamg";
  //         $scope.user = "mneyugnleahcim";
  //         $scope.at = "@";
  //         // Based on http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/
  //         function rev(x) { return x.split('').reverse().join(''); }
  //         $scope.mr = rev($scope.host + $scope.at + $scope.user);

  constructor() { }

  ngOnInit() {
  }

  rev(toReverse: string): string {
    return toReverse.split('').reverse().join('');
  }
}
