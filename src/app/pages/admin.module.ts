import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {HeaderComponent} from '../core-components/header/header.component';
import {FooterComponent} from '../core-components/footer/footer.component';
import {MainContainerComponent} from '../core-components/main-container/main-container.component';
import {SidebarComponent} from '../core-components/sidebar/sidebar.component';
import {DashbordComponent} from '../pages/dashbord/dashbord.component';
import { PostlistComponent } from './postlist/postlist.component';
import { AddpostComponent } from './addpost/addpost.component';
import { CommentsComponent } from './comments/comments.component';
import { PhotosComponent } from './photos/photos.component';
import { PostComponent } from './post/post.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainContainerComponent,
    SidebarComponent,
    DashbordComponent,
    PostlistComponent,
    AddpostComponent,
    CommentsComponent,
    PhotosComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    AdminRoutingModule,
    DataTablesModule
  ]
})
export class AdminModule { }
