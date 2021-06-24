import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainContainerComponent} from './core-components/main-container/main-container.component'
const routes: Routes = [
  {
    path: 'admin',
    component: MainContainerComponent,
    loadChildren: () => import('./pages/admin.module').then(m => m.AdminModule)
  },
  {
    path:'',
    redirectTo:'admin',
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
