import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WelcomePageComponent } from "./pages/welcome-page/welcome-page.component";

const DEFAULT_ROUTE = "welcome-page";

const routes: Routes = [
  {
    path: "display-data",
    loadChildren: () =>
      import("./pages/display-data/display-data.module").then(
        (m) => m.DisplayDataModule
      ),
  },
  {
    path: "data-screen",
    loadChildren: () =>
      import("./pages/data-screen/data-screen.module").then(
        (m) => m.DataScreenModule
      ),
  },
  {
    path: "thanks-page",
    loadChildren: () =>
      import("./pages/thanks-page/thanks-page.module").then(
        (m) => m.ThanksPageModule
      ),
  },
  { path: "welcome-page", component: WelcomePageComponent },
  { path: "", redirectTo: DEFAULT_ROUTE, pathMatch: "full" },
  { path: "**", redirectTo: DEFAULT_ROUTE, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
