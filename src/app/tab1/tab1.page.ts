import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  bhaskara(){
    alert(`(∆ = b2 – 4·a·c) \n x = – b ± √∆ / 2a`);
  }
  pi(){
    alert(Math.PI)
  }
}




