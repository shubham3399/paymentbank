import { Component } from '@angular/core';
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
  selectedState: string = "first";
  constFirst = "first";
  constSecond = "second";
  constThird = "third";
  constFourth = "fourth";
  constFifth = "fifth";
  selectedPane(state: string) {
    this.selectedState = state;
  }
  tick1() {
    let select1: HTMLElement | any = document.getElementById("select1");
    let select2: HTMLElement | any = document.getElementById("select2");
    let select3: HTMLElement | any = document.getElementById("select3");
    let select4: HTMLElement | any = document.getElementById("select4");
    let select5: HTMLElement | any = document.getElementById("select5");
    select1.style.background = "#23DBBD";
    select2.style.background = "#55546c";
    select3.style.background = "#55546c";
    select4.style.background = "#55546c";
    select5.style.background = "#55546c";
  }
  tick2() {
    let select1: HTMLElement | any = document.getElementById("select1");
    let select2: HTMLElement | any = document.getElementById("select2");
    let select3: HTMLElement | any = document.getElementById("select3");
    let select4: HTMLElement | any = document.getElementById("select4");
    let select5: HTMLElement | any = document.getElementById("select5");
    select1.style.background = "#55546c";
    select2.style.background = "#23DBBD";
    select3.style.background = "#55546c";
    select4.style.background = "#55546c";
    select5.style.background = "#55546c";

  }
  tick3() {
    let select1: HTMLElement | any = document.getElementById("select1");
    let select2: HTMLElement | any = document.getElementById("select2");
    let select3: HTMLElement | any = document.getElementById("select3");
    let select4: HTMLElement | any = document.getElementById("select4");
    let select5: HTMLElement | any = document.getElementById("select5");
    select1.style.background = "#55546c";
    select2.style.background = "#55546c";
    select3.style.background = "#23DBBD";
    select4.style.background = "#55546c";
    select5.style.background = "#55546c";
  }
  tick4() {
    let select1: HTMLElement | any = document.getElementById("select1");
    let select2: HTMLElement | any = document.getElementById("select2");
    let select3: HTMLElement | any = document.getElementById("select3");
    let select4: HTMLElement | any = document.getElementById("select4");
    let select5: HTMLElement | any = document.getElementById("select5");
    select1.style.background = "#55546c";
    select2.style.background = "#55546c";
    select3.style.background = "#55546c";
    select4.style.background = "#23DBBD";
    select5.style.background = "#55546c";
  }
  tick5() {
    let select1: HTMLElement | any = document.getElementById("select1");
    let select2: HTMLElement | any = document.getElementById("select2");
    let select3: HTMLElement | any = document.getElementById("select3");
    let select4: HTMLElement | any = document.getElementById("select4");
    let select5: HTMLElement | any = document.getElementById("select5");
    select1.style.background = "#55546c";
    select2.style.background = "#55546c";
    select3.style.background = "#55546c";
    select4.style.background = "#55546c";
    select5.style.background = "#23DBBD";
  }
}
