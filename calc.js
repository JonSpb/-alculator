let a = ""; //первое число
let b = ""; //второе число
let c = ""; // итог 
let sign = ""; //знак
let finish = false;

const digit = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
];

const action =  ["-", "+", "*", "/"];

const output = document.querySelector("input");

function calc() {
  document.querySelector(".numbers").onclick = (event) => {
    output.value = ""; // убирает ноль из поля инпут
    const key = event.target.textContent; // переменная принимает значние нажатой кнопки
    // клавиша от 0-9 или .
    if (digit.includes(key)) {
      if (b === "" && sign === "") { // для ввода первого числа
        a += key;
        console.log(a);
        output.value = a;
      } else if (a !== "" && b !== "" && finish) { // а введена и б не равна пустой строке и если требуется продолжить счет, для этого условие
        b = key;
        finish = false;
        output.value = b;
      } else { // для ввода второго числа
        b += key;
        output.value = b;
      }
      console.log(b);
      return;
    }
    // нажатие на +-/*
    if (action.includes(key)) {
      sign = key;
      output.value = sign; // выводим знак на экран
      console.log(sign);
      return;
    }
    // нажатие =
    if (key === "=") {
      if (b == "") b = a; // если нажать 5+5 получим 10 и опять нажмем + 5
      switch (sign) {
        case "+":
          c = (+a) + (+b);
          break;
        case "-":
          c = (+a) - (+b);
          break;
        case "*":
          c = (+a) * (+b);
          break;
        case "/":
            if (b === "0") {
              output.textContent = "error";
              a="";
              b="";
              sign="";
              return (output.value = "");
            }
          c = (+a) / (+b);
          break;
      }
      finish = true; // заполнено 1 и 2 число, но если вдруг нужно еще 
      output.value = c.toFixed(2); //вывод результатов в инпут
      console.log(c);
      // вывод значений в список
      const textList = document.querySelector(".list li");
      const textListContent = textList.innerHTML;
      textList.innerHTML = `<li>${a} ${sign} ${b} = ${c}</li>`;
    }
    return;
  };
}
calc();




///----------решение от Юры----------------------------------------------------
//const $result = document.querySelector(".js-result");
// const $numbers = document.querySelector(".js-numbers");

// const operators = ["+", "–", "*", "/", "="];

// let text = "";
// let lastText = "";
// let operator = null;
// let equalBefore = false;
// let result = null;

// $numbers.addEventListener("click", (event) => {
//   if (event.target.type !== "button") return;
//   const what = event.target.textContent;
//   if (operators.includes(what)) operatorClicked(what);
//   else numberClicked(what);
// });

// function numberClicked(number) {
//   text += number;
//   display(text);
// }

// function operatorClicked(newOperator) {
//   operator = newOperator === "=" ? operator : newOperator;
//   const number = parseFloat(text, 10);

//   if (result && (number || equalBefore)) {
//     const num = number ? number : lastText;
//     const newResult =
//       Math.round(calc(result, number || lastText, operator) * 100) / 100;
//     result = newResult;
//     lastText = num;
//     display(newResult);
//   }
//   if (!number || !result) {
//     if (newOperator !== "=") display(newOperator);
//   }
//   if (!result) result = number;
//   equalBefore = newOperator === "=";
//   text = "";
// }

// function calc(a, b, operator) {
//   if (operator === "+") return a + b;
//   if (operator === "–") return a - b;
//   if (operator === "*") return a * b;
//   if (operator === "/") return a / b;
//   throw new Error("Unknown operator");
// }

// function display(result) {
//   $result.value = result;
// }