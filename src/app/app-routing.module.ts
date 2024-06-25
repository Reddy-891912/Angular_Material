import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BadgeComponent } from './badge/badge.component';
import { ToggleComponent } from './toggle/toggle.component';
import { BottomsheetComponent } from './bottomsheet/bottomsheet.component';
import { ButtonComponent } from './button/button.component';
import { BtntgleComponent } from './btntgle/btntgle.component';
import { CardComponent } from './card/card.component';
import { CheckbxComponent } from './checkbx/checkbx.component';
import { ChipsComponent } from './chips/chips.component';
import { DialogComponent } from './dialog/dialog.component';
import { DeviderComponent } from './devider/devider.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { FormsfeildComponent } from './formsfeild/formsfeild.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {path:'toggle', component:ToggleComponent},
      {path:'badge', component:BadgeComponent},
      {path:'bottomSheet',component:BottomsheetComponent},
      {path:'button',component:ButtonComponent},
      {path:'btntgle',component:BtntgleComponent},
      {path:'card',component:CardComponent},
      {path:'checkBox', component:CheckbxComponent},
      {path:'chips', component:ChipsComponent},
      {path:'dailog', component:DialogComponent},
      {path:'devider', component:DeviderComponent},
      {path:'expansionPanel', component:ExpansionPanelComponent},
      {path:'formsFeild', component:FormsfeildComponent},
      {path:'gridList', component:GridListComponent},
      {path:'icon', component:IconComponent},
      {path:'input', component:InputComponent},
      {path:'list', component:ListComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
