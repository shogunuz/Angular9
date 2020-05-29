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

  constructor(public serviceHoliday:WorkerHolidayService,
              private toaster: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(formHoliday?: NgForm)
  {
    if(formHoliday!= null)
      formHoliday.resetForm();
    this.serviceHoliday.formDataForHoliday = {
      PMId:0,
      FIO:'',
      Position:'',
      Date:''
    }

  }
  onSubmitHoliday(formHoliday:NgForm){
    if(this.serviceHoliday.formDataForHoliday.PMId == 0)
       console.log("You haven't choosen user yet!");
    else{
      this.insertRecord(formHoliday);
      console.log("This is form:\n"+formHoliday)
    }
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
