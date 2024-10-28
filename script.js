const logo = document.querySelector(".logo");
logo.addEventListener("mouseenter", function() {
    logo.style.transform = "scale(1.1)"; // Aumenta el tamaño al pasar el mouse
});
logo.addEventListener("mouseleave", function() {
    logo.style.transform = "scale(1)";
});

let lastScrollTop = 0; // Última posición del scroll

window.addEventListener("scroll", function() {
    let header = document.querySelector("header"); // Selecciona el primer elemento <header>
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Si se baja más de lo que estaba, oculta el header
    if (currentScroll > lastScrollTop) {
        header.style.top = "-100px"; // Ajusta este valor según la altura del header
    } else {
        header.style.top = "0"; // Muestra el header al subir
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar valores negativos
});
