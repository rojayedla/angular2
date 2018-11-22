import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[customHover]'
})
export class MyCustomDirective {
   @Input() customHover: string;
  // @Input() mouseOutColor: string;
    constructor(private el: ElementRef) {
        el.nativeElement.style.backgroundColor="red";
    }

    @HostListener('mouseenter')onMouseEnter() {
        this.hiliteColor(this.customHover);
    }

    @HostListener('mouseleave')onmouseleave() {
        this.hiliteColor('green');
    } 

    public hiliteColor(color) {
        this. el.nativeElement.style.backgroundColor = color;
    }


}
