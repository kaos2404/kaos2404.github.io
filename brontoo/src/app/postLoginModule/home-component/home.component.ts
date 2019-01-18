import { KeepAliveModal } from '../keep-alive-modal/keep-alive-modal.component';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Idle, EventTargetInterruptSource } from '@ng-idle/core';
import {Keepalive} from '@ng-idle/keepalive';
import { MatDialog } from '@angular/material';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  newItem: string;
  ip: string = '';
  options: string[] = ['One', 'Two', 'Three'];
  constructor(public service: LocalStorageService, public httpClient: HttpClient, private idle: Idle, private keepalive: Keepalive,
    public dialog: MatDialog, private element: ElementRef){}
  ngOnInit(){
    this.idle.setIdle(30);
    this.idle.setTimeout(15);
    this.idle.setInterrupts([new EventTargetInterruptSource(this.element.nativeElement, "mousedown touchstart")]);
    var dialogRef=null;
    this.idle.onTimeout.subscribe(() => {
      dialogRef.close();
      this.service.logout();
    });
    this.idle.onIdleStart.subscribe(() => {
      dialogRef=this.dialog.open(KeepAliveModal);
      dialogRef.afterClosed().subscribe((data) => {
        this.idle.watch();
      });
    });

    this.idle.watch();
  }
  getMyIp(){
    this.httpClient.get('https://api.ipify.org', {responseType: 'text'}).subscribe((data) => {
        setTimeout(() => {
          this.ip = data;
          this.service.progressBar = false;
        }, 2000);
    });
  }

  addNewItem() {
    if(this.newItem !== null && this.newItem.length > 0){
      this.options.push(this.newItem);
      this.newItem = null;
    }
  }
}
