import DefaultLayout from '../../layout/default';
import SearchView from '../../views/search';
import MovieView from '../../views/movie';
import NotFound from '../../views/not-found';

export const routes = {
  path: '/',
  component: DefaultLayout,
  indexRoute: { component: SearchView },
  childRoutes: [
    {
      path: 'search/:query',
      component: SearchView
    },
    {
      path: 'movie/:movieId',
      component: MovieView
    },
    {
      path: '*',
      component: NotFound
    }
  ]
};
