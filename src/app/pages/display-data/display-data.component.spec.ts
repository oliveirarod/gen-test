import { ComponentFixture, TestBed } from "@angular/core/testing";
import {
  HttpTestingController,
  HttpClientTestingModule,
} from "@angular/common/http/testing";

import { MatDialogModule } from "@angular/material/dialog";

import { DisplayDataComponent } from "./display-data.component";
import { ActivatedRoute } from "@angular/router";

describe("DisplayDataComponent", () => {
  let component: DisplayDataComponent;
  let fixture: ComponentFixture<DisplayDataComponent>;
  let httpTestingController: HttpTestingController;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayDataComponent],
      imports: [HttpClientTestingModule, MatDialogModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            // Fornecer aqui as dependências necessárias da classe ActivatedRoute
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDataComponent);
    httpTestingController = TestBed.inject(HttpTestingController);
    activatedRoute = TestBed.inject(ActivatedRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
