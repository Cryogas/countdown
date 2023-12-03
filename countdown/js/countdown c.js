let countDownDate = new Date("Jan 8,2024").getTime();
console.log(countDownDate)

let hours;

//random color generator

function getcolor() {
    let letters = '134567890ABCD';
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += 
letters[Math.floor(Math.random() * 14)];
}
    return color;
}

//countdown timer

let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    
    let days = Math.floor(distance / (1000* 60 * 60 * 24));
    hours = Math.floor ((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s";


    if(distance < 0) {
        clearInterval(x)
        document.getElementById("timer").innerHTML = "EXPIRED";
    }


}, 1000);

//auto changing greeting //

setInterval(function greeting() {

    let greetingVar = document.getElementById("greeting");
    let greeting;
    if (hours < 24 && hours > 12 ) {
        greeting = "Morning";
    } else if (12 > hours && hours > 5) {
        greeting = "Afternoon";
    } else {
        greeting = "Evening"
    };

    greetingVar.style.color = getcolor()
    greetingVar.innerHTML = greeting;
},1000);


// music player

let playlist = ["NewJeans - OMG (100 Official Instrumental).mp3","NewJeans - Ditto (Clean Instrumental).mp3",'Super Shy.mp3'];
let currentIndex = 0;
let audioPlayer = new Audio(playlist[currentIndex]);

function playSong(index) {
    currentIndex = index;
    audioPlayer.src = playlist[currentIndex];
    audioPlayer.play();
    console.log ("Success")
}

audioPlayer.addEventListener('ended', function (){
    currentIndex = (currentIndex + 1) % playlist.length;
    audioPlayer.src = playlist[currentIndex];
    audioPlayer.play();
});



