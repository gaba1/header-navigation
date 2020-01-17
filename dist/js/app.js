  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.header-bottom');
  const navLinks = document.querySelectorAll('.fa-ellipsis-h');
  const sideMenu = document.querySelector('.side-menu li a');


  burger.addEventListener('click', (e) => {
    // Toggle Nav
    nav.classList.toggle('nav-active');

    // Burger Animation
    burger.classList.toggle('toggle');

    e.preventDefault;
  });

  document.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target.classList.contains('fa-ellipsis-h')) {
      console.log(e.target.parentElement.parentElement.nextElementSibling);
      e.target.parentElement.parentElement.nextElementSibling.classList.toggle('show');
    } else if (e.target.tagName === "A") {
      e.target.parentElement.nextElementSibling.classList.toggle('show');
    }
    e.preventDefault;
  })

  // 