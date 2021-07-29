'use strict'

// Dom variables

const header = document.querySelector('.header');
const nav = document.querySelector('.nav')
const overlay = document.querySelector('.overlay');
const btnHamburger = document.getElementById('btnHamburger');
const allSection = document.querySelectorAll('.section');


// btnHamburger.addEventListener('click', function(){
//     if (header.classList.contains('.open')){
//         header.classList.remove('open');

//     }

//     else{
//         header.classList.add('.open');
//     }
// })


// // intersection observer 
// allSections.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add("section--hidden");
// });

// const revealSection = function (entries, observer) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove("section--hidden");
//   observer.unobserve(entry.target);
// };

//  const sectionObserver = new IntersectionObserver(revealSection, {
//    root: null,
//    threshold: 0.15,
//  });

 
// //  TODO: Implementing Sticky navbar
// const navHeight = nav.getBoundingClientRect().height;

// const stickyNav = function (entries) {
//   const [entry] = entries; //destructuring entries

//   if (!entry.isIntersecting) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `${navHeight}px`,
// });

// headerObserver.observe(header);

