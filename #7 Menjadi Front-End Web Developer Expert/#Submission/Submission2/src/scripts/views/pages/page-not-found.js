const PageNotFound = {
  async render() {
    return `
        <div class="page-not-found">
        </div>
    `;
  },

  async afterRender() {
    const notFound = document.querySelector('.page-not-found');
    notFound.innerHTML = '<img src="images/page-not-found.png" alt="page not found"/>';
  },
};

export default PageNotFound;
