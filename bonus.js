(function(){
  function bonus(price){
    let tip = (price*.2).toFixed(2);
    let newPrice = (price+parseInt(tip));


  console.log("Tip is $"+tip+", total with tip =$"+newPrice+", rounded the total is $" +newPrice.toFixed(0)+".00.")

  }
bonus(134.75);






})();
