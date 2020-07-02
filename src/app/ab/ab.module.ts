import { ProxyComponent } from './system/proxy/proxy.component';
import { AgentListComponent } from './system/agent/agent-list/agent-list.component';
import { AgentComponent } from './system/agent/agent.component';
import { FabricModule } from './fabric/fabric.module';
import { SystemModule } from './system/system.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbRoutingModule } from './ab-routing.module';
import { AbComponent } from './ab.component';
import { SystemComponent } from './system/system.component';
import { FabricComponent } from './fabric/fabric.component';


@NgModule({
  declarations: [
    AbComponent,
    // SystemComponent,
    // AgentComponent,
    // AgentListComponent,
    //  ProxyComponent
  ],
  imports: [
    CommonModule,
    AbRoutingModule
  ]
})
export class AbModule { }
