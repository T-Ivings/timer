const lineInput = () => {
  let args = process.argv.slice(2);
  let newArr = []

  for (let arg of args) {
    arg = parseInt(arg);
    if (Number.isInteger(arg)) {
      if (arg > 0){
        newArr.push(arg);
      }
    }  
  } return newArr;

}

const timer = (times) => {
  if (times === undefined){
    return false;
  }
  for (const time of times) {
      setTimeout(() => {
        process.stdout.write(".\n");
      }, time * 1000);
  }
}

timer(lineInput());