let startValue = 0;
counter.style.color = "white"
plus.addEventListener("click", increment => {
    startValue ++;
    counter.innerHTML = startValue;
    if (startValue == '0') {
        counter.style.color = "white"; 
    } else if (startValue > "0") {
        counter.style.color = "green"; 
    }
    counter.animate([{opacity:"0.2"}, {opacity:"1.0"}], 
    {duration:500, fill:"forwards"})
})

minus.addEventListener("click", decrement => {
    startValue --;
    counter.innerHTML = startValue;
    if (startValue == '0') {
        counter.style.color = "white"; 
    } else if (startValue < "0") {
        counter.style.color = "red"; 
    }
    counter.animate([{opacity:"0.2"}, {opacity:"1.0"}], 
    {duration:500, fill:"forwards"})
})


//I WANT MATHS OPERATORS FLYING ALL AROUND MY INTERFACE
 /* counter.style.transition = "2s"; */     //this affects only zero and one and as at the time of this documentation, i do not know why.
