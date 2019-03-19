
/([0-9]).*?\1/

function nextHappyYear(year){
    do year+=1
    while ((/([0-9]).*?\1/).test(year));
    return year
    }

    ///

    function nextHappyYear(year){
        do {
          year++;
          var x = year.toString();
          } while (x[0] == x[1] ||
                x[1] == x[2] ||
                x[2] == x[3] ||
                x[1] == x[3] ||
                x[2] == x[0] ||
                x[3] == x[0])
              
        return year;
      }