(function(){

  function divisors(number1){

    let newArray = [];
    for(let i=0;i<=number1;i++){
      if (number1%i===0) {newArray.push(i)
      };
    } console.log(newArray)
  }

divisors(100);


})()
