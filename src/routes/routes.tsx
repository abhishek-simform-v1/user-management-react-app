import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import PagenotFound from '../components/PagenotFound';

/** import all components */

/** root routes */
export const routerOfApp = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/signup ',
    element: <Register />,
  },
  {
    path: '*',
    element: <Register />,
  },
]);
