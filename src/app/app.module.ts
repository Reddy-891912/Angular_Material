import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatBadgeModule} from '@angular/material/badge';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BadgeComponent } from './badge/badge.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ToggleComponent } from './toggle/toggle.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { BottomsheetComponent } from './bottomsheet/bottomsheet.component';
import { DummyDisplayComponent } from './dummy-display/dummy-display.component';
import { ButtonComponent } from './button/button.component';
import {MatDividerModule} from '@angular/material/divider';
import { BtntgleComponent } from './btntgle/btntgle.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import { CheckbxComponent } from './checkbx/checkbx.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ChipsComponent } from './chips/chips.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatCommonModule} from '@angular/material/core';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DummyDailogComponent } from './dummy-dailog/dummy-dailog.component';
import { DeviderComponent } from './devider/devider.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsfeildComponent } from './formsfeild/formsfeild.component';
import {MatSelectModule} from '@angular/material/select';
import { GridListComponent } from './grid-list/grid-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import {MatInputModule} from '@angular/material/input';
import { ListComponent } from './list/list.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BadgeComponent,
    ToggleComponent,
    BottomsheetComponent,
    DummyDisplayComponent,
    ButtonComponent,
    BtntgleComponent,
    CardComponent,
    CheckbxComponent,
    ChipsComponent,
    DialogComponent,
    DummyDailogComponent,
    DeviderComponent,
    ExpansionPanelComponent,
    FormsfeildComponent,
    GridListComponent,
    IconComponent,
    InputComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCommonModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    MatInputModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
