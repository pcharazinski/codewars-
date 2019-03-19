function stringMerge(string1, string2, letter){
    let one = string1.indexOf(letter);
    let two = string2.indexOf(letter);
    let three = string1.slice(0, one) + string2.slice(two);
    return three;
  }
  
  stringMerge("hello", "world", "l");