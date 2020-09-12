var url = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q="
var main = document.querySelector("div")
async function getJSON(){
    var response = await fetch(url + "bye")
    var data = await response.json()
    var usefulData = data.data
    console.log(usefulData)
    for(let i = 0 ; i< usefulData.length ; i++){
        const tempImg = document.createElement("img")
        tempImg.src = usefulData[i].images.fixed_height.url
        main.append = tempImg.append
    }   
}
getJSON()