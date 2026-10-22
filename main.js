// Mobile menu toggle
var burger = document.getElementById('burger');
var menu = document.getElementById('menu');

burger.onclick = function () {
  menu.classList.toggle('open');
};

menu.onclick = function (e) {
  if (e.target.tagName === 'A') {
    menu.classList.remove('open');
  }
};

// Fade-in on scroll
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.rv').forEach(function (el) {
  observer.observe(el);
});

// Highlight the active nav link while scrolling
var links = [].slice.call(document.querySelectorAll('nav a'));
var sections = links.map(function (a) {
  return document.querySelector(a.getAttribute('href'));
});

addEventListener('scroll', function () {
  var y = scrollY + 120;
  var current = 0;

  sections.forEach(function (s, i) {
    if (s && s.offsetTop <= y) {
      current = i;
    }
  });

  links.forEach(function (a, i) {
    a.classList.toggle('on', i === current);
  });
});