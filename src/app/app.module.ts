import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StillsComponent } from './stills/stills.component';
import { MotionComponent } from './motion/motion.component';
import { ContactComponent } from './contact/contact.component';
import { CloseupComponent } from './closeup/closeup.component';
import { RouterModule, Routes } from '@angular/router';
import { SelectService } from './select.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'stills', component: StillsComponent },
  { path: 'motion', component: MotionComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'closeup', component: CloseupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StillsComponent,
    MotionComponent,
    ContactComponent,
    CloseupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    SelectService
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
