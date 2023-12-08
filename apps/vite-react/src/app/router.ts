import { createHistoryRouter } from 'atomic-router';
import { createRoutesView } from 'atomic-router-react';
import { HomePage } from '../pages/home';

export const router = createHistoryRouter({
  routes: [
    {
      path: '/',
      route: HomePage.model.route,
    },
  ],
});

export const RoutesView = createRoutesView({
  routes: [
    {
      route: HomePage.model.route,
      view: HomePage.ui.PageView,
    },
  ],
});
