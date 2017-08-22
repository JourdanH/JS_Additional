(function(){
  function pokemon(arrayOfNumbers){

      let totalArray =[];
      let y=1;

    for(let i=0;i<arrayOfNumbers.length -1;i++) {
      if (i===0) {totalArray.push(arrayOfNumbers[i]);
      }
      totalArray.push(arrayOfNumbers[y]+totalArray[i])
      y++;
      }

      console.log(totalArray);
  }
pokemon([1,2,5,1,3])
})()
