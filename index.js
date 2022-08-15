/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


let button = document.getElementById("btn")


button.addEventListener("click", function(){
    convertionm()
    convertionl()
    convertionk()
    
})


// feet to meter
function convertionm() {
    let input = document.getElementById("inpt").value;
    let feetmeterResult = document.getElementById("outputMeters")
    let resultFeet = (input * 3.28).toFixed(3)
    let resultMeter = (input / 3.28).toFixed(3)
    feetmeterResult.innerHTML += input + " meters" + " = " + resultFeet + " feet" + " | " + input + " feet" + " = " + resultMeter + " meters"
}

function convertionl() {
    let input = document.getElementById("inpt").value;
    let gallonliterResult = document.getElementById("outputliters")
    let resultgallon = (input * 0.264).toFixed(3)
    let resultliter = (input / 3.785).toFixed(3)
    gallonliterResult.innerHTML += input + " liters" + " = " + resultgallon + " gallons" + " | " + input + " gallons" + " = " + resultliter + " liters"
}

function convertionk() {
    let input = document.getElementById("inpt").value;
    let kilogrampoundResult = document.getElementById("outputkilograms")
    let resultpound = (input * 2.204).toFixed(3)
    let resultkilograms = (input / 2.204).toFixed(3)
    kilogrampoundResult.innerHTML += input + " kilograms" + " = " + resultpound + " pound" + " | " + input + " pound" + " = " + resultkilograms + " kilograms"
}

