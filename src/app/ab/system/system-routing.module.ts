import { AgentComponent } from './agent/agent.component';
import { SystemComponent } from './system.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentListComponent } from './agent/agent-list/agent-list.component';
import { ProxyComponent } from './proxy/proxy.component';


const routes: Routes = [
  {
    path: '', component: SystemComponent, children: [
      // { path: 'proxy', component: ProxyComponent },
      { path: 'agent', loadChildren: () => import('./agent/agent.module').then(m => m.AgentModule) },
      { path: 'proxy', loadChildren: () => import('./proxy/proxy.module').then(m => m.ProxyModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
