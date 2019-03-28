import { Component, Input, ViewChild, TemplateRef, ViewContainerRef ,ViewEncapsulation, ElementRef} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem,DragRef } from '@angular/cdk/drag-drop';
import {MatExpansionPanel} from '@angular/material';

@Component({
  selector: 'hello',
  template: `
          <div #dvDragElement>
        This is inside a componenet.
         <div
    cdkDropList
    #todoList="cdkDropList"
    [cdkDropListData]="componenet_todo"
    class="example-list"
    (cdkDropListDropped)="drop($event)">
    <div class="example-box" *ngFor="let item of componenet_todo" cdkDrag>{{item}}</div>
  </div>
</div>

  `,
  styles: ['cdk-drag-drop-connected-sorting-example.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HelloComponent {
componenet_todo = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];
}
