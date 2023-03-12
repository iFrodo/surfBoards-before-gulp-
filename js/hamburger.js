let hamburgerMenu = document.querySelector("#burgerMenu");
let hamburgerButton = document.querySelector("#burger");
hamburgerButton.addEventListener("click", function (e) {
  e.preventDefault();
  hamburgerButton.classList.toggle("burger--active");
  hamburgerMenu.classList.toggle("menu--active");
});
//   if (
//     hamburgerButton.classList.contains("burger--active") == true &&
//     hamburgerMenu.classList.contains("burger--active") == true
//   ) {
//     hamburgerButton.classList.remove == "burger--active";
//     hamburgerMenu.classList.remove == "menu--active";
//   } else if (
//     hamburgerButton.classList.contains("burger--active") != true &&
//     hamburgerMenu.classList.contains("burger--active") != true
//   ) {
//       hamburgerButton.classList.add("burger--active");
//       hamburgerMenu.classList.add("menu--active");
//   }
// });

let form = document.querySelector(".form");
let formElements = form.elements;
formElements[7].innerText = "Нашел через js";
formElements[0].value = "Игорь";
formElements[1].value = "+79780001000";
formElements[2].value = "ulica";
formElements[3].value = "dom";
formElements[4].value = "korp";
formElements[5].value = "kv";
formElements[6].value = "5";
formElements[7].value = "textarea";
formElements[10].checked = true;
let name = formElements[0].value;
let phone = formElements[1].value;
let adress =
  formElements[2].value +
  " " +
  formElements[3].value +
  " " +
  formElements[4].value +
  " " +
  formElements[5].value +
  " " +
  formElements[6].value;
let comment = formElements[7].value;
let paymant = "";
let recall = "";

formElements[11].addEventListener("click", function (e) {
  e.preventDefault();
  if (formElements[8].checked == true) {
    paymant = "Оплата наличными";
  } else {
    paymant = "Оплата картой";
  }
  alert(name +phone+' '+adress+' '+paymant);
});
console.log(formElements);
console.log(name, phone, adress, paymant);

//----------------------//----------------//-------#1 Фильтрация строки-------//---------------//----------------//
const vowels = ["у", "е", "ы", "а", "о", "э", "ё", "я", "и"];

const getVowels = (stringToFilter) => {
  let extractedVowels = "";
  for (let i = 0; i < stringToFilter.length; i++) {
    const currentLetter = stringToFilter[i].toLowerCase();
    if (vowels.includes(currentLetter)) {
      extractedVowels += currentLetter;
    }
  }
  return extractedVowels;
};

console.log(getVowels("Привет,раз два три "));
//----------------------//----------------//-------#2 Выборка объекта-------//---------------//----------------//
const workers = [
  { name: "John", salary: 500 },
  { name: "Mike", salary: 1300 },
  { name: "Linda", salary: 1000 },
  { name: "Linda", salary: 300 },
  { name: "Linda", salary: 999 },
  { name: "Linda", salary: 1500 },
  { name: "Linda", salary: 1500 },
  { name: "Linda", salary: 1500 },
];
const getWorthyWorkers = (workers) => {
  const worthyWorkers = [];
  for (let i = 0; i < workers.length; i++) {
    const currentWorker = workers[i];
    console.log(currentWorker);
    if (currentWorker.salary >= 1000) {
      worthyWorkers.push(currentWorker.name);
    }
  }
  return worthyWorkers;
};
console.log(getWorthyWorkers(workers));
//----------------------//----------------//------#3 Анализ строки-------//---------------//----------------//

const path = "/123/asdsadasdasd.html";

const isHtml = (path) => {
  const requiredExt = ".html";
  const pathExt = path.slice(-5);
  return pathExt === requiredExt;
};

console.log(isHtml(path));

//----------------------//----------------//-------Фильтрация массива-------//---------------//----------------//

const mixedArray = [2, 3, 2, 3, 2, 3, 2, 3];

const isEven = (num) => {
  return num % 2 === 0;
  console.log(number);
};
const filterArray = (arrayToFilter, filterFn) => {
  const filteredArray = [];
  // for (let i = 0; i < arrayToFilter.length; i++) {
  //   let number = arrayToFilter[i];
  //   console.log(number)
  //   if (filterFn(number)) {

  //     filteredArray.push(number);
  //   }
  //   return filteredArray
  // }

  arrayToFilter.forEach((num) => {
    if (filterFn(num)) {
      filteredArray.push(num);
    }
  });

  return filteredArray;
};

console.log(filterArray(mixedArray, isEven));
