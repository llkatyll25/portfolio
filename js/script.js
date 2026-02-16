// Toggle the 'active' class on the search form when the search button is clicked
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

// Toggle the 'active' class on the navbar when the menu button is clicked
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

// Remove the 'active' class from the search form and navbar when scrolling
window.onscroll = () => {
    searchForm.classList.remove('active');
    navbar.classList.remove('active');

    // Add or remove the 'active' class on the header based on the scroll position
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
}
