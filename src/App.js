
import './App.css';

import {createBrowserRouter, Route, Router, RouterProvider} from 'react-router-dom';
import StorePage from './Components/StorePage/StorePage.js';
import AboutPage from './Components/AboutPage/AboutPage.js';
import HomePage from './Components/HomePage/HomePage.js';
import NavigationPage from './Components/NavigationPage/NavigationPage.js';
import ContactPage from './Components/ContactPage/ContactPage.js';
import ProductDetail from './Components/StorePage/Products/ProductDetail.js';
import CartContextProvider from './Components/StorePage/Context/Cart-context.js';
const router = createBrowserRouter([
  {
    path: '/',
    element: <NavigationPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/store', element: <StorePage /> },
      { path: '/about', element: <AboutPage />},
      { path: '/contact', element: <ContactPage />},
      { path: '/productdetail/:title', element: <ProductDetail />}
    ]
  }
])


function App() {
  
  return (
    <RouterProvider router={router} />
  );
}

// const App = () => {
//   return (
//     <Router>
//       <CartContextProvider> {/* Wrap your components with the CartContextProvider */}
//         <Switch>
//           <Route path="/">
//             <HomePage />
//           </Route>
//           <Route path="/store">
//             <StorePage />
//           </Route>
//           <Route path="/about">
//             <AboutPage />
//           </Route>
//           <Route path="/contact">
//             <ContactPage />
//           </Route>
//           <Route path="/productdetail/:title">
//             <ProductDetail />
//           </Route>
//         </Switch>
//       </CartContextProvider>
//     </Router>
//   );
// };

export default App;
