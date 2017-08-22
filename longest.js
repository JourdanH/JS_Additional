(function(){
  function longestWord(string){
    let newArray =string.split(" ");
    let lengthArray =[];
      for (let i=0; i<newArray.length; i++) {
        newArray.sort(function(a,b){return b.length-a.length});
    }
      console.log(newArray[0]);
  };
longestWord("The best of us have hard days where we try to succeed");
})();
