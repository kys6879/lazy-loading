import { FabricComponent } from './fabric/fabric.component';
import { SystemComponent } from './system/system.component';
import { AbComponent } from './ab.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentComponent } from './system/agent/agent.component';
import { AgentListComponent } from './system/agent/agent-list/agent-list.component';
import { ProxyComponent } from './system/proxy/proxy.component';


const routes: Routes = [
  {
    path: 'ab', component: AbComponent, children: [
      {
        path: 'system', loadChildren: () => import('./system/system.module').then(m => m.SystemModule)
      },
      {
        path: 'fabric', loadChildren: () => import('./fabric/fabric.module').then(m => m.FabricModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbRoutingModule { }
