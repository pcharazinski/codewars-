function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a,b)=>a+b);
  }

 
  ////

  function arrayPlusArray(arr1, arr2) {
    let sumArr = 0;
    arr1 = arr1.concat(arr2);
    
    for(let i=0; i<arr1.length; i++) {
      sumArr += arr1[i];
    };
    
    return sumArr;
  }
