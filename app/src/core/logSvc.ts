class LogSvc {
  logIt(msg: string) {
    for (let i = 1; i < 5; i+=1) {
      console.log(msg);
    }
  }
}

export default LogSvc; 