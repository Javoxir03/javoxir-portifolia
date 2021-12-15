window.addEventListener('scroll',function () {
    var scroll = document.getElementById('nav');
    scroll.classList.toggle("fixed",window.scrollY);
 })