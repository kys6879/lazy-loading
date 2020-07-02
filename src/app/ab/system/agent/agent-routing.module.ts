import { AgentListComponent } from './agent-list/agent-list.component';
import { AgentComponent } from './agent.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: AgentComponent, children: [
      { path: 'list', component: AgentListComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
