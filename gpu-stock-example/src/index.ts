import GpuStore from "./gpuStore";

const gpuStore = new GpuStore();

gpuStore.on('stockAdded', (count) => {
  console.log(`${count} added to stock!`)
})

gpuStore.on('outOfStock', () => {
  console.log(`Out of stock!`)
})

gpuStore.AddStock(10);
gpuStore.RemoveStock(9);
gpuStore.RemoveStock(1);


