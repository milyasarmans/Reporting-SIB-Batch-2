const assert = require('assert');

Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const emptyText = 'Tidak ada restaurant yang difavoritkan';

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#restaurant');
  I.see(emptyText, '#restaurant');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(emptyText, '#restaurant');

  I.amOnPage('/');
  I.wait(5);
  I.seeElement('.restaurant-item');

  const firstRestaurant = locate('.restaurant-heading').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.seeElement('.restaurant-item a');
  I.click(locate('.restaurant-item a').first());
  I.wait(5);

  // liking
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.wait(5);
  const likedRestaurantTitle = await I.grabTextFrom(locate('.restaurant-heading').first());
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see(emptyText, '#restaurant');

  I.amOnPage('/');
  I.wait(5);
  I.seeElement('.restaurant-item');

  const firstRestaurant = locate('.restaurant-heading').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.seeElement('.restaurant-item a');
  I.click(locate('.restaurant-item a').first());
  I.wait(5);

  // liking
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.wait(5);
  const likedRestaurantTitle = await I.grabTextFrom(locate('.restaurant-heading').first());
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  // Unliking
  I.click(firstRestaurantTitle);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see(emptyText, '#restaurant');
});
