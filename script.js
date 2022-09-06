// Finding Elements
const openMobileMenuButton = document.querySelector("#open-mobile-menu");
const closeMobileMenuButton = document.querySelector("#close-mobile-menu");

// Functions
const openMobileMenu = () => {
  console.log("Opening mobile");
};
openMobileMenuButton.addEventListener("click", openMobileMenu);

const closeMobileMenu = () => {
  console.log("Closing mobile");
};
closeMobileMenuButton.addEventListener("click", closeMobileMenu);
