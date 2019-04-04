import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { BmiModule } from "../bmi/bmi.module";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "src/environments/environment";

const routes: Routes = [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BmiModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
