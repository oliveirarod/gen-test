import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

import { EditDialogComponent } from "./edit-dialog.component";

describe("EditDialogComponent", () => {
  let component: EditDialogComponent;
  let fixture: ComponentFixture<EditDialogComponent>;
  let dialogRef: MatDialogRef<EditDialogComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDialogComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: { close: jasmine.createSpy("close") },
        },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDialogComponent);
    dialogRef = TestBed.inject(MatDialogRef);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should close the dialog", () => {
    component.closeDialog();
    expect(dialogRef.close).toHaveBeenCalled();
  });

  it("should navigate to data screen page", () => {
    spyOn(router, "navigate");

    component.dataFromItem = { id: "1", userId: "2", title: "title", body: "body" };
    component.goToDataScreenPage();

    expect(router.navigate).toHaveBeenCalledWith(
      ["data-screen", {
        itemDataId: component.dataFromItem.id,
        itemDataUserId: component.dataFromItem.userId,
        itemDataTitle: component.dataFromItem.title,
        itemDataBody: component.dataFromItem.body,
      }]
    );

    expect(dialogRef.close).toHaveBeenCalled();
  });
});
