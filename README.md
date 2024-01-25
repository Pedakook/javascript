# Lihtne digikell
## Javaskripti osa

```javascript
const displayClock = () => {
```
See rida loob noolefunktsiooni displayClock. Noolefunktsioonid on lühem viis funktsioonide defineerimiseks JavaScriptis.

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
Igaüks neist ridadest kontrollib, kas tundide, minutite või sekundite väärtus on väiksem kui 10. Kui jah, siis eesliide '0' lisatakse väärtuse ette. See on lühike viis kirjutada if-else lauseid, mida nimetatakse tingimusoperaatoriks.

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