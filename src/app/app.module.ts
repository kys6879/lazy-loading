import { PeerComponent } from './ab/fabric/peer/peer.component';
import { AgentListComponent } from './ab/system/agent/agent-list/agent-list.component';
import { ProxyComponent } from './ab/system/proxy/proxy.component';
import { AgentComponent } from './ab/system/agent/agent.component';
import { FabricComponent } from './ab/fabric/fabric.component';
import { SystemComponent } from './ab/system/system.component';
import { AbComponent } from './ab/ab.component';
import { AbModule } from './ab/ab.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // AbComponent,
    // SystemComponent,
    // FabricComponent,
    // AgentComponent,
    // ProxyComponent,
    // AgentListComponent,
    // PeerComponent
  ],
  imports: [
    BrowserModule,
    AbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
