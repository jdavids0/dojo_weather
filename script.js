function accept(id){
    var element = document.querySelector(id);
    element.remove();
}

function changeTemp(){
    var temps = document.getElementsByClassName('.temp-num');
    var value = document.getElementById('tempChangePicker').value;

    for(var i=0; i<temps.length; i++){
        if (value == "fahrenheit"){
            temps[i].innerText = Math.round((temp[i].innerText*1.8)+32);
        
        }
        else {
            temps[i].innerText = Math.round(temp[i].innerText-32/1.8)
        }
        }
    console.log(temps[i].innerText);
    }

/* function c2f(temp) {
        return Math.round(9 / 5 * temp + 32);
    }
    
function f2c(temp) {
        return Math.round(5 / 9 * (temp - 32));
    }
    
    function convert(element) {
        console.log(element.value);
        for(var i=1; i<9; i++) {
            var tempSpan = document.querySelector("#temp" + i);
            var tempVal = parseInt(tempSpan.innerText);
            if(element.value == "°C") {
                tempSpan.innerText = f2c(tempVal);
            } else {
                tempSpan.innerText = c2f(tempVal);
            }
        }
    } */