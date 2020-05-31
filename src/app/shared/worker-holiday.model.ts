import {WorkerDetail} from "./worker-detail.model";
import DateTimeFormat = Intl.DateTimeFormat;

export class WorkerHoliday extends WorkerDetail{
  DateStart?: Date;
  DateEnd?: Date;
  IdForH?: number;
}
