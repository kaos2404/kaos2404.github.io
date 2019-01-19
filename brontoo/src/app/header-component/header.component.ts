import { Idle } from '@ng-idle/core';
import { LogoutModal } from './logout-modal/logout-modal.component';
import { LocalStorageService } from './../shared/services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  dialogRef;
  constructor(public service: LocalStorageService, public dialog: MatDialog, private idle: Idle){}
  ngOnInit() {
    this.idle.onTimeout.subscribe(() => {
      this.dialogRef.close();
    });
  }
  logout(){
    this.dialogRef = this.dialog.open(LogoutModal, { disableClose: true });
    this.dialogRef.afterClosed().subscribe((data) => {
      if(data == true){
        this.service.logout();
      }
    });
  }
}
