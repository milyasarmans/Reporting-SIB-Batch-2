import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import PageNotFound from '../views/pages/page-not-found';

const routes = {
  '/': Home, // default page
  '/detail/:id': Detail,
  '/favorite': Favorite,
  '/404': PageNotFound,
};

export default routes;
