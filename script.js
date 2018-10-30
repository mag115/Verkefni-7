/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  alert('Velkomin/nn í leikinn. Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.');

  const svar = confirm('Viltu byrja að spila leik?');

  if (svar === true) {
    play();
  }
  else {
    alert('Þú vildir ekki spila');
  }

  villa;
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
  const spurning = ask();

  const svar = confirm('Viltu spila annann?');

  if (svar === true) {
    play();
  }
  else {
    alert('Þú vildir ekki spila');
  }

}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {

  let spurningarFjöldi = 0;
  let rettSvar = 0;

  while (spurningarFjöldi < GAMES_TO_PLAY) {
    quest();
    spurningarFjöldi = spurningarFjöldi + 1;
  }

  alert(rettSvar);
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function quest() {
  const tala = Math.floor(Math.random() * 4 + 1);
  const a = randomNumber(1, 100);
  const b = randomNumber(1, 100);
  const c = randomNumber(1, 10);
  const d = randomNumber(1, 10);
  const rettSvar = 0;

  if ( tala === 1 ) {
    const input = prompt(a + '+' + b);
    const svar = a + b;
    return input, svar;
  }

  if ( tala === 2) {
    const input = prompt(a + '-' + b);
    const svar = a - b;
    return input, svar;
  }

  if (tala === 3) {
    const input = prompt(c + '*' + d);
    const svar = c * d;
    return input, svar;
  }

  if (tala === 4) {
    const f = c * randomNumber(2 , 10);
    const input = prompt(f + '/' + c);
    const svar = f / c;
    return input, svar;
  }
}

// Byrjar leik
start();
