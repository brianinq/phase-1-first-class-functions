function receivesAFunction(cb) {
  cb();
}
function returnsANamedFunction() {
  function named() {
    return;
  }
  return named;
}
function returnsAnAnonymousFunction() {
  return function () {
    return;
  };
}
