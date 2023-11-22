// Request data every second
setInterval(() => {
    // Request the data from the /data/update route
    fetch("/data/update")
    .then(response => response.json())
    .then(data => {
        // Save the temperature value
        const temp = data.cpu_temp;
        // Maximum temperature value
        const max_temp = 90;
        // Scale it to a value between -30 and 240 degrees
        const deg = temp * 270 / max_temp - 30;
        // Change it on the needle
        document.querySelector(".gauge .pointer .hand").style.transform = `rotate(${deg}deg)`;
    })
    
}, 200);
