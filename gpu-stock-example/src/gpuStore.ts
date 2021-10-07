import EventEmitter from "events";

export default class GpuStore extends EventEmitter {
  private countInStock: number;

  constructor() {
    super()
    this.countInStock = 0;
  }

  public AddStock(count: number){
    this.countInStock += count;
    this.emit('stockAdded', count)
  }

  public RemoveStock(count: number) {
    if(count > this.countInStock) {
      throw Error('Count removed greater than current stock!');
    }

    this.countInStock -= count;

    if(this.countInStock == 0) {
      this.emit('outOfStock')
    }
  }
}