import * as readline from "readline";

class SealedUtils{

  static readonly welcomeOptions: string = 
`Choose what to do:
1. create new employee.
0. exit
`

  public static readInput(str: string){
    console.log(`readInput ran2`)
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    return new Promise((resolve, reject)=>{
      rl.question(str, (data)=>{
        resolve(data);
        rl.close();
      })
    })
  } 
  
  private constuctor(){}
}

export default SealedUtils;