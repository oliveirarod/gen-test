import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { faUndo } from "@fortawesome/free-solid-svg-icons";

import { Post } from "src/app/models/Post";

@Component({
  selector: "app-data-screen",
  templateUrl: "./data-screen.component.html",
  styleUrls: ["./data-screen.component.scss"],
})
export class DataScreenComponent implements OnInit {
  // Font-awesome icons
  undoChangesIcon = faUndo;

  // Organizing recieved data into itemData object
  itemData: Post = {
    id: "",
    userId: "",
    title: "",
    body: "",
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const snapshot = this.route.snapshot.paramMap;

    this.itemData = {
      id: snapshot.get("itemDataId"),
      userId: snapshot.get("itemDataUserId"),
      title: snapshot.get("itemDataTitle"),
      body: snapshot.get("itemDataBody"),
    };
  }

  // Method used to revert changes made on clicked item data
  revertChanges() {
    this.itemData.title = this.route.snapshot.paramMap.get("itemDataTitle");
    this.itemData.body = this.route.snapshot.paramMap.get("itemDataBody");
  }

  //  Alters (only locally) data recieved from given URL (that is coming through DisplayDataComponent)
  applyChanges() {
    this.router.navigate([
      "display-data",
      {
        newTitle: this.itemData.title,
        newBody: this.itemData.body,
        id: this.itemData.id,
      },
    ]);
  }

  discardChanges() {
    this.revertChanges();
    this.router.navigate(["display-data"]);
  }
}
