// export class LogSvc {
//   constructor(public msg: string) { }
// // logIt(msg: string) {
// //   for (let i = 1; i < 5; i+=1) {
// //     console.log(msg);
// //   }
// // }
// }

function logIt(msg: string) {
  console.log(msg);
}

export {logIt as default, logIt}; //can be imported as default or {logIt}