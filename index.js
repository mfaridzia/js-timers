// Delaying the executing of function
setTimeout(() => {
  console.log('Hallo setelah 2 detik');
}, 2 * 1000);

// passing arguments
// setTimeout((who) => {
//   console.log(who + ' keren!');
// }, 3 * 1000, 'nodejs');

// repeating the execute of function using setInterval
// setInterval(() => {
//   console.log('hello setiap 3 detik');
// }, 3000);

// canceling timers using clearTimeout and clearInterval
// const timerId = setTimeout(() => {
//   console.log('stop!');
// }, 0);
// clearTimeout(timerId);

// Challenge 1
// const challenge = (delay) => {
//   console.log('Hallo setelah ' + delay + ' detik');
// };
// setTimeout(challenge, 4 * 1000, 4);
// setTimeout(challenge, 6 * 1000, 6);

// Challenge 2
// let counter = 0;
// const intervalId = setInterval(() => {
//   console.log('Hello world!');
//   counter += 1;

//   if(counter === 5) {
//     console.log('done!');
//     clearInterval(intervalId);
//   }
// }, 1000);

// Challenge 3, of course you can use a counter to check the increase of each number
// const greeting = delay => {
//   setTimeout(() => {
//     console.log('Hello World ' + delay);
//     greeting(delay + 1); // use recursion for value added +1
//   }, delay * 1000);
// }
// greeting(1);

// Challenge 4
/*let lastIntervalId, counter = 5;
const greeting2 = delay => {
  if(counter === 5) {
    clearInterval(lastIntervalId);
    lastIntervalId = setInterval(() => {
      console.log('Hello world ' + delay);
      greeting2(delay + 100);
    }, delay);
    counter = 0;
  }
  counter += 1;
};
greeting2(100);
*/
