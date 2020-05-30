import { Component, OnInit } from '@angular/core';
import {WorkerDetailService} from "../../shared/worker-detail.service";
import {WorkerHolidayService} from "../../shared/worker-holiday.service";
import {WorkerDetail} from "../../shared/worker-detail.model";
import {WorkerHolidayListComponent} from "../worker-holiday-list/worker-holiday-list.component";
import {DataService} from "../../data.service";
import {Data} from "@angular/router";
import {WorkerHoliday} from "../../shared/worker-holiday.model";

@Component({
  selector: 'app-worker-detail-list',
  templateUrl: './worker-detail-list.component.html',
  styles: []
})
export class WorkerDetailListComponent implements OnInit {

  totalRecords: string
  page: number=1
  pdh:WorkerHoliday;


  constructor(public service: WorkerDetailService,
              private serviceHoliday: WorkerHolidayService) { //,
  //
  }

  ngOnInit(): void {
    this.service.refreshList();
  }
   populateForm(pd:WorkerDetail){
     //this.service.formData = Object.assign({},pd);
     this.serviceHoliday.formDataForHoliday = Object.assign({},pd);
     }

}
