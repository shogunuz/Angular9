import { Injectable } from '@angular/core';
import {WorkerHoliday} from "./Worker-holiday.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class WorkerHolidayService {
  formDataForHoliday: WorkerHoliday;
  readonly rootURLHoliday = 'https://localhost:44342/api';
  listForHoliday: WorkerHoliday[];
  constructor(private http:HttpClient) { }


  //For Holiday
  postWorkerHoliday(){
    return this.http.post(this.rootURLHoliday+'/WorkerHolidays',this.formDataForHoliday)
  }

  //не успел еще реализовать((
  putWorkerHoliday(){
    return this.http.put(this.rootURLHoliday+'/WorkerHolidays/'+this.formDataForHoliday.IdForH, this.formDataForHoliday)
  }

  refreshListOfHolidays(){
    this.http.get(this.rootURLHoliday + '/WorkerHolidays')
      .toPromise()
      .then(res => this.listForHoliday = res as WorkerHoliday[]);
  }


}
