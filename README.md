![Lihtne kell](/kell.jpg)
# Lihtne digikell
See on lihtsa digikella näidis, demonstreerimaks algajatele, mida lihtsat Javascriptga teha saab.
## Javaskripti osa

Selline väike koodijupp teeb seda, et hangib arvutilt kellaaja ja muudab seda iga sekundi tagant:
```javascript
const displayClock = () => {

    const clock = document.getElementById('clock');
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    clock.textContent = hours + ':' + minutes + ':' + seconds;
    };
    
    setInterval(displayClock, 1000);
```

### Siin nüüd täpsemalt iga rida lahti kirjutatud:

```javascript
const displayClock = () => {
```
See rida loob noolefunktsiooni displayClock. Noolefunktsioonid on lühem viis funktsioonide defineerimiseks JavaScriptis. Vanal moel oleks see kirjutatud selliselt: `function displayClock() {`

```javascript
const clock = document.getElementById('clock');
```
See rida leiab HTML dokumendist elemendi, mille id on 'clock', ja salvestab selle muutujasse clock. See element kuvab kellaaega.

```javascript
const date = new Date();
```
Loob uue Date objekti, mis esindab praegust hetke ja salvestab selle muutujasse date.

```javascript
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
```    
Need read saavad praeguse tunni, minuti ja sekundi väärtused date objektist ja salvestavad need vastavatesse muutujatesse hours, minutes ja seconds.

```javascript
hours = hours < 10 ? '0' + hours : hours;
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;
```
Igaüks neist ridadest kontrollib, kas tundide, minutite või sekundite väärtus on väiksem kui 10. Kui jah, siis eesliide '0' lisatakse väärtuse ette. See on lühike viis kirjutada if-else lauseid, mida nimetatakse tingimusoperaatoriks. Pikemalt kirjutades oleks üks rida selline:
```javascript
if (hours < 10) {
    hours = '0' + hours;
} else {
    hours = hours;
}
```

```javascript
clock.textContent = hours + ':' + minutes + ':' + seconds;
```
See rida uuendab clock elemendi tekstisisu praeguse ajaga, mis on formaaditud kui tunnid:minutid:sekundid.

```javascript
};
```
See rida tähistab noolefunktsiooni displayClock lõppu.
```javascript
setInterval(displayClock, 1000);
```
See rida käivitab displayClock funktsiooni iga 1000 millisekundi (1 sekundi) järel. See tagab, et kell värskendab aega iga sekundi järel.

## Veidi keerulisem, animatsiooniga versioon
See on juba pisut keerulisem, lisatud on animatsioon ja kõik numbrid on lahku löödud, et animatsioon toimiks igale numbrile eraldi:

```javascript
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
```
### Siin taas täpsemalt iga rida lahti kirjutatud:

Funktsioon updateClock
```javascript
function updateClock() {
```
Defineerib funktsiooni nimega updateClock.
```javascript
    const now = new Date();
```
Loob uue Date objekti, mis esindab praegust hetke (kuupäeva ja aega).
```javascript
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
```
Saab praegused tunnid, minutid ja sekundid Date objektist.
Muudab need stringideks ja lisab vajadusel eesliite "0", et tagada kahekohaline formaat (nt "09" asemel "9").
```javascript
    updateNumber('hour-ten', hours[0]);
    updateNumber('hour-unit', hours[1]);
    updateNumber('minute-ten', minutes[0]);
    updateNumber('minute-unit', minutes[1]);
    updateNumber('second-ten', seconds[0]);
    updateNumber('second-unit', seconds[1]);
```
Kutsub funktsiooni updateNumber kuue erineva elemendi jaoks, mis vastavad kellaja kuuele numbrile (tunnid kümnetes, tunnid ühikutes, minutid kümnetes jne).
Funktsioon updateNumber
```javascript
function updateNumber(id, newDigit) {
```
Defineerib funktsiooni nimega updateNumber, mis võtab kaks argumenti: elemendi ID ja uue numbri (digiti).
```javascript
    const element = document.getElementById(id);
```
Leiab dokumendist elemendi antud ID-ga.
```javascript
    if (element.textContent !== newDigit) {
    element.textContent = newDigit;
        applyZoomInAnimation(element);
    }
}
```
Kontrollib, kas elemendi praegune tekstisisu on erinev uuest numbrist.
Kui on, siis uuendab tekstisisu ja rakendab sellele elemendile suumimise animatsiooni, kutsub välja applyZoomInAnimation funktsiooni.
Funktsioon applyZoomInAnimation
```javascript
function applyZoomInAnimation(element) {
```
Defineerib funktsiooni nimega applyZoomInAnimation, mis võtab argumendiks elemendi.
```javascript
    element.classList.add('zoom-in');
```
Lisab elemendile klassi zoom-in, mis käivitab CSS-i abil defineeritud animatsiooni.
```javascript
    setTimeout(() => {

element.classList.remove('zoom-in');
    }, 500); // Eemalda klass peale animatsiooni lõppu
}
```
Kasutab setTimeout funktsiooni, et eemaldada zoom-in klass pärast 500 millisekundit, tagades, et animatsioon toimub ainult üks kord.
Intervalli seadistamine ja esmane värskendus
```javascript
setInterval(updateClock, 1000);

updateClock(); // Käivita kohe, et vältida tühja ekraani alguses
```
Seadistab intervalli, et updateClock funktsiooni kutsutakse välja iga 1000 millisekundi (1 sekundi) järel.
Kutsub updateClock funktsiooni välja kohe, kui skript käivitub, et vältida tühja kella alguses.



## Väljanägemine ehk CSS
Kõige lihtsam viis midagi igatepidi keskele joondada:
```css
display: flex;
height: 100vh;
justify-content: center;
align-items: center;
```

# Giti seadistamine
Giti luues, kasutades käsklust `git init`luuakse suure tõenäosusega `master`"oks". Samas nt Github kasutab tänapäeval `main`nimelist oksa. Seega võiks selle muuta samuti `mainiks`. Võimalik on seadistada globaalselt kohalik git looma `main` oksa, või lihtsalt nimetada ümber.  

Esimesel juhul on käsklu `git config --global init.defaultBranch <siia soovitav nimi>`  
Teisel juhul `git branch -m <siia soovitav nimi>`

Seejärel:
`git init`
`git add .`
`git commit -m "Add existing project files to Git"`
`git remote add origin https://github.com/sinurepoaadress`
`git push -u -f origin main`