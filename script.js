function accept(id){
    var element = document.querySelector(id);
    element.remove();
}

function changeTemp(element){
    var temps = document.getElementsByClassName('temp-num');
    var value = element.value;
    console.log(value);
    if (value == 'fahrenheit'){
        for(i=0; i<temps.length; i++){
            temps[i].innerText = Math.round(temps[i].innerText*1.8+32);
        }
    }
    else {
        for(i=0; i<temps.length; i++){
            temps[i].innerText=Math.round((temps[i].innerText-32)/1.8);
        }
    }
}

/* function changeTemp(element){
    var temps = document.getElementsByClassName('temp-num');
    console.log(temps)
    var value = element.value;
    /* var value = document.getElementById('tempChangePicker').value; */
    /* console.log(value)
    for(i=0; i<temps.length; i++){ */
        /* console.log(i) */
        /* if (value == 'fahrenheit'){
            console.log("entered fahrenheit")
            console.log(temps.innerHTML)
            temps[i].innerText = Math.round(temp[i].innerText*1.8+32);
            console.log(temps.innerText)
            console.log(temps[i]);
        }
        else {
            temps[i].innerText = Math.round((temp[i].innerText-32)/1.8)
            console.log ("entered celsius")
        }
        } */
/*     console.log(temps[i].innerText);
 */ /*    }  */