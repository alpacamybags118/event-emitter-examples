import Job from "./job";

const job = new Job(() => {
  console.log('doing work!');
},() => {
  console.log('starting work!')
}, () => {
  console.log('work done!')
});

job.DoJob();