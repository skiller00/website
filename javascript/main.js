const url = "https://api.giphy.com/v1/gifs/search?api_key=6cIAQBR17BxW1XIXw8UkvI2ozJAbrKxX&q="
// giphy-giin api-ruu handaj data awchraad teriigee butsaana
async function getData(url, value){
    var response = await fetch(url + value)
    var data = await response.json()
    return data
}
// minii html deer beldsen input-iin value-g awchraad butsaana
function getInputValue(){ 
    return myInput.value
}
// Go! towchluur daragdah ved ajillah function
// input-iin value-g awaad teriigee ashiglaad api-s data awaad
// teriigee ashiglaad delgetsend gif zuragnuud gargaj irdeg
function go(){
    var myInputValue = getInputValue()
    getData(url,myInputValue).then(function(data){
        addToContentContainer(data)
    })
}
// delgetsend gif zuragnuud gargaj irdeg 
function addToContentContainer(data){
    var contentContainer = document.querySelector(".content-container")
    contentContainer.innerHTML = ""
    var imagesArray = data.data
    imagesArray.forEach(function(image){
        var tempImg = document.createElement("img")
        tempImg.src = image.images.fixed_height_still.url
        contentContainer.appendChild(tempImg)
    })
}
//evemt handlers here
const goBtn = document.querySelector("#goBtn")
// goBtn.onclick = go
goBtn.addEventListener("click",go)
const myInput = document.querySelector("input")
myInput.addEventListener("keydown",function(){
    if(event.code == "Enter"){
        go();
        myInput.blur()//focus-iig arilgana 
    }
})