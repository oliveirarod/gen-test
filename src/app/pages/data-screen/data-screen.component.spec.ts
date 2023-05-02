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
                get: (param: string) => {
                  switch (param) {
                    case "itemDataId":
                      return "1";
                    case "itemDataUserId":
                      return "1";
                    case "itemDataTitle":
                      return "Test Title";
                    case "itemDataBody":
                      return "Test Body";
                    default:
                      return;
                  }
                },
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

  it('should revert changes to original values', () => {
    component.revertChanges();
    expect(component.itemData.title).toBe('Test Title');
    expect(component.itemData.body).toBe('Test Body');
  });

  it('should apply changes to item data', () => {
    component.itemData.title = 'New Title';
    component.itemData.body = 'New Body';

    component.applyChanges();
    expect(component.itemData.title).toBe('New Title');
    expect(component.itemData.body).toBe('New Body');
  });

  it('should discard changes and navigate back to display-data', () => {
    component.itemData.title = 'New Title';
    component.itemData.body = 'New Body';

    component.discardChanges();
    expect(component.itemData.title).toBe('Test Title');
    expect(component.itemData.body).toBe('Test Body');
  });
});
