import { OrdererModule } from './orderer/orderer.module';
import { PeerModule } from './peer/peer.module';
import { OrdererComponent } from './orderer/orderer.component';
import { PeerComponent } from './peer/peer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricRoutingModule } from './fabric-routing.module';
import { FabricComponent } from './fabric.component';
import { PeerListComponent } from './peer/peer-list/peer-list.component';


@NgModule({
  declarations: [FabricComponent],
  imports: [
    CommonModule,
    FabricRoutingModule
  ]
})
export class FabricModule { }
