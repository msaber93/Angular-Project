import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges {
  @Input('lightBox') highLightColor: string = 'yellow';
  @Input() defaultColor: string = 'darkblue';

  constructor(private eleRef: ElementRef) {
    // this.eleRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }
  ngOnChanges(): void {
    this.eleRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }

  @HostListener ('mouseover') mouseOn() {
    this.eleRef.nativeElement.style.border = `2px solid ${this.highLightColor}`;
  }

  @HostListener ('mouseout') mouseOut () {
    this.eleRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }

}
