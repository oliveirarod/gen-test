import { Component } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "gen-test";

  // Method to open / close side menu
  sideMenuToggle(menu: MatDrawer) {
    menu.toggle();
  }
}
