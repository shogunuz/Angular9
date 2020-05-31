import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {WorkerHolidayService} from "../../shared/worker-holiday.service";

@Component({
  selector: 'app-worker-holiday',
  templateUrl: './worker-holiday.component.html',
  styleUrls: ['./worker-holiday.component.css']
})
export class WorkerHolidayComponent implements OnInit {
   minDateStart: Date;
   maxDateStart: Date;
   minDateEnd: Date;
   maxDateEnd: Date;
   Datess: Date;

  constructor(public serviceHoliday:WorkerHolidayService,
              private toaster: ToastrService)
    {
      this.minDateStart = new Date();
      this.minDateEnd = new Date();
      this.maxDateStart = new Date();
      this.maxDateEnd = new Date();
      this.minDateStart.setDate(this.minDateStart.getDate() + 1);
      this.maxDateStart.setDate(this.maxDateStart.getDate() + 300);
      this.minDateEnd.setDate(this.minDateEnd.getDate() + 2);
      this.maxDateEnd.setDate(this.maxDateEnd.getDate() + 365);
    }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(formHoliday?: NgForm)
  {
    if(formHoliday!= null)
      formHoliday.resetForm();
    this.serviceHoliday.formDataForHoliday = {
      PMId:0,
      IdForH:0,
      FIO:'',
      Position:'',
      DateStart:null,
      DateEnd:null
    }

  }
  onSubmitHoliday(formHoliday:NgForm)
    {
        this.serviceHoliday.formDataForHoliday.IdForH = 0;
        console.log((this.serviceHoliday.formDataForHoliday.DateStart).toString());
        console.log((this.serviceHoliday.formDataForHoliday.DateEnd).toString());
        console.log((this.serviceHoliday.formDataForHoliday.DateEnd));
       // this.serviceHoliday.formDataForHoliday.Date = (this.serviceHoliday.formDataForHoliday.Date).toString();
        this.insertRecord(formHoliday);
    }
  insertRecord(formHoliday:NgForm){
    this.serviceHoliday.postWorkerHoliday().subscribe(
      res => {
        this.resetForm(formHoliday);
        this.toaster.success('Submitted successfully', 'Holiday has been registered');
        this.serviceHoliday.refreshListOfHolidays();
      },
      err =>{
        console.log(err)
      }
    )
  }
}
