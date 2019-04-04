import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html"
})
export class InputComponent {
  @Output() height = new EventEmitter();
  @Output() weight = new EventEmitter();

  changeHeight(to) {
    this.height.emit(to);
  }

  changeWeight(to) {
    this.weight.emit(to);
  }
}
