import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";

// Create a default route to facilitate maintenance
const DEFAULT_ROUTE = "welcome-page";

const routes: Routes = [
  {
    path: "display-data",
    loadChildren: () =>
      import("./display-data/display-data.module").then(
        (m) => m.DisplayDataModule
      ),
  },
  {
    path: "edit-dialog",
    loadChildren: () =>
      import("./edit-dialog/edit-dialog.module").then(
        (m) => m.EditDialogModule
      ),
  },
  {
    path: "data-screen",
    loadChildren: () =>
      import("./data-screen/data-screen.module").then(
        (m) => m.DataScreenModule
      ),
  },
  {
    path: "thanks-page",
    loadChildren: () =>
      import("./thanks-page/thanks-page.module").then(
        (m) => m.ThanksPageModule
      ),
  },
  { path: "welcome-page", component: WelcomePageComponent },
  { path: "", redirectTo: DEFAULT_ROUTE, pathMatch: "full" },
  { path: "**", redirectTo: DEFAULT_ROUTE, pathMatch: "full" }, // Avoids non-existent routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
