import { LogoutModal } from './logout-modal/logout-modal.component';
import { LocalStorageService } from './../shared/services/local-storage.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  constructor(public service: LocalStorageService, public dialog: MatDialog){}
  logout(){
    const dialogRef = this.dialog.open(LogoutModal);
    dialogRef.afterClosed().subscribe((data) => {
      if(data == true){
        this.service.logout();
      }
    });
  }
}
