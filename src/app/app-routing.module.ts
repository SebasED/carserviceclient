import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { LayoutComponent } from './layout/layout.component';
import { CarOwnerComponent } from './car-owner/car-owner.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { AddOwnerComponent } from './add-owner/add-owner.component';

const routes: Routes = [
  { path: '', redirectTo: '/layout', pathMatch: 'full' },
  { path: 'layout', component: LayoutComponent},
  { path: 'car-owner', component:CarOwnerComponent},
  { path: 'car-list', component: CarListComponent},
  { path: 'owner-list', component: OwnerListComponent},
  { path: 'car-add', component: CarEditComponent},
  { path: 'add-orner', component: AddOwnerComponent},
  { path: 'car-edit/:id', component: CarEditComponent},
  {path: '**', redirectTo: 'layout', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
