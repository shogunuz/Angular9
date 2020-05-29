import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClient, HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from "ngx-toastr";
import {NgxPaginationModule} from "ngx-pagination";

import { AppComponent } from './app.component';
import { WorkerDetailsComponent } from './worker-details/worker-details.component';
import { WorkerDetailComponent } from './worker-details/worker-detail/worker-detail.component';
import { WorkerDetailListComponent } from './worker-details/worker-detail-list/worker-detail-list.component';
import {WorkerDetailService} from "./shared/worker-detail.service";
import {FormsModule} from "@angular/forms";
import { WorkerHolidayListComponent } from './worker-details/worker-holiday-list/worker-holiday-list.component';
import { WorkerHolidayComponent } from "./worker-details/worker-holiday/worker-holiday.component";

@NgModule({
  declarations: [
    AppComponent,
    WorkerDetailsComponent,
    WorkerDetailComponent,
    WorkerDetailListComponent,
    WorkerHolidayComponent,
    WorkerHolidayListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ToastrModule.forRoot()
  ],
  providers: [WorkerDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
