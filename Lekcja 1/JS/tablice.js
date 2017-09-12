//tworzenie tablicy za pomocą literału tablicy.

    /*var kolory = ['biały', 'czerwony', 'zielony'];
    var elwynik = document.getElementById('wynik');
    elwynik.innerHTML = kolory[0];*/

//za pomocą konstruktora

    var samochody = new Array('bmw', 'audi', 'ferrari', 'porsche');
    console.log(samochody[samochody.length - 1]); //ostatni element w tablicy
    console.log(samochody);
    console.log('ilość elementów: ' + samochody.length)
    
    /*var auto = prompt('Marka nowego auta:');
    console.log(auto);
    samochody[0] = auto;
    console.log(samochody);*/ //podmiana pierwszego elementu tablicy
    
    /*var imie = prompt("Twoje imię:");
    var nazwisko = prompt("Twoje nazwisko:")
    var wiek = prompt('Twój wiek:');
    var szkola = [imie, nazwisko, wiek];
    
    var elszkola = document.getElementById('szkola');
    elszkola.innerHTML = szkola;*/
    
//tablice wielowymiarowe
    
    var tab = new Array(
                        new Array ('Jan','Nowak', 'Poznań'),
                        new Array ('Anna','Kowal', 'Gniezno'),
                        new Array ('Janusz','Kowal', 'Poznań')
                        );
    console.log(tab);
    console.log(tab[1][2]);

//sortowanie ciągów znaków
var imiona = ['Paweł', 'Anna', 'Zenon', 'Jacek'];
console.log(imiona);

var posortowane = imiona.sort();
posortowane.push('Magda');
console.log(posortowane);

var odwroc = posortowane.reverse();
odwroc.pop(); //usunięcie ostatniego elementu
odwroc.push('Gerwazy'); //dodaje na koniec, ponieważ wrzucone po sortowaniu
odwroc.unshift('Joanna');
console.log(odwroc);

console.log(odwroc.indexOf('Anna')); //nie istnieje
console.log(odwroc.indexOf('Gerwazy')); //istenieje

//sortowanie liczb
var cyfry = [1,2,20,190,-1,1000000];
console.log(cyfry);
cyfry.sort(); 
console.log(cyfry); //sortowanie nieprawidłowe

cyfry.sort(function(a, b){return(a-b);});
console.log(cyfry); //sortowanie prawidłowe

//wartosc wpisania w pole przez użytkownika do tablicy
var elwynik = document.getElementById('wynik');
var elpodajkolor = document.getElementById('podajkolor')
var elkolor = document.getElementById('kolor');
var kolor=[];
function zapisz(){/*console.log(elkolor.value)*/
                    kolor[0] = elkolor.value;
                    console.log(kolor);}
//zadanie do domu: utwórz formularz z loginem (tekstowe) i hasłem (pole typu password) i kolorem heksadecymalnym (tekstowe). przypisz dane do tablicy jednowymiarowej. wypisz dane w bloku na stronie w kolorze jaki podał użytkownik. pobierz dane z tablicy 





















    
    
    

    