let hamburgerMenu = document.querySelector("#burgerMenu");
let hamburgerButton = document.querySelector("#burger");
hamburgerButton.addEventListener("click", function (e) {
  e.preventDefault()
  hamburgerButton.classList.toggle('burger--active')
  hamburgerMenu.classList.toggle('menu--active')
}
)
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

