import { Component, Input, ViewChild, TemplateRef, ViewContainerRef ,ViewEncapsulation, ElementRef} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem,DragRef } from '@angular/cdk/drag-drop';
import {MatExpansionPanel} from '@angular/material';

@Component({
  selector: 'hello',
  template: `
          <div #dvDragElement>
        This is inside a componenet.
        </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class HelloComponent {

}
