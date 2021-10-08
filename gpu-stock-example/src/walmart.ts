import GpuStore from "./gpuStore";

export default class Walmart {
  constructor(private readonly gpuStore: GpuStore){
    this.gpuStore.on('outOfStock', () => {
      console.log('GPUs out of stock. Thanks for shopping at Walmart!');
    })
  }
}