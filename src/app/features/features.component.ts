import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  open: boolean = false;
  values = [ 560, 580, 585, 575, 538];
  value1: any;
  selectedState: string = "first";
  constFirst = "first";
  constSecond = "second";
  constThird = "third";
  constFourth = "fourth";
  constFifth = "fifth";
  selectedPane(state: string , idx:any) {
    this.selectedState = state;
    this.value1 = this.values[idx];
  }
  openGlobe(){
    this.open = !this.open;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
