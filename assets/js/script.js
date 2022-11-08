// make navigation work simple js script
const btnNav = document.querySelectorAll(".btnn");
const headerEL = document.querySelector(".header");
console.log(btnNav);

// adding event listener  function on node list
btnNav.forEach(function (btn) {
  btn.addEventListener("click", function () {
    headerEL.classList.toggle("nav-open");
  });
});

//stickynav
const header = document.querySelector(".header");
const nav = document.querySelector(".sticky");
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("stick");
  else nav.classList.remove("stick");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);
