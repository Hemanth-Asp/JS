let arr = []
const inptel = document.getElementById("input-el")
const savebun = document.getElementById("savebtn")
const ulel = document.getElementById("content")

savebun.addEventListener("click", function(){
    arr.push(inptel.value)
    inptel.value = ""
    console.log(arr)
    renderleads()
})

function renderleads(){
    let items=""
for(let i = 0; i < arr.length; i++){
   items +=  "<li> <a target='_blank' href='" + arr[i] + "'>" + arr[i] + "</a></li>"
    // console.log(arr[i])
   
}
ulel.innerHTML= items
}