import * as readline from "readline";

import Employee from "./src/classes/Employee.ts"
import SealedUtils from "./src/classes/SealedUtils.ts"

const Playground = (): void => {
  console.log(parseInt("2"))
}

const Actual = async (): void => {
  let flag = true;
  let count = 0
  while (flag){
    let data = await SealedUtils.readInput(SealedUtils.welcomeOptions);
    data = parseInt(data)
    switch(data){
      case 0:
        flag = false;
        console.log("thanks.")
        break;
      default:
        break;
    }
  }
}

async function Main():void{
  let choice = await SealedUtils.readInput("1. playground\n2. actual\n\n")
  choice = parseInt(choice)
  switch(choice){
    case 1:
      Playground();
      break;
    case 2:
      await Actual();
      console.log(`stepped over actual.`)
      break;
    default:
      console.log(`invalid choice. process end.`)
      break;
  }
}

Main();