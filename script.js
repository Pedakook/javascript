function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    updateNumber('hour-ten', hours[0]);
    updateNumber('hour-unit', hours[1]);
    updateNumber('minute-ten', minutes[0]);
    updateNumber('minute-unit', minutes[1]);
    updateNumber('second-ten', seconds[0]);
    updateNumber('second-unit', seconds[1]);
}

function updateNumber(id, newDigit) {
    const element = document.getElementById(id);
    if (element.textContent !== newDigit) {
        element.textContent = newDigit;
        applyZoomInAnimation(element);
    }
}

function applyZoomInAnimation(element) {
    element.classList.add('zoom-in');
    setTimeout(() => {
        element.classList.remove('zoom-in');
    }, 500); // Eemalda klass peale animatsiooni lõppu
}

setInterval(updateClock, 1000);
updateClock(); // Käivita kohe, et vältida tühja ekraani alguses
