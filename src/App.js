
import './App.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import StorePage from './Components/StorePage/StorePage.js';
import AboutPage from './Components/AboutPage/AboutPage.js';
import HomePage from './Components/HomePage/HomePage.js';
import NavigationPage from './Components/NavigationPage/NavigationPage.js';
import ContactPage from './Components/ContactPage/ContactPage.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavigationPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/store', element: <StorePage /> },
      { path: '/about', element: <AboutPage />},
      { path: '/contact', element: <ContactPage />}
    ]
  }
])


function App() {
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
