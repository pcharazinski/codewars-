var polishLetters = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z",
};

function correctPolishLetters (string) {
  return string.split('').map((c) => polishLetters[c] || c).join("");
}

///

function correctPolishLetters (string) {
    return string.replace(/ą/g,'a')
    .replace(/ć/g,'c')
    .replace(/ę/g,'e')
    .replace(/ł/g,'l')
    .replace(/ń/g,'n')
    .replace(/ó/g,'o')
    .replace(/ś/g,'s')
   .replace(/ź/g,'z')
   .replace(/ż/g,'z');
  }