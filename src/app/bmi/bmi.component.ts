import { Component, OnInit } from "@angular/core";
import { WizzardService } from "./services/wizzard.service";

@Component({
  selector: "app-bmi",
  template: `
    <div class="section">
      <div class="columns is-centered">
        <div class="column is-narrow">
          <div class="has-text-centered">
            <div class="subtitle">BMI Calculator</div>
          </div>
          <app-display></app-display>
          <br />
          <app-input
            (height)="updateHeight($event)"
            (weight)="updateWeight($event)"
          ></app-input>
        </div>
      </div>
    </div>
  `
})
export class BmiComponent implements OnInit {
  constructor(private wizzard: WizzardService) {}

  ngOnInit() {}

  updateHeight(values) {
    let value = values.target.value;
    this.wizzard.updateHeight(value);
  }
  updateWeight(values) {
    let value = values.target.value;
    this.wizzard.updateWeight(value);
  }
}
