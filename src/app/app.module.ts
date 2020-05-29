import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClient, HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from "ngx-toastr";


import { AppComponent } from './app.component';
import { WorkerDetailsComponent } from './worker-details/worker-details.component';
import { WorkerDetailComponent } from './worker-details/worker-detail/worker-detail.component';
import { WorkerDetailListComponent } from './worker-details/worker-detail-list/worker-detail-list.component';
import {WorkerDetailService} from "./shared/worker-detail.service";
import {FormsModule} from "@angular/forms";
import { WorkDetailNewlistComponent } from './worker-details/work-detail-newlist/work-detail-newlist.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkerDetailsComponent,
    WorkerDetailComponent,
    WorkerDetailListComponent,
    WorkDetailNewlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [WorkerDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
