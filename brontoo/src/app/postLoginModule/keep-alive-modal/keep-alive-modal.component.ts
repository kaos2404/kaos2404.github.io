import { Idle } from '@ng-idle/core';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './keep-alive-modal.component.html',
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
