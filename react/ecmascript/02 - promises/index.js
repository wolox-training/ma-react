// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {

  return new Promise((resolve) => {
    resolve(time + 100);
  });
}

export function asyncDelay() {

}
