import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/navbar.css';
import '../styles/jumbotron.css';
import '../styles/footer.css';
import '../styles/responsive.css';
import dataRestaurant from '../DATA.json';

const navbar = document.getElementById('menu-navbar');
const toggleBtn = document.getElementById('toggle-bar');

toggleBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

const restoElement = document.querySelector('restaurant-list');
restoElement.setAttribute('class', 'restaurant');

dataRestaurant.restaurants.forEach((item) => {
  // eslint-disable-next-line no-use-before-define
  const desc = longTextDescription(item.description, 180);
  const resto = document.createElement('restaurant');
  resto.setAttribute('class', 'restaurant-item');
  resto.innerHTML = `
    <div class="card-image">
        <div tabindex="0" class="restaurant-rating">
            <span>Rating ${item.rating}</span>
        </div>
        <img class="restaurant-image"
            src="${item.pictureId}"
            alt="${item.name}">
    </div>
    <div class="restaurant-container">
        <h1 class="restaurant-heading"><a href="#">${item.name}</a></h1>
        <h5 tabindex="0">${item.city}</h5>
        <p class="restaurant-description">${desc}</p>
    </div>
    `;
  restoElement.appendChild(resto);
});

// eslint-disable-next-line camelcase
function longTextDescription(text, max_length) {
  // eslint-disable-next-line camelcase
  if (text.length > max_length - 5) {
    return `${text.substring(0, max_length).trimEnd()}.....`;
  }
  return text;
}
