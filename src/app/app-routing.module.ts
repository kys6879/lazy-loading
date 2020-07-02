import { PeerComponent } from './ab/fabric/peer/peer.component';
import { AgentListComponent } from './ab/system/agent/agent-list/agent-list.component';
import { ProxyComponent } from './ab/system/proxy/proxy.component';
import { AgentComponent } from './ab/system/agent/agent.component';
import { FabricComponent } from './ab/fabric/fabric.component';
import { SystemComponent } from './ab/system/system.component';
import { AbComponent } from './ab/ab.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// const routes: Routes = [
//   { path: '', redirectTo: 'ab', pathMatch: 'full' },
// ];

const routes: Routes = [
  { path: '', redirectTo: 'ab', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
