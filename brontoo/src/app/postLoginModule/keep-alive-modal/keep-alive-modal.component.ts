import { Idle } from '@ng-idle/core';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './keep-alive-modal.component.html',
  styles: [
    ` button {
        background-color: rgb(240, 102, 0);
        color: white;
        font-weight: bold;
      }
      span {
        color: rgb(0, 212, 212);
        font-weight: bold;
        font-size: 16px;
      }`
    ]
})
export class KeepAliveModal implements OnInit {
  seconds: string = '30';
  constructor(public idle: Idle){}
  ngOnInit(): void {
    this.idle.onTimeoutWarning.subscribe((countdown) => {
      this.seconds = countdown;
    });
  }
}
