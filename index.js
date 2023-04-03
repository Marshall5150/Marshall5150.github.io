const links = document.querySelectorAll(".navbar__link");
const navbarDropdownBtn = document.querySelector(".js-dropdown-btn");
const progressBar = document.querySelector(".js-progress-bar")
const sectionTitle = document.querySelector(".js-section-title");
const sections = document.querySelectorAll(".js-jump-links-sections .section");
const sectionTitles = document.querySelectorAll(".js-jump-links-sections .section h2");
let isHidden = true;

function toggleDropdown() {
  const navbarLinksMenu = document.querySelector(".js-dropdown-menu");
  navbarLinksMenu.classList.toggle("is-visible");
  isHidden = !isHidden;

  if (isHidden) {
    navbarDropdownBtn.innerHTML = "Show";
    navbarDropdownBtn.ariaExpanded = false;
  } else {
    navbarDropdownBtn.innerHTML = "Hide";
    navbarDropdownBtn.ariaExpanded = true;
  }
}

function handleScroll() {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;

  progressBar.value = scrolled;
}

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove("is-active"));
  links[index].classList.add("is-active");

  sectionTitle.innerHTML = sectionTitles[index].innerHTML;
}

navbarDropdownBtn.addEventListener("click", toggleDropdown);
window.addEventListener("scroll", handleScroll);
window.addEventListener("scroll", changeLinkState);
