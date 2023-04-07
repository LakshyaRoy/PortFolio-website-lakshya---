const menuBars = document.getElementById("menu-bars");
const secText = document.querySelector(".sectext");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
navItems = [nav1, nav2, nav3, nav4, nav5];

// control animation function
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    // console.log(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
    nav.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    );
  });
}

function toggleNav() {
  // toggle menu
  menuBars.classList.toggle("change");
  //   toggle menu active
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    // animate in
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    // animate in nav items
    navAnimation("out", "in");
  } else {
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    // animate in nav items
    navAnimation("in", "out");
  }
}

// event listener
menuBars.addEventListener("click", toggleNav);
// nav1.addEventListener("click", toggleNav);
// nav2.addEventListener("click", toggleNav);
// nav3.addEventListener("click", toggleNav);
// nav4.addEventListener("click", toggleNav);
// nav5.addEventListener("click", toggleNav);

navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});

const textLoader = () => {
  setTimeout(() => {
    secText.textContent = "Lakshya Roy.";
  }, 0);

  setTimeout(() => {
    secText.textContent = "Frontend Developer.";
  }, 4000);
  setTimeout(() => {
    secText.textContent = "Gamer.";
  }, 8000);
};

textLoader();
setInterval(textLoader, 12000);
// const loader = () => {
//   setInterval(() => {
//     textLoader();
//   }, 5000);
// };

// loader();
