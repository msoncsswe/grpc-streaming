// import {Worker, isMainThread, parentPort, workerData} from 'node:worker_threads';


// // Define the gRPC request payload
// const requestPayload = {};


// const users = 4;
// const totalRequests = 100;

// // Function to spawn worker threads
// function spawnWorkerThreads() {
//   return new Promise((resolve) => {
//     const workerPromises = [];
//     for (let i = 0; i < users; i++) {
//       const workerPromise = new Promise((innerResolve) => {
//         const worker = new Worker('./client.ts');
//         worker.on('message', (message) => {
//           // Handle the response from the worker
//           console.log(message);
//         });
//         worker.on('error', (error) => {
//           // Handle any errors from the worker
//           console.error(error);
//         });
//         worker.on('exit', () => {
//           innerResolve();
//         });
//         worker.postMessage(requestPayload);
//       });
//       workerPromises.push(workerPromise);
//     }
//     Promise.all(workerPromises).then(resolve);
//   });
// }

// // Perform load testing
// async function performLoadTesting() {
//   const batches = Math.ceil(totalRequests / users);
//   for (let i = 0; i < batches; i++) {
//     await spawnWorkerThreads();
//   }
// }

// // Start the load testing
// performLoadTesting().catch((error) => {
//   console.error('Load testing failed:', error);
// });