import { ProxyListComponent } from './proxy-list/proxy-list.component';
import { ProxyComponent } from './proxy.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: ProxyComponent, children: [
      { path: 'list', component: ProxyListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProxyRoutingModule { }
