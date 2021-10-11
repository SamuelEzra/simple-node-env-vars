
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const udacityProgram = process.env.UDACITY_PROGRAM;
async function main() {
  while(true) {
    console.log("The Udacity program I am doing is ${udacityProgram}");
    await sleep(5000);
  }
}

main();
