function myFunction() {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("actve");
  let section = document.querySelector(`.hamburger`);

  // section.classList.add("activeNav")
  if (section.classList.contains("activeNav"))
    section.classList.remove("activeNav");
  else section.classList.add("activeNav");
}
