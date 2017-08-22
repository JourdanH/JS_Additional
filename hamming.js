(function(){

  function hamming(string1, string2){

    if (string1.length !== string2.length) {return console.log(0)};
      let newArray1 =string1.split('')
      let newArray2 =string2.split('')
      matchArray = []
    for (i=0; i<newArray1.length; i++) {
      if (newArray1[i] == newArray2[i]) {matchArray.push(i)}
    } console.log(matchArray.length)

  }







hamming("toast", "total");

})();
