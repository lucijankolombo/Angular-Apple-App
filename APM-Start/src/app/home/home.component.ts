import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  graphiteBtn: boolean = true;
   goldBtn: boolean = false;
   silverBtn: boolean = false;
   blueBtn: boolean = false;
   greenBtn: boolean = false;

   clickGraphiteBtn(): void {
       this.graphiteBtn = true;
       this.goldBtn = false;
       this.silverBtn = false;
       this.blueBtn = false;
       this.greenBtn = false;
   }

   clickGoldBtn(): void {
     this.goldBtn = true;
     this.graphiteBtn = false;
     this.silverBtn = false;
     this.blueBtn = false;
     this.greenBtn = false;
   }

   clickSilverBtn(): void {
    this.silverBtn = true;
    this.goldBtn = false;
    this.graphiteBtn = false;
    this.blueBtn = false;
    this.greenBtn = false;
  }

  clickBlueBtn(): void {
     this.blueBtn = true;
     this.silverBtn = false;
     this.goldBtn = false;
     this.graphiteBtn = false;
     this.greenBtn = false;
  }

  clickGreenBtn(): void {
    this.greenBtn = true;
    this.blueBtn = false;
    this.silverBtn = false;
    this.goldBtn = false;
    this.graphiteBtn = false;
  }


  ngOnInit(): void {

  }

}
