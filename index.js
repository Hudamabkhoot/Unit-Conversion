
const numInput = document.getElementById("num-input")
const btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    length()
    volume()
    mass()
})


function length(){
    let resultFeet = (numInput.value * 3.28).toFixed(2)
    let resultMeter = (numInput.value / 3.28).toFixed(2)
    let lengthValue = document.getElementById("length-value")
    lengthValue.innerHTML = `${numInput.value} meters = ${resultFeet} feet | ${numInput.value} feet = ${resultMeter} meters`
}


function volume(){
    let resultGallon = (numInput.value *0.264).toFixed(2)
    let resultLiter = (numInput.value / 0.264).toFixed(2)
    let volumeValue = document.getElementById("volume-value")
    volumeValue.innerHTML = `${numInput.value} liters = ${resultGallon} gallon | ${numInput.value} gallon = ${resultLiter} liters`
}

function mass(){
    let resultPound = (numInput.value * 2.204).toFixed(2)
    let resultKilogram = (numInput.value / 2.204).toFixed(2)
    let massValue = document.getElementById("mass-value")
    massValue.innerHTML = `${numInput.value} Kilogram  = ${resultPound} Pound | ${numInput.value} Pound = ${resultKilogram} Kilogram `
}
