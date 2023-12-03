// setInterval(function)
    

setInterval(function greeting() {
    let time = new Date(). getHours()
    let greeting;
    if (time < 10) {
        greeting = "Good Morning, HG";
    } else if (time < 20) {
        greeting = "Good Afternoon, HG";
    } else {
        greeting = "Good evening, HG"
    }
    
    document.getElementById("greeting").innerHTML = greeting;


},2000);


