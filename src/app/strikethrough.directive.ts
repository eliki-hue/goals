import { Directive, ElementRef, HostListener } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private Elem:ElementRef) {}

  @HostListener('click') onClicks(){
    this.textDeco('None')
  }
  @HostListener('dblclick') onDoubleClicks(){
    this.textDeco('line-through')
  }
  
  private textDeco(Action:string){
    this.Elem.nativeElement.style.textDecoration=Action;
  }

}
