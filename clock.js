const clock = setInterval(time, 1000)
function time() {
    const d = new Date();
    const hour = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();

    // hr convertion
    const hor = (hour % 12)
    if (hor == 0 && hour > 12) {
        document.getElementById("H").innerHTML = hor;
    }
    else {

        document.getElementById("H").innerHTML = hor;
    }
    document.getElementById("M").innerHTML = min;
    document.getElementById("S").innerHTML = sec;


    //AM OR PM 
    if (hour >= 12) {
        document.getElementById("AP").innerHTML = "PM";
    }
    else {
        document.getElementById("AP").innerHTML = "AM";
    }

}
