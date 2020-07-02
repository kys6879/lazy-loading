import { OrdererComponent } from './orderer.component';
import { OrdererListComponent } from './orderer-list/orderer-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: OrdererComponent, children: [
      { path: 'list', component: OrdererListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdererRoutingModule { }
