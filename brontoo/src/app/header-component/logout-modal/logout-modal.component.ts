import { Component } from '@angular/core';

@Component({
  templateUrl: './logout-modal.component.html',
  styles: [
    ` button {
        background-color: rgba(240, 102, 0, 0.4);
        color: white;
        font-weight: bold;
      }
      button[cdkFocusInitial] {
        background-color: rgb(240, 102, 0);
      }`
    ]
})
export class LogoutModal {

}
