import { KeepAliveModal } from '../keep-alive-modal/keep-alive-modal.component';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Idle, EventTargetInterruptSource } from '@ng-idle/core';
import {Keepalive} from '@ng-idle/keepalive';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  newItem: string = '';
  filterItem: string = '';
  ip: string = '';
  constructor(public snackBar: MatSnackBar, public service: LocalStorageService, public httpClient: HttpClient, private idle: Idle, private keepalive: Keepalive,
    public dialog: MatDialog, private element: ElementRef){}
  ngOnInit(){
    this.idle.setIdle(this.service.idleTime);
    this.idle.setTimeout(this.service.timeoutTime);
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
    },
    (error) => {
      setTimeout(() => {
        this.service.progressBar = false;
        this.ip = '';
        this.snackBar.open('Snag! There was some error', '', { panelClass: `snack-bar-error`, duration: 3000});
      }, 2000);
    });
  }

  addNewItem() {
    if(this.newItem !== null && this.newItem.length > 0){
      if(this.newItem === 'No data found.'){
        this.newItem = 'No data found'
      }
      this.service.options.push(this.newItem);
      this.newItem = null;
    }
  }

  ngOnDestroy(): void {
    this.idle.stop();
  }
}
