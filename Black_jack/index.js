let message=document.getElementById("message")
let firstcard=getrandom()
let secondcard=getrandom()
let card=[firstcard,secondcard,0]
let sum=firstcard+secondcard
let isALive=true
let hasblackjack=false
let messaeg=""
let cardsEl=" "
function func(){
    cardsEl="Cards: " + card[0] + " "+ card[1] + " "
    let sumEl="sum: "+sum
    if(sum<21){
        message="You can have another chance"
    }
    else if(sum==21){
        message="hurrah you have blackjack"
        hasblackjack=true
        isAlive=false   
    }
    else{
        message="oh oo"
        isAlive=false
    }
    document.getElementById("message").textContent=message
    document.getElementById("cards").textContent=cardsEl+card[2]
    document.getElementById("sum-el").textContent=sumEl

}

function newcard(){
    let newval=getrandom()
    sum+=newval
    card.push(newval)
    func()
}

function newgame(){
    document.getElementById("message").textContent="Want to play hit the button now: "
    document.getElementById("cards").textContent="Cards: "
    document.getElementById("sum-el").textContent="Sum: "
    sum=14
}

function getrandom(){
    let randomnumber = Math.floor(Math.random()*13)+1

    if(randomnumber===1){
        return 11
    }
    else if(randomnumber>10){
        return 10
    }
    else{
        return randomnumber
    }
}