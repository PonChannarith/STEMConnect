import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './components/layout/Layout';
import App from './App';
import Blog from './page/blog/Blog';
import Book from './page/book/Book';
import Lesson from './page/lesson/Lesson';
import Error from './page/error-page/Error';
import Create from './page/create/Create';
import AboutUs from './page/about-us/AboutUs';
import Home from './page/home/Home';
import SchoolPage from './page/schoolPage/SchoolPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      // {
      //   path: '/',
      //   element: <App />
      // },
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/book',
        element: <Book />
      },
      {
        path: '/lesson',
        element: <Lesson />
      },
      {
        path: '/schoolPage',
        element: <SchoolPage />,
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/about-us',
        element: <AboutUs />
      },
      {
        path: '/create',
        element: <Create />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
