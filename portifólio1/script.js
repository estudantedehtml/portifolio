const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');

  
  const active = nav.classList.contains('active');

  const off = document.getElementById('section');
  off.classList.toggle('off');  
  
  const scroll = document.getElementById('scroll');
  scroll.classList.toggle('scroll');


  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

////////////


const item = document.querySelectorAll("[data-anime]");
    
const animeScroll = () => {
 const windowTop = window.pageYOffset + ((window.innerHeight * 4) / 4) ;

 item.forEach((element) => {
     if (windowTop > element.offsetTop) {
         element.classList.add("animate");
     } else {
      element.classList.remove("animate");
     }
     
    });
};

  animeScroll();

 window.addEventListener("scroll", ()=> {
     animeScroll();
 })