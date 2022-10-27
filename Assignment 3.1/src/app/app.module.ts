import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntStrDateComponent } from './int-str-date/int-str-date.component';
import { ArrayInListComponent } from './array-in-list/array-in-list.component';
import { ArrayInComboComponent } from './array-in-combo/array-in-combo.component';
import { TextBoxAreaComponent } from './text-box-area/text-box-area.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';

import {FormsModule} from '@angular/forms';

const appRoutes = [
  {path: '*', component: AppRoutingModule},
  {path: 'int-str-date', component: IntStrDateComponent},
  {path: 'array-in-list', component: ArrayInListComponent},
  {path: 'array-in-combo', component: ArrayInComboComponent},
  {path: 'text-box-area', component: TextBoxAreaComponent},
  {path: 'personal-details', component: PersonalDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    IntStrDateComponent,
    ArrayInListComponent,
    ArrayInComboComponent,
    TextBoxAreaComponent,
    PersonalDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
