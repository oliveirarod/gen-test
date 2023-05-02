import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";

import { GetDataService } from "services/get-data.service";
import { EditDialogComponent } from "../../components/edit-dialog/edit-dialog.component";

import { Post } from "src/app/models/Post";

import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-display-data",
  templateUrl: "./display-data.component.html",
  styleUrls: ["./display-data.component.scss"],
})
export class DisplayDataComponent implements OnInit {
  constructor(
    public dataService: GetDataService,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  postsDataFromUrl?: Post[];
  displayedImages: number = 6;
  incrementBy = 6;

  mockedPostImages = [
    "../../assets/office.jpg",
    "../../assets/startup.jpg",
    "../../assets/smartphone.jpg"
  ];

  innerWidth?: number;

  editIcon = faPenToSquare;

  // Variables to store data from user input
  newTitle = String(this.route.snapshot.paramMap.get("newTitle"));
  newBody = String(this.route.snapshot.paramMap.get("newBody"));
  confirmId = String(this.route.snapshot.paramMap.get("id"));

  ngOnInit(): void {
    this.showPostsData();

    this.innerWidth = window.innerWidth;
    window.addEventListener("resize", this.onResize.bind(this));
  }

  onResize() {
    this.innerWidth = window.innerWidth;
  }

  openEditDialog({ id, userId, title, body }: Post) {
    // Data flow: GetData Service -> DisplayData Component -> EditDialog Component -> DataScreen Component.
    // This data object send the clicked card data to the next component via MatDialog object
    this.dialog.open(EditDialogComponent, {
      autoFocus: false,
      data: { userId, id, title, body },
    });
  }

  showPostsData() {
    this.dataService.getPostsData().subscribe((postsData: Post[]) => {
      this.postsDataFromUrl = postsData;

      this.postsDataFromUrl.forEach((post: Post) => {
        const randomIndex = Math.floor(Math.random() * this.mockedPostImages.length);

        post.image = this.mockedPostImages[randomIndex];

        if (this.confirmId == post.id) {
          post.title = this.newTitle;
          post.body = this.newBody;
        }
      });
    });
  }

  showMore() {
    this.displayedImages += this.incrementBy;
  }
}
