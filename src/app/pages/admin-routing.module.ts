import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { PhotosComponent } from './photos/photos.component';
import { PostComponent } from './post/post.component';
import { PostlistComponent } from './postlist/postlist.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashbordComponent,
  },
  {
    path:'post',
    component:PostComponent,
    children:[
      {
        path:'list',
        component:PostlistComponent,
      }
    ]
  },
  {
    path:'comments',
    component:CommentsComponent,
  },
  {
    path:'photos',
    component:PhotosComponent,
  },
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
