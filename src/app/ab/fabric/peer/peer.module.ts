import { PeerComponent } from './peer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeerRoutingModule } from './peer-routing.module';
import { PeerListComponent } from './peer-list/peer-list.component';

@NgModule({
  declarations: [PeerComponent, PeerListComponent],
  imports: [
    CommonModule,
    PeerRoutingModule
  ]
})
export class PeerModule { }
