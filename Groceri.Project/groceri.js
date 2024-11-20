//arry to store items of card
const cardAry = []; 
//function for storing arry 
function addItem(item){
    const pushingAry = cardAry.push(item)
    alert(`Your added item is " ${item} "!`);
}
//to show items in card to user
function cardItems(){    
    if(cardAry.length == 0){
        document.getElementById("noOfItems").innerHTML = " Your card is emty ! ";
    }else{
        document.getElementById("noOfItems").innerHTML =(`${cardAry}\n This is your card items !`)
    }
}
//arry to store item of fevt
const fevtAry = []; 
//function for storing arry 
function fevtItem(item){
    const pushingAry = fevtAry.push(item)
    alert(`Your item added to Favorite is " ${item} "!`);
}
//to show items in card to user
function fevtItems(){    
    if(fevtAry.length == 0){
        document.getElementById("noOfFevt").innerHTML = " Your favorite's are emty ! ";
    }else{
        document.getElementById("noOfFevt").innerHTML =(`${fevtAry}\n This is your favorite items !`)
    }
}