const countdown = () => {
    const countDate = new Date("August 30, 2021 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const dayDisplay = Math.floor(gap / day);
    const hourDisplay = Math.floor((gap % day) / hour);
    const minuteDisplay = Math.floor((gap % hour) / minute);
    const secondDisplay = Math.floor((gap % minute) / second);

    document.querySelector(".days").innerText = dayDisplay;
    document.querySelector(".hours").innerText = hourDisplay;
    document.querySelector(".minutes").innerText = minuteDisplay;
    document.querySelector(".seconds").innerText = secondDisplay;
 
}
setInterval(countdown, 1000);
