

function ConvertTemp(){
    let degreeTemp = document.getElementById("temperatureVal").value;
    let convertedTemp = document.getElementById("degResult")
    let unitSelector = document.getElementById('tempUnit').value;

    if (unitSelector == 1){
        let celcius = (degreeTemp-32)*(5/9); 
        let celciusTemp = celcius.toFixed(3);
        console.log("Celcius to farenheit:"+ celciusTemp)
        convertedTemp.innerHTML = celciusTemp+ '°C';
    }
    
    else if (unitSelector == 2){
        let farenheit = (degreeTemp*9/5)+32;
        let farenheitTemp = farenheit.toFixed(3);
        console.log("Farenheit to celcius:"+farenheitTemp);
        convertedTemp.innerHTML = farenheitTemp+ '°F';
    }
}

