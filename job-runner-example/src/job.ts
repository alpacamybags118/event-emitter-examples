import { EventEmitter } from "stream";

export default class Job extends EventEmitter {
  private onStart: any;
  private onEnd: any;

  constructor(job: any, onStart: any, onEnd: any){
    super();

    this.once('start', onStart);
    this.once('work', job);
    this.once('end', onEnd);
  }

  public DoJob(): void {
    this.emit('start');
    this.emit('work');
    this.emit('end');
  }
}