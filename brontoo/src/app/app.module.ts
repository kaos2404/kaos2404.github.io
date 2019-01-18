import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoutModal } from './header-component/logout-modal/logout-modal.component';
import { CommonImportsModule } from './common-imports.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header-component/header.component';
import { PreLoginModule } from './preLoginModule/pre-login.module';
import { BrowserModule } from '@angular/platform-browser';
import { LocalStorageService } from './shared/services/local-storage.service';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoutModal
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PreLoginModule,
    CommonImportsModule,
    NgIdleKeepaliveModule.forRoot(),
    FormsModule
  ],
  providers: [
    LocalStorageService
  ],
  entryComponents: [ LogoutModal ],
  bootstrap: [AppComponent]
})
export class AppModule { }
