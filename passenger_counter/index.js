let counterel = document.getElementById("num_count")

let saveel = document.getElementById("text")

let count=0

function increment(){
 count+=1
 document.getElementById("num_count").innerText=count
}

function save(){
    let countstr = count + " - "
    document.getElementById("text").textContent+=countstr
    count=0
    document.getElementById("num_count").innerText=count
}
