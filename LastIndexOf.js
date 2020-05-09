function lastIndexOf(array, num) {
  for (var i = array.length - 1; i >= 0; i--) {
    if (num === array[i]) {
      return i;
    }
  }
  return -1;
}
