import { Component } from '@angular/core';

@Component({
  templateUrl: './logout-modal.component.html',
  styles: [
    ` button:not([cdkFocusInitial]) {
        background-color: rgba(240, 102, 0, 0.4) !important;
      }`
    ]
})
export class LogoutModal {

}
