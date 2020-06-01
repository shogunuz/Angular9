import {Component, OnInit, ViewChild} from '@angular/core';
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
  keynumber: number=0;
  constructor(public serviceHoliday:WorkerHolidayService,
              private toaster: ToastrService)
    {
      if(this.keynumber==0){
        this.minDateStart = new Date();
        this.minDateEnd = new Date();
        this.maxDateStart = new Date();
        this.maxDateEnd = new Date();
        this.minDateStart.setDate(this.minDateStart.getDate() + 1);
        this.maxDateStart.setDate(this.maxDateStart.getDate() + 300);
        this.minDateEnd.setDate(this.minDateEnd.getDate() + 3);
        this.maxDateEnd.setDate(this.maxDateEnd.getDate() + 365);
        this.keynumber = 1;
      }
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
        this.toaster.success('Успешно!', 'Работник отправится на отпуск!');
        this.serviceHoliday.refreshListOfHolidays();
      },
      err =>{
        this.toaster.error('Возможно, Вы пытаетесь отправить в отпуск уже отправленного сотрудника, либо выше определенного лимита! ', 'Произошла ошибка!');
        this.serviceHoliday.refreshListOfHolidays();
      }
    )
  }
  gettingMinDate(){
    //if(this.serviceHoliday.formDataForHoliday.DateStart != null)
      this.minDateEnd = new Date(this.serviceHoliday.formDataForHoliday.DateStart);
      this.minDateEnd.setDate(this.minDateEnd.getDate() + 1);
  }
  //@ViewChild('DateEnd', {})

  cleaningEndDate(DateEnd){
    this.serviceHoliday.formDataForHoliday.DateEnd = null;
    //this.serviceHoliday.formDataForHoliday
    DateEnd.value = null;
  }
}
