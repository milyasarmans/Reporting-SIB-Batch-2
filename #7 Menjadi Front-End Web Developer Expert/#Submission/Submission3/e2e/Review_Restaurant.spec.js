Feature('Review Restaurant');

Before(({ I }) => {
    I.amOnPage('/');
});

Scenario('Review on a restaurant', async ({ I }) => {
    I.amOnPage('/');
    I.wait(5);
    I.seeElement('.restaurant-item');
  
    const firstRestaurant = locate('.restaurant-heading').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  
    I.seeElement('.restaurant-item a');
    I.click(locate('.restaurant-item a').first());
    I.wait(5);

    I.seeElement('form');
    I.fillField('inputName', 'e2e');
    I.fillField('inputReview', 'Test');
    I.click('#submit-review');

    I.see('Test', '.review-container');
});