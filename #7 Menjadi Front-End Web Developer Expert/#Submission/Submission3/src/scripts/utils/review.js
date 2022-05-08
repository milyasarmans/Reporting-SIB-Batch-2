import RestaurantDbSource from '../data/restaurantdb-source';

const Review = (url, name, review) => {
  const data = {
    id: url.id,
    name,
    review,
  };
  RestaurantDbSource.review(data);

  const container = document.querySelector('#post-review');
  const time = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', time);
  const addReview = `                   
    <div class="review-container">
        <p class="review-container-name">${name}</p>
        <span class="review-container-date">${date}</span>
        <p class="review-container-review">${review}</p>
    </div>
    `;
  container.innerHTML += addReview;
};

export default Review;
