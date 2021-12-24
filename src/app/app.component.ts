import { Component,Input} from '@angular/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'PaymentBank';
  open: boolean = false;
  values = [ 400, 569, 560, 600, 700];
  value1: number;
  selectedState: string = "first";
  constFirst = "first";
  constSecond = "second";
  constThird = "third";
  constFourth = "fourth";
  constFifth = "fifth";
  selectedPane(state: string , idx:number) {
    this.selectedState = state;
    this.value1 = this.values[idx];
    
  }
  openGlobe(){
    this.open = !this.open;
  }
  
}
