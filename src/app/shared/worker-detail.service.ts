import { Injectable } from '@angular/core';
import {WorkerDetail} from "./worker-detail.model";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class WorkerDetailService {
  formData:WorkerDetail;
  readonly rootURL = 'https://localhost:44342/api';
  constructor(private http:HttpClient) { }

  postWorkerDetail(formData:WorkerDetail){
    return this.http.post(this.rootURL+'/WorkerDetail',formData)
  }
}
