function highAndLow(numbers){
    let x;
    x = numbers.split(' ');

  return `${Math.max(...x)} ${Math.min(...x)}`;

  }

  /////

  function highAndLow(numbers){
    var arr = numbers.split(' ').sort(function(a, b) { return a - b });
    return arr[arr.length -1] + ' ' + arr[0];
  }