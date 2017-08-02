import { MdDialog, MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
 selector: 'loading-dialog',
 template: `
            <div md-dialog-content>
              <div class="flex-container"
               fxLayout="column"
               fxLayout.xs="column"
               fxLayoutAlign="center center"
               fxLayoutAlign.xs="start">
                  <img src="/assets/images/pie-loader.svg">
               </div>
            </div>
            `
})
export class LoadingDialog {
 constructor(public dialogRef: MdDialogRef<any>) {}
}
