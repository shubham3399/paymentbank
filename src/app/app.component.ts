import { Component,Input} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PaymentBank';
  open: boolean = false;
  values = [ 560, 580, 585, 575, 538];
  value1: string;
  selectedState: string = "first";
  constFirst = "first";
  constSecond = "second";
  constThird = "third";
  constFourth = "fourth";
  constFifth = "fifth";
  selectedPane(state: string , idx:number) {
    this.selectedState = state;
    this.value1 = `${this.values[idx]}`;
  }
  openGlobe(){
    this.open = !this.open;
  }
  
}
