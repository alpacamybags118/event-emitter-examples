import GpuStore from "./gpuStore";

export default class Microcenter {
  constructor(private readonly gpuStore: GpuStore){
    this.gpuStore.on('outOfStock', () => {
      console.log('GPUs out of stock, ordering new stock!');
      // OrderStock();
    })
  }
}