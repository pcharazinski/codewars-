function findLongest(array) {
  
    function compareFunction(a, b) {
      // sprawdzamy jaką długość ma pierwsza porównywana wartość
      aLength = a.toString().length;
      
      // sprawdzamy jaką długość ma druga porównywana wartość
      bLength = b.toString().length;
      
      // sprawdzamy czy wartość druga jest większa, 
      // jesli tak to zwróć 1 (przesuń dany element na początek tablicy)
      if(bLength > aLength) {
        return 1;
      }
      // jeśli nie, to zróć -1 (nie rób nic z danym elementem)
      return -1;
    }
    
    // bezpiecznie jest zrobić kopie tablicy, ponieważ
    // funkcja sort pracuje na oryginale, zatem ją zedytuje,
    // nie jest to konieczne w tym zadaniu
    const arrayCopy = array;
    
    // funkcja sort iteruje przez tablice, za każdym razem podając 
    // dwa sąsiednie elementy do funkcji porównującej compareFunction
    arrayCopy.sort(compareFunction);
    
    // przypisujemy do zmiennej pierwszy element z przesortowanej tablicy
    const mostDigitsNumber = arrayCopy[0];
    
    return mostDigitsNumber;
  }
////////
function findLongest(array) {
    return array.sort((a, b) => b.toString().length > a.toString().length)[0]
  }