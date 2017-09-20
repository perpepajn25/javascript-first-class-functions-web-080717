function receivesAFunction(callback) {
  callback()
};

function returnsANamedFunction() {
  return function someFunction() {
    console.log("bye")
  }
};

function returnsAnAnonymousFunction() {
  return function () {}
};
