import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { ChildaComponent } from '../child-a.component';
import { MyCustomDirective } from '../../custom-directives/hover-directive';
import { ChildbComponent } from '../child-b.component';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, AfterViewInit {
  @ViewChild(ChildaComponent)childa;
  @ViewChild(MyCustomDirective)hoverDirective;
  @ViewChild('fName')private elefName: ElementRef;
  @ViewChild('lName')private elelName: ElementRef;

  //@ViewChildren

  @ViewChildren(ChildbComponent)private childb: QueryList<ChildbComponent>;
  private childArray: Array<ChildbComponent>;

  private childbIndex: number =0;
  private msgArray: Array<string> = ['message for child 1','message for child 2', 'message for child 3', 'message for child 4'];
  title = 'view Child and view Children Demo';
  public selectorColor: string;
  constructor() { }

  ngOnInit() {
  }
  sendMsg():void {
    this.childa.msgTitle = 'updated msg tiltle from child component';

    this.childa.msg = 'updated msg from child component';
    this.hoverDirective.customHover = this.selectorColor;
    console.log(this.childa.msg);
  }

  sendMsgToChildb(): void{
    this.childArray[this.childbIndex].msgTitle= 'This is parentb msgTitle ';
    this.childArray[this.childbIndex].msg= this.msgArray[this.childbIndex];
    
  }

  ngAfterViewInit():void {
    this.elefName.nativeElement.style.backgroundColor= 'green';
    this.elefName.nativeElement.style.color= 'yellow';
    this.elelName.nativeElement.style.backgroundColor= 'silver';
    this.elelName.nativeElement.style.color= 'red';

   this.childArray = this.childb.toArray()
  }


}
