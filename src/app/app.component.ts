import { Component } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";

import { MatListItemModel } from "./models/MatListItem";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  matListItems: MatListItemModel[] = [
    { name: "Welcome page", router: "/welcome-page" },
    { name: "Posts page", router: "/display-data" },
    { name: "Thanks page", router: "/thanks-page" },
  ];

  // Method to open / close side menu
  sideMenuToggle(menu: MatDrawer) {
    menu.toggle();
  }
}
