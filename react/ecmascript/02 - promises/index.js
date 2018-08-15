// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  return new Promise((resolve, reject) => {
    if(time < 3000) {
      resolve(time + 100);
    } else {
        let reason = new Error('This time is too much !');
        reject(reason); // reject
    }
  });
}

export async function asyncDelay(time) {
  return delay(time);
}
