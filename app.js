let berechnung = prompt("Bitte geben Sie einen mathematischen Prozess an(+,-,/,*)");
let num1 = +prompt("Geben sie eine Zahl an ");
let num2 = +prompt("geben Sie noch eine andere Zahl an");
let ergebnis;
switch (berechnung) {
    case "+":
        ergebnis = num1+num2
        break;
    case "-":
        ergebnis = num1-num2;
         break;
    case "/":
        ergebnis = num1/num2;
        break;
    case "*":
        ergebnis =num1*num2;

    default:
        console.log("Bitte machen Sie einen gültigen Eintrag");
        break;
}
console.log(`${num1} ${berechnung} ${num2} = ${ergebnis}`);