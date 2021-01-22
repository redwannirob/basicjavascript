// https://github.com/redwannirob/basicjavascript
// First task is converting kilometers to meter
 function kilometerToMeter(meter){
    
     var km = meter * 1000;
     var meter = km / 1000;
     return km;
 } 
  var result = kilometerToMeter(10);
 console.log(result);



// Second task is to create a budget calculator where prices set for watch is 50, 100 for mobile and 500 for laptop.

 function budgetCalculator(watch, mobile, laptop){
    
     return [(watch * 50) + (mobile * 100) + (laptop * 500)];
    
   }
//   i have bought 2 watches, 1 mobile and 2 laptops.
   var sum = budgetCalculator(2,1,2);
   console.log(sum);




//   Third task is to find out the hotel cost ,first 10 nights will cost 100,another 10 nights will cost 80,over 20 nights will cost 50 for each night.

 function hotelCost(night){
     var cost = 0;
     if(night<= 10){
         cost = night * 100;
     }
     else if(night<=20){
         var first10 = 10 * 100;
         var remaining = night - 10;
         var second10 = remaining * 80;
         cost = first10 + second10;
     }
     else{
         var first10 = 10 * 100;
         var second10 = 10 * 80;
         var remaining = night - 20;
         var over20 = remaining * 50;
        cost = first10 + second10 + over20;/     }
     return cost;
 }
//  i have stayed 21 nights.
 var total = hotelCost(21);
 console.log(total);

// The last task is to call the element of largest length.

var large = "";
var friends = ["habib", "rubel", "shamim", "ferdous"];
function megaFriend(friends){
    for(var large[i].length > friends;){
        if(large = friends[i].length){
            friends = large;
            
        }
        
    }
    return friends;
}
