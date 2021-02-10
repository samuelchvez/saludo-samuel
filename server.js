function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('QUE BUENO QUE ESTO YA ESTA INTEGRADO A TRAVIS!');
    await sleep(1000);
  }
}

main();
