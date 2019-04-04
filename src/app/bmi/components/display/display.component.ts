import { Component } from "@angular/core";
import { WizzardService } from "../../services/wizzard.service";
import { Bmi } from "../../models/bmi";

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html"
})
export class DisplayComponent {
  bmi: Bmi;

  constructor(private wizzard: WizzardService) {
    wizzard.data.subscribe(value => {
      this.bmi = value;
    });
  }
}
