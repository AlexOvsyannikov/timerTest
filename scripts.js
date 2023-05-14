let theMostDesirableDate = new Date("Jul 3, 2023 18:00:00").getTime();

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

    htmlTimer.textContent = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}, 1000);

function changeTheFooter(state) {
    console.log('state', state);
    let footerP = document.getElementById("firk");

    if (state === 0) {
        footerP.innerText = 'I love you, Lemmi';
    }
    else {
        footerP.innerText = '@firk-mirk production';
    }
}