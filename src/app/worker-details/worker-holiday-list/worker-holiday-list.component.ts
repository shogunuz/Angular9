import { Component, OnInit } from '@angular/core';
import {WorkerHolidayService} from "../../shared/worker-holiday.service";
import {WorkerDetail} from "../../shared/worker-detail.model";
import {WorkerHoliday} from "../../shared/worker-holiday.model";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-worker-holiday-list',
  templateUrl: './worker-holiday-list.component.html',
  styleUrls: ['./worker-holiday-list.component.css']
})
export class WorkerHolidayListComponent implements OnInit {

  constructor(public serviceHoliday:WorkerHolidayService,
              private dataService: DataService) { }

  totalRecords: string;
  page: number=1;

  ngOnInit(): void {
    this.serviceHoliday.refreshListOfHolidays();
  }
  get data():any{
    return this.dataService.sharedData;
  }
/*
  populateFormHoliday(data){

    this.pdh.PMId = this.data.PMId;
    this.pdh.FIO = this.data.FIO;
    this.pdh.Position = this.data.Position;
    this.pdh.DateOfHoliday = '';
    this.serviceHoliday.formDataForHoliday = Object.assign({},this.pdh);
  }
  */
}
