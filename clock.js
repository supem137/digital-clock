class Clock {

    constructor(hour, minute, second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }

    printClock() {

        (this.hour < 10)
            ? document.querySelector('.hour').innerText = "0" + this.hour
            : document.querySelector('.hour').innerText = this.hour;

        (this.minute < 10)
            ? document.querySelector('.minute').innerText = "0" + this.minute
            : document.querySelector('.minute').innerText = this.minute;

        (this.second < 10)
            ? document.querySelector('.second').innerText = "0" + this.second
            : document.querySelector('.second').innerText = this.second;
    }

    addMeridiem(h) {
        (h < 12 && h >= 0)
            ? document.querySelector('.meridiem').innerText = 'am'
            : document.querySelector('.meridiem').innerText = 'pm';
    }
}

let nIntervId1;
let nIntervId2;

const hour_24 = () => {
    clearInterval(nIntervId2);

    nIntervId1 = setInterval(() => {
        let date = new Date();

        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();

        let hour_24 = new Clock(hour, minute, second);
        hour_24.printClock();
        hour_24.addMeridiem(hour);
    })
}

hour_24();

let toggle = document.querySelector("[data-toggle]");
toggle.addEventListener('change', (e) => {

    if (e.target.checked) {
        clearInterval(nIntervId1);

        nIntervId2 = setInterval(() => {

            let date = new Date();

            let h = date.getHours();
            let minute = date.getMinutes();
            let second = date.getSeconds();

            let hour = h % 12;
            if (hour === 0) {
                hour = 12;
            }

            let hour_12 = new Clock(hour, minute, second);
            hour_12.printClock();
            hour_12.addMeridiem(h);
        }, 1000);

    } else {

        hour_24();
    }
})







