var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("operation completed!!")
  },5000)
});

var promise2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("another operation completed!!")
  },3000)
});

var allPromise = Promise.all([promise1, promise2]);
var racePromise = Promise.race([promise1, promise2]);

export { promise1, promise2, allPromise, racePromise}