(function(){
  function weave(string, number){
    let weaveWord = string.split("");
    let modifier = number
      for (let i = modifier-1; i<string.length; i+= number){
        weaveWord[i]="x"
      }
    return console.log(weaveWord.join(""));
  };
  weave("hello goodbye",6);
})();
