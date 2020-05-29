import { Component, OnInit } from '@angular/core';
import {WorkerDetailService} from "../../shared/worker-detail.service";
import {WorkerDetail} from "../../shared/worker-detail.model";

@Component({
  selector: 'app-worker-detail-list',
  templateUrl: './worker-detail-list.component.html',
  styles: []
})
export class WorkerDetailListComponent implements OnInit {

  constructor(public service: WorkerDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(pd:WorkerDetail){
    this.service.formData = Object.assign({},pd);
  }

}
