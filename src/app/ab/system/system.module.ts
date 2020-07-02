import { ProxyComponent } from './proxy/proxy.component';
import { AgentListComponent } from './agent/agent-list/agent-list.component';
import { AgentComponent } from './agent/agent.component';
import { ProxyModule } from './proxy/proxy.module';
import { AgentModule } from './agent/agent.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';

@NgModule({
  declarations: [
    SystemComponent,
  ],
  imports: [
    CommonModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
