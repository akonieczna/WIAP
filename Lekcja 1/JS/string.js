document.write('test <br />'); //test

var text = 'ZSK - Zespół Szkoł Komunikacji';
console.log(text.length); //30 znaków

var pierwszyZnak = text.charAt(0); //pierwszy znak: Z
console.log(pierwszyZnak);

var ostatniZnak = text.charAt(text.length - 1);
console.log(ostatniZnak); //ostatni znak - 1 bo liczenie zaczyna się od zera

var kodASCII = text.charCodeAt(0);
console.log(kodASCII); //90

//zamiana na duze litery
var duza = text.toUpperCase();
console.log(duza);

//zamiana na małe litery
var mala = text.toLowerCase();
console.log(mala);

/*//zamiana pierwsza duża, reszta małych
var poprawnyTekst = prompt('Wpisz tekst:','np. pies.'); // domyslna w okienku
poprawnyTekst = poprawnyTekst.charAt(0).toUpperCase() + poprawnyTekst.slice(1).toLowerCase();
console.log(poprawnyTekst)*/

var imie = prompt('Podaj imie');
imie = imie.substr(1 , imie.length - 2);
console.log(imie);