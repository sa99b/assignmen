//-----https://github.com/sa99b/assignmen-----//

//----------Starting kilometerToMeter----------

function kilometerToMeter(kilometer){
var meter = kilometer * 1000;

var doTheMath = kilometerToMeter(5);
return meter;
}          

//----------Finished kilometerToMeter----------
//----------Starting budgetCalculator----------

var watchPrice = 50;
var phonePrice = 100;
var laptopPrice = 500;

function budgetCalculator(watch, phone, laptop)
{
var watchTotal = watch * 50;
var phoneTotal = phone * 100;
var laptopTotal = laptop * 500;

return watchTotal + phoneTotal + laptopTotal;



}

//----------Finished budgetCalculator----------

//----------Starting megaFriend----------
var friends = ['Tuhin', 'saeed', 'Reshma','Kobi', 'Azhar', 'Touhiduzzaman']
function megaFriend(friends){

var maxword = 0;
var big;
for(i = 0; i<friends.length; i++){

    if(friends[i].length > maxword){

        var maxword = friends[i].length;
        big = friends[i];
    }
}
return maxword;
}

//----------Finished megaFriend----------

//----------Start hotelCost----------

function hotelCost(day){

var day = 30;
var price = 0;
if(day => 11){

price = day * 100

}
else if(day => 21){

var firstPart = 10 * 100;
var remaining = day - 10;
var secondPart = 10 * 80;

day = firstPart + secondPart;

} else{
var firstPart = 10 * 100;
var secondPart = 10 * 80;
var remaining = day - 20;
var thirdPart = remaining * 50;
price = firstPart + secondPart + thirdPart;
}
return price;


}

//----------Finished hotelCost----------