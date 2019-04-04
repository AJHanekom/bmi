import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DisplayComponent } from "./components/display/display.component";
import { InputComponent } from "./components/input/input.component";
import { BmiComponent } from "./bmi.component";

@NgModule({
  declarations: [DisplayComponent, InputComponent, BmiComponent],
  imports: [CommonModule],
  exports: [BmiComponent]
})
export class BmiModule {}
