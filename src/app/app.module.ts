import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ScaleComponent } from './components/scale/scale.component';
import { AttacherComponent } from './components/attacher/attacher.component';
import { PackerComponent } from './components/packer/packer.component';
import { CloserComponent } from './components/closer/closer.component';

import { AlertsComponent } from './alerts/alerts.component';
import { NavigationComponent } from './nav/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ScaleComponent,
    AttacherComponent,
    PackerComponent,
    CloserComponent,
    AlertsComponent,
    NavigationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
