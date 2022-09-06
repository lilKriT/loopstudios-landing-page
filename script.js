// Finding Elements
const openMobileMenuButton = document.querySelector("#open-mobile-menu");
const closeMobileMenuButton = document.querySelector("#close-mobile-menu");

const mobileMenu = document.querySelector("#mobile-menu");

// Functions
const openMobileMenu = () => {
  //   console.log("Opening mobile");
  mobileMenu.classList.add("mobileMenuOpen");
};
openMobileMenuButton.addEventListener("click", openMobileMenu);

const closeMobileMenu = () => {
  //   console.log("Closing mobile");
  mobileMenu.classList.remove("mobileMenuOpen");
};
closeMobileMenuButton.addEventListener("click", closeMobileMenu);
