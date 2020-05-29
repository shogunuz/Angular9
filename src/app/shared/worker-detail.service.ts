import { Injectable } from '@angular/core';
import {WorkerDetail} from "./worker-detail.model";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class WorkerDetailService {
  formData:WorkerDetail;
  readonly rootURL = 'https://localhost:44342/api';
  list: WorkerDetail[];
  constructor(private http:HttpClient) { }
 // workerList: AngularF
  postWorkerDetail(){
    return this.http.post(this.rootURL+'/WorkerDetail',this.formData)
  }
  putWorkerDetail(){
    return this.http.put(this.rootURL+'/WorkerDetail/'+this.formData.PMId, this.formData)
  }

  refreshList(){
    this.http.get(this.rootURL + '/WorkerDetail')
      .toPromise()
      .then(res => this.list = res as WorkerDetail[]);
  }

  getWorkers(){
   // this.
  }
}
