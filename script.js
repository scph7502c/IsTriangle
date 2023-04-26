/* function odliczanie()   {
    
    var text = ""
    
    for (let liczby=1; liczby<=10; liczby++) {

    text += "Liczba to " + liczby + "<br>"

    }

    document.getElementById('count').innerHTML = text

} */

/* ------------------------------------------ */



/* let parzyste = " "
    let count = 100
    
for (let parz=1; parz<=5;  parz++) {

    if (count % 2 == 0) {
          parzyste += `${count}`
        }
        else{
            count++
            parzyste += `${count}`
        }
        count++
    }


console.log(parzyste) */

/* ------------------------------------------ */


/* let suma = 0  

for(let i=1; i<=10 ; i++){
   suma += i
}
console.log(suma) */

/* ------------------------------------------ */

// Odliczanie od 10 do 1: for

/* function countToZero() {

for(let i = 10; i>0; i--) {

    console.log(i);
}
}

countToZero() */

// Odliczanie od 10 do 1: while

/* let i = 10; 
while (i > 0) {
  console.log(i);
  i--;
} */

/*

/* ------------------------------------------ */


/* Obliczy i wyświetli na ekranie sumę kolejnych 10 liczb całkowitych począwszy od 1. 

let sum = 0
for (var i=1; i<=10; i++) {
    sum += i
}

console.log(sum)

*/


/* ------------------------------------------ */

/* 
Pracownik przez X miesięcy odkłada co miesiąc Y zł. W każdym miesiącu z całej odłożonej na tą chwilę kwoty uzyskuje 8% odsetek.
Jaką kwotę zgromadzi pracownik ? */


/* function income(){
    var kwot = 5
    var monthly = 0
    var sumMonthly = 0
    var rocznie = 12
   
    for(let i=1; i<=rocznie; i++){
       monthly += (kwot/100)*8
       sumMonthly += (5 + monthly)
       console.log(sumMonthly.toFixed(2))
    }
    }
    income() */

    /* ------------------------------------------ */

    /* 
Obliczy sumę elementów ciągu arytmetycznego, składającego się ze 100 elementów, z których każdy kolejny jest większy od poprzedniego o 10. Pierwszy element wynosi 5. */

/* function sequence() {
   var a = 5
   var sumSeq = 0
   var seqCount = 100

for(i=1; i<=seqCount; i++){
if(a==5){
console.log(a)
}

else if (a>5 || a%2==0) {
    a +=  9
    sumSeq += a
    console.log(a)
}
a++
}
 console.log(sumSeq)
}
sequence()  */

/* ------------------------------------------ */

/* Obliczy ilość cegieł w piramidzie o podstawie 10 x 10 cegieł. */


/* function pyramid() {
var bok = 10
// var bok3 = bok*bok2
var ogl = 0

for(i=1; i<=10; i++){

bok = bok * 1
ogl += bok -1
console.log(ogl)
}
}
pyramid() */


/* ------------------------------------------ */

/* Zadanie z podręcznika */

/* let nazwisko  = "Temimi "
let imie = "Damian "
let firma = " Amazon"
let praca = "pracuje w firmie"
let wynik = 0
function zadanie() {
    wynik = imie + nazwisko + praca + firma
console.log(wynik)
}

zadanie() */

/* ------------------------------------------ */

/* Zadanie z podręcznika */

/* let x = 10
let Y = 15
let wyn1 = "X jest większe od Y"
let wyn2 = "X nie jest większe od Y"

function check(x,y){
if(x>y){
    document.write(wyn)
}

else{
    document.write(wyn2)
}
} 

check() */
    
/* ------------------------------------------ */

/* Zadanie z podręcznika: dzień tygodnia plus losowe imię */

/* function dataDzisiaj(){

    let data = new Date()
    let zdan = "Dzisiaj mamy "
    let dniTyg = new Array(7)
    let zdanie = new Array(7)
    let imie = new Array (7)

    imie[0] = " Damian"
    imie[1] = " Olga"
    imie[2] = " DżejDżej"
    imie[3] = " DzikDzik"
    imie[4] = " Helenka"
    imie[5] = " Adolfik"
    imie[6] = " Tołdi"

    var randomImie = imie[Math.floor(Math.random()*imie.length)];
    console.log(randomImie)

    dniTyg[0] = "niedziela";
    dniTyg[1] = "poniedziałek";
    dniTyg[2] = "wtorek";
    dniTyg[3] = "środa";
    dniTyg[4] = "czwartek";
    dniTyg[5] = "piątek";
    dniTyg[6] = "sobota";

    var r = dniTyg[data.getDay()];
    var jakiMamyDzien = zdan + r + t
  
    zdanie[0] = ", czyli dzień święty.";
    zdanie[1] = ", czyli początek tygodnia.";
    zdanie[2] = ", czyli drugi dzień tygodnia.";
    zdanie[3] = ", czyli środek tygodnia.";
    zdanie[4] = ", czyli czwarty dzień tygodnia.";
    zdanie[5] = ", czyli zaraz weekend.";
    zdanie[6] = ", czyli nareszcie można odpocząć.";

    var jakiDzien 

    if (dniTyg.indexOf() == zdanie.indexOf()){
        var t = zdanie[data.getDay()];
        var jakiDzien = zdan + r + t + randomImie
    }
    var display = "";
    display += jakiDzien;
    document.getElementById("dziennik").innerHTML = display;  
} */


/* ------------------------------------------ */

/* function zadanie(){
var x = 6
var y = 0
for(j=1; j<6; j++) {
    for(let i=1; i<=x; i++){
    var text = i.toString()
    document.write(text)
    }
    document.write("<br>")
    document.getElementById('day').style.display="none";
}
}
zadanie() */


/* ------------------------------------------ */


/* function zadanie(){
var i = 1
var z = 1
for(let j=1; j<6; j++){
    for(; i<6; i++) {
document.write(i + " ")

}
z = z+ 1
i = z
document.write("<br>")
}
}
zadanie() */

/* ------------------------------------------ */

/* var text = ""
var i = 0
while (i<10) {

    text += "<br>Liczba i jest równa " + i;
    document.write(text+"<br>")
} */

/* ------------------------------------------ */

/* var i = 1;
do {
    document.write("Pętla wykonana " + i + " raz/y<br>")
} while (i++ <= 5); */

/* ------------------------------------------ */

/* var i = 0, k = 4;
do {
    var j = k * i;
    document.write("Wynik " + j + "<br>");
    if (j > 30) break;
} while (i++ < 10); */

/* ------------------------------------------ */
/* var x = 10
do {
    document.write("Liczba x wynosi " + x + "<br>");
if (x>27) break;
} while(x++); */


/* ------------------------------------------ */

/* for(var  i = 0; i <= 30; i++) {
if ((i % 3) != 0) {

    continue;
}
document.write(i + "; ");

} */


/* ------------------------------------------ */
// Tabliczka mnożenia

/* function tabliczkaMn() {
for (var n = 1; n <= 10; n++){
    for (var m = 1; m <= 10; m++) {
        document.write(n, "*", m, "=", (n*m), "<br>")
    }
}
}

tabliczkaMn() */


/* ------------------------------------------ */

/* function print(){
var x = 1
var sum = 0
do{
    sum += x
    document.write(x, " ");
   
   if (sum>100) break;
} while(x++);



}

print() */


/* ------------------------------------------ */

// Zadanie z polem trójkąta

/* var button = document.getElementById('oblicz')

var a = 3
var b = 4
var c = 5
var obwod = Math.floor((a + b + c)/2)
var pole = Math.sqrt(obwod*(obwod - a)*(obwod - b)*(obwod - c)) */

//console.log(pole)

function triangle(){
   

    var inputA = parseInt(document.getElementById("a").value);
    var inputB = parseInt(document.getElementById("b").value);
    var inputC = parseInt(document.getElementById("c").value);
    var obwod = Math.floor((inputA + inputB + inputC)/2)
    var pole = Math.sqrt(obwod*(obwod - inputA)*(obwod - inputB)*(obwod - inputC))

    //if (inputA + inputB > inputC || inputA + inputC > inputB || inputB + inputC > inputA ){
    document.getElementById('wynikP').innerHTML = pole
    
}

function validate() {

    var inputA = parseInt(document.getElementById("a").value);
    var inputB = parseInt(document.getElementById("b").value);
    var inputC = parseInt(document.getElementById("c").value);
    var obwod = ((inputA + inputB + inputC)/2)
    var pole = Math.sqrt(obwod*(obwod - inputA)*(obwod - inputB)*(obwod - inputC))

    if (inputA + inputB > inputC && inputA + inputC > inputB && inputB + inputC > inputA ){
        document.getElementById('wynikP').innerHTML = "Z tych boków da się zbudować trójkąt"
    } else{
        document.getElementById('wynikP').innerHTML = "Z tych boków nie da się zbudować trójkąta"
    }
}


