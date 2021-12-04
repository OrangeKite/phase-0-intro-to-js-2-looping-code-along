// Code your solutions in this file
function writeCards(array, eventName) {

    let cardList = []

    for (let i = 0; i < array.length; i++) {
        cardList.push("Thank you, " + array[i] + ", for the wonderful " + eventName + " gift!");
        console.log (i)
    }

    return cardList

}

function countDown(integer) {
 
 let x = integer

    while (x >= 0) {
        console.log (x)
        x--
    }
}