import GpuStore from "./gpuStore";
import Microcenter from "./microcenter";
import Walmart from "./walmart";

const gpuStore = new GpuStore();
const walmart = new Walmart(gpuStore);
const microcenter = new Microcenter(gpuStore);


gpuStore.on('stockAdded', (count) => {
  console.log(`${count} added to stock!`)
})

gpuStore.on('outOfStock', () => {
  console.log(`Out of stock!`)
})

gpuStore.AddStock(10);
gpuStore.RemoveStock(9);
gpuStore.RemoveStock(1);


