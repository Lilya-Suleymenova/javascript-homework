function startCountdown(seconds) {
    const countdown = document.getElementById('countdown');

    let timerId = setInterval(() => {
        if (seconds > 0) {
            countdown.textContent = seconds;
            seconds--;
        } else {
            countdown.textContent = 'Время вышло!';
            clearInterval(timerId);
        }
    }, 1000);
}

startCountdown(5);


// 2 задание

const lights = [
    document.getElementById('red'),
    document.getElementById('yellow'),
    document.getElementById('green')
];

let index = 0;

function switchLight() {
    lights.forEach(light => {
        light.className = 'light';
    });

    if (index === 0) {
        lights[0].classList.add('active-red');
    } else if (index === 1) {
        lights[1].classList.add('active-yellow');
    } else {
        lights[2].classList.add('active-green');
    }

    index = (index + 1) % 3;
}

switchLight();

const timerId = setInterval(switchLight, 2000);

setTimeout(() => {
    clearInterval(timerId);
    alert('Светофор выключен');
}, 10000);
