import { OrdererComponent } from './orderer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdererRoutingModule } from './orderer-routing.module';
import { OrdererListComponent } from './orderer-list/orderer-list.component';


@NgModule({
  declarations: [OrdererComponent, OrdererListComponent],
  imports: [
    CommonModule,
    OrdererRoutingModule
  ]
})
export class OrdererModule { }
