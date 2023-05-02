import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";

import { DataScreenComponent } from "./data-screen.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("DataScreenComponent", () => {
  let component: DataScreenComponent;
  let fixture: ComponentFixture<DataScreenComponent>;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataScreenComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => '123', // Replace with the desired parameter value
              },
            } as ActivatedRouteSnapshot,
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataScreenComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // TODO: Criar testes
});
