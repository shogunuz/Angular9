import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {WorkerDetailService} from "../../shared/worker-detail.service";
import { NgForm } from '@angular/forms';
import {ChangeDetectorRef } from '@angular/core';
import {ToastrModule, ToastrService} from "ngx-toastr";
import {WorkerDetail} from "../../shared/worker-detail.model";

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
        Position:''
      }

     }

  onSubmit(form:NgForm){
    if(this.service.formData.PMId == 0)
    this.insertRecord(form);
    else{
      this.updateRecord(form) ;
    }
  }

  insertRecord(form:NgForm){
    this.service.postWorkerDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Worker has been registered');
        this.service.refreshList();
      },
      err =>{
        console.log(err)
      }
    )
  }

  updateRecord(form:NgForm){
    this.service.putWorkerDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Updated successfully', "Worker's details have been changed");
        this.service.refreshList()
      },
      err =>{
        console.log(err)
      }
    )
  }


}
