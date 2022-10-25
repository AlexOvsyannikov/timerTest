let theMostDesirableDate = new Date("Dec 29, 2022 07:00:00").getTime();

let timer = setInterval(()=>{
    let now = new Date().getTime();
    let distance = theMostDesirableDate - now;
    let days = Math.floor(distance / 1000 / 60 / 60 / 24);
    distance = distance % (1000 * 60 * 60 * 24);
    let hours = Math.floor(distance / 1000 / 60 / 60);
    distance = distance % (1000 * 60 * 60);
    let minutes = Math.floor(distance / 1000 / 60);
    distance = distance % (1000 * 60);
    let seconds = Math.floor(distance / 1000);

    const htmlTimer = document.getElementById('timer');
    htmlTimer.textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}, 1000);
