import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CallapiComponent } from './callapi/callapi.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { C0minComponent } from './c0min/c0min.component';
import { C1C5minComponent } from './c1-c5min/c1-c5min.component';
import { C6C15minComponent } from './c6-c15min/c6-c15min.component';
import { C16C30minComponent } from './c16-c30min/c16-c30min.component';
import { Morethan30minComponent } from './morethan30min/morethan30min.component';
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
        BrowserAnimationsModule,
        AppRoutingModule,
        MatTableModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatMenuModule,
        HighchartsChartModule
    ],
    providers: [provideHttpClient(withInterceptorsFromDi())],
    bootstrap: [AppComponent],
})
export class AppModule { }
