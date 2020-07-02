import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProxyRoutingModule } from './proxy-routing.module';
import { ProxyComponent } from './proxy.component';
import { ProxyListComponent } from './proxy-list/proxy-list.component';


@NgModule({
  declarations: [ProxyComponent, ProxyListComponent],
  imports: [
    CommonModule,
    ProxyRoutingModule
  ]
})
export class ProxyModule { }
