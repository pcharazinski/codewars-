function openOrSenior(data){
    return data.map(([age, handicap]) => {
      return (age >= 55 && handicap > 7) ? 'Senior' : 'Open';
    });
  }