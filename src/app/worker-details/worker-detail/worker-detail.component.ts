import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {WorkerDetailService} from "../../shared/worker-detail.service";
import { NgForm } from '@angular/forms';
import {ChangeDetectorRef } from '@angular/core';
import {ToastrModule, ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.component.html',
  styles: []
})
export class WorkerDetailComponent implements OnInit  {

  constructor(public service:WorkerDetailService,
              private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.resetForm();
  }

    resetForm(form?: NgForm)
    {
       if(form!= null)
        form.resetForm();
       this.service.formData = {
        PMId:0,
        FIO:'',
        Position:'',
        DateOfStartHoliday:'',
        DateOfEndHoliday:''
      }

     }

  onSubmit(form:NgForm){
    this.service.postWorkerDetail(form.value).subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Worker has been registered');
        },
        err =>{
        console.log(err)
        }
    )
  }

}
