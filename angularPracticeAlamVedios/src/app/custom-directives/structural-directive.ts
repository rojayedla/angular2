import { Directive, ElementRef, HostListener, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[hideThisElement]'
})
export class MyStructuralDirective {
  
  // @Input() mouseOutColor: string;
    constructor(private tempRef: TemplateRef<any>, 
    private vieContainer: ViewContainerRef) {
       
    }
    @Input() set hideThisElement(isHidden: boolean) { 
        if(!isHidden) {
            this.vieContainer.createEmbeddedView(this.tempRef);
        }else if(isHidden) {
            this.vieContainer.clear();
        }
       }



}
