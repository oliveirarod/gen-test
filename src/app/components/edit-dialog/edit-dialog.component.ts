import { Component, Inject, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { Router } from "@angular/router";
import { DisplayDataComponent } from "../../pages/display-data/display-data.component";
import { Post } from "src/app/models/Post";

@Component({
  selector: "app-edit-dialog",
  templateUrl: "./edit-dialog.component.html",
  styleUrls: ["./edit-dialog.component.scss"],
})
export class EditDialogComponent implements OnInit {
  id: string = "";
  userId: string = "";
  title: string = "";
  body: string = "";

  constructor(
    public dialogRef: MatDialogRef<DisplayDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Post,
    public router: Router
  ) {}

  dataFromItem = this.data;

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  goToDataScreenPage() {
    // Sending data using router object methods, pointing to which component it should go and sending data that is needed.
    this.router.navigate([
      "data-screen",
      {
        itemDataId: this.dataFromItem.id,
        itemDataUserId: this.dataFromItem.userId,
        itemDataTitle: this.dataFromItem.title,
        itemDataBody: this.dataFromItem.body,
      },
    ]);

    this.dialogRef.close();
  }
}
