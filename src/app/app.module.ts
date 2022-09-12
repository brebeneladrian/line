import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScaleComponent } from './scale.component';
import { AttacherComponent } from './attacher.component';
import { PackerComponent } from './packer.component';
import { CloserComponent } from './closer.component';

@NgModule({
  declarations: [
    AppComponent,
    ScaleComponent,
    AttacherComponent,
    PackerComponent,
    CloserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
