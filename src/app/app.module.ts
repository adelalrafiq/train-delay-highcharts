import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CallapiComponent } from './callapi/callapi.component';
import { HttpClientModule  } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { C0minComponent } from './c0min/c0min.component';
import { C1C5minComponent } from './c1-c5min/c1-c5min.component';
import { C6C15minComponent } from './c6-c15min/c6-c15min.component';
import { C16C30minComponent } from './c16-c30min/c16-c30min.component';
import { Morethan30minComponent } from './morethan30min/morethan30min.component';
import { MatMenuModule} from '@angular/material/menu';
import { NavbarComponent } from './navbar/navbar.component';
import { AllComponent } from './all/all.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    CallapiComponent,
    C0minComponent,
    C1C5minComponent,
    C6C15minComponent,
    C16C30minComponent,
    Morethan30minComponent,
    NavbarComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatButtonToggleModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
