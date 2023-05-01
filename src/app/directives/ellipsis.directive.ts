import { Directive, ElementRef, AfterViewInit, Input } from "@angular/core";

@Directive({
  selector: "[appEllipsis]",
})
export class EllipsisDirective implements AfterViewInit {
  @Input() maxLength: number = 40;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const text = this.el.nativeElement.innerText;

    if (text.length > this.maxLength) {
      this.el.nativeElement.innerText = text.substring(0, this.maxLength) + "...";
    }
  }
}
