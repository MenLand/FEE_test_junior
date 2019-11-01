const navMenu = document.getElementById('menu');

navMenu.onclick = (e) => {
    const topMenu = document.getElementById('top-menu');
    console.log(topMenu);
    topMenu.classList.toggle('show');
}

$('.slider').slick({
    dots : true,
    autoplay: true,
    infinite: true,
});