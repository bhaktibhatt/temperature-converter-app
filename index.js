
function Celcius(){
    let degreeTemp = document.getElementById("temperatureVal").value;
    console.log(degreeTemp.value);
    let  farenheitTemp = (((Number(degreeTemp))-32)*5)/9;
    console.log("Farenheit to celcius:"+farenheitTemp);
    document.getElementById("degResult").innerHTML = farenheitTemp;
}
