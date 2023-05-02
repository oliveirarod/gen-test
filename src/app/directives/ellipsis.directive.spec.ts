import { Component, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { EllipsisDirective } from "./ellipsis.directive";

@Component({
  template: `
    <div [appEllipsis]="maxLength">
      {{ text }}
    </div>
  `,
})
class TestComponent {
  maxLength: number = 30;
  text: string = "";
}

describe("EllipsisDirective", () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EllipsisDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.directive(EllipsisDirective));
  });

  it("should truncate text when length is greater than max length", () => {
    component.text = "This is a long text that needs to be truncated.";
    fixture.detectChanges();

    const truncatedText =
      component.text.substring(0, component.maxLength) + "...";

    expect(element.nativeElement.innerText).toBe(truncatedText);
  });

  it("should not truncate text when length is less than max length", () => {
    component.text = "This is a short text.";
    fixture.detectChanges();

    expect(element.nativeElement.innerText).toBe(component.text);
  });
});
