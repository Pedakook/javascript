const endDate = new Date(new Date().getFullYear(), 11, 25, 16, 0, 0);
const countdownItems = {
    months: document.getElementById('months'),
    weeks: document.getElementById('weeks'),
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
};

const updateCountdown = () => {
    const currentDate = new Date();
    const timeLeft = endDate - currentDate;

    if (timeLeft <= 0) {
        document.getElementById('countdown').innerHTML = "Kooli poolaasta on lõppenud!";
    } else {
        const months = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 30.44));
        const weeks = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Update and animate countdown numbers
        animateNumber(countdownItems.months, months);
        animateNumber(countdownItems.weeks, weeks % 4);
        animateNumber(countdownItems.days, days % 7);
        animateNumber(countdownItems.hours, hours);
        animateNumber(countdownItems.minutes, minutes);
        animateNumber(countdownItems.seconds, seconds);
    }
};

const animateNumber = (element, newValue) => {
    element.classList.remove('zoom');
    setTimeout(() => {
        element.innerText = newValue;
        element.classList.add('zoom');
    }, 100); // 100ms delay for CSS transition
};

setInterval(updateCountdown, 1000);
updateCountdown();
