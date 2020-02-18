import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { TableComponent } from '../components/table/table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    NavbarComponent,
    DashboardComponent,
    TableComponent
  ]
})
export class HomePageModule {}
