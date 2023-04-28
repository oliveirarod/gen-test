import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WelcomePageComponent } from "./pages/welcome-page/welcome-page.component";

// Create a default route to facilitate maintenance
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
    path: "edit-dialog",
    loadChildren: () =>
      import("./components/edit-dialog/edit-dialog.module").then(
        (m) => m.EditDialogModule
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
  { path: "**", redirectTo: DEFAULT_ROUTE, pathMatch: "full" }, // Avoids non-existent routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
