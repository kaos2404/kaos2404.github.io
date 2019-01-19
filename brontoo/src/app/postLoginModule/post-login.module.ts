import { KeepAliveModal } from './keep-alive-modal/keep-alive-modal.component';
import { CommonImportsModule } from '../common-imports.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component/home.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }
]

@NgModule({
  declarations:[
    HomeComponent,
    KeepAliveModal
  ],
  entryComponents: [ KeepAliveModal ],
  imports: [
    RouterModule.forChild(appRoutes),
    CommonImportsModule,
    FormsModule
  ]
})

export class PostLoginModule {}
