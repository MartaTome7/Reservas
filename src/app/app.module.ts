import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { GerirsalasComponent } from './gerirsalas/gerirsalas.component';
import { HttpSalasService } from './gerirsalas/httpsalas.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    SidenavComponent,
    GerirsalasComponent,
  ],
  bootstrap: [AppComponent],
  providers: [HttpSalasService],
})
export class AppModule {}
