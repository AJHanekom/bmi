import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Bmi } from "../models/bmi";

@Injectable({
  providedIn: "root"
})
export class WizzardService {
  private dataSource = new BehaviorSubject<Bmi>({
    metrics: { height: 1.78, weight: 96, bmi: 30.3 },
    imperials: { height: 1.78, weight: 96, bmi: 30.3 },
    status: "start"
  });
  data = this.dataSource.asObservable();

  constructor() {}

  updatedDataSelection(data: Bmi) {
    this.updateBmi(data);
    this.dataSource.next(data);
  }

  updateHeight(value) {
    let result = this.dataSource.getValue();
    result.metrics.height = value;
    this.updatedDataSelection(result);
  }
  updateWeight(value) {
    let result = this.dataSource.getValue();
    result.metrics.weight = value;
    this.updatedDataSelection(result);
  }

  private updateBmi(data: Bmi) {
    data.metrics.bmi = data.metrics.weight / Math.pow(data.metrics.height, 2);
  }
}
