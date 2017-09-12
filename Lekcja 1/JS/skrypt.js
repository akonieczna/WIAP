/*
document.write("Skrypt działa poprawnie w<br />");
document.write("Skrypt działa poprawnie w<br />");
document.write("Skrypt działa poprawnie w<br />");
console.log("teskt");
*/

//var - słowo kluczowe
//imie - nazwa zmiennej

/*var imie="Ada";
document.write(imie);  //Ada
/*console.log(imie);
document.write("test");*/

//document.write("Witaj, " + imie + "!"); //Witaj, Ada!*/

//= - operator przypisania
//Ada - wartość zmiennej

/*var imie2="Natalia";
document.write(imie2);*/

/*var suma = 10 - '20' + 30;
console.log(suma); konkatenacja */

//window.alert('test'); komentarz

var a = 9, b = 'Janusz';
var suma = a + b;
var roznica = a - b;
var mnozenie = a * b;
var dzielenie = a / b;
var modulo = a % b;

console.log(typeof(a))
console.log(typeof(b))

var c = true;
console.log(typeof(c))

var d;
console.log(typeof(d))

var dzialanie = (7%2)/3;
console.log(dzialanie);

var dziesietna = 10;
console.log(dziesietna);

var oktalna = 010;
console.log(oktalna);

var hexa = 0x20;
console.log(hexa);

console.trace(); //gdzie się znajduję, plik

//camelCase - nazewnictwo zmiennych
var duzaLiteraIJejZapis;
var _duzaLiteraIJejZapis;
var $duzaLiteraIJejZapis;

//zmiennoprzecinkowa i notacja amerykanska (czyli poczatek jest 0)
var zmienna = 2.5; //przecinek nie działa
console.log(zmienna);

var j1 = '1';
var j2 = '1.5'
console.log(typeof(j1));
j1 = parseInt(j1);
j2 = parseFloat(j2);
var wynik = j1 + j2;
console.log(wynik);

//parsowanie, zamiana stringa na number zmienna = parseInt(zmienna) a zmienno przecinkowa parseFloat

var wiek = 'Aga';
wiek = parseInt(wiek);
console.log(wiek); //sposób na walidacje danych

/*// do h1
var x = "ZSK";
document.getElementById('naglowek').innerHTML = x; //działa ale słaba metoda*/
var x = "ZSK";
var elNaglowek = document.getElementById('naglowek');
elNaglowek.innerHTML = x;

/*var taco = 'Burrito';
var elNaglowek = document.getElementById('naglowek');
elNaglowek.innerHTML = taco;
elNaglowek.style.color = 'orange';

var imie = prompt('Podaj imię.');
console.log(imie);
console.log(typeof(imie));*/

/*var a = prompt('Podaj a.');
var b = prompt('Podaj b.')
console.log(a*b);*/

var wiek1 = prompt('wiek1')
var wiek2 = prompt('wiek2')
var wiek3 = prompt('wiek3')
var wiek4 = prompt('wiek4')
wiek1 = parseInt(wiek1);
wiek2 = parseInt(wiek2);
wiek3 = parseInt(wiek3);
wiek4 = parseInt(wiek4);
var wynik = (wiek1 + wiek2 + wiek3 + wiek4)/4; 
console.log(wynik);

var eli2 = document.getElementById('i2');
eli2.innerHTML = 'Średni wiek wynosi' + wynik;





























