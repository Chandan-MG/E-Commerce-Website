
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StorePage from './Components/StorePage/StorePage.js';
import AboutPage from './Components/AboutPage/AboutPage.js';
import HomePage from './Components/HomePage/HomePage.js';
import NavigationPage from './Components/NavigationPage/NavigationPage.js';
import ContactPage from './Components/ContactPage/ContactPage.js';
import ProductDetail from './Components/StorePage/Products/ProductDetail.js';
import CartContextProvider from './Components/StorePage/Context/Cart-context.js';
import Cart from './Components/StorePage/Cart/Cart.js';
import AuthForm from './Components/AuthPage/AuthForm.js';
// import { Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.js';
import { useContext } from 'react';
import AuthContext from './Components/AuthPage/Auth-Context.js';
import Layout from './Components/NavigationPage/Layout.js';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.js';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <CartContextProvider>
//         <NavigationPage />
//         <Cart />
//       </CartContextProvider>
//     ),
//     children: [
//       { path: '/', element: <HomePage /> },
//       { path: '/store', element: <StorePage /> },
//       { path: '/about', element: <AboutPage />},
//       { path: '/contact', element: <ContactPage />},
//       { path: '/productdetail/:title', element: <ProductDetail />},
//       { path: '/contact', element: <AuthForm />},
//     ]
//   }
// ])



function App() {
  const authCtx = useContext(AuthContext);
  // console.log(authCtx.isLoggedIn);

  return (
    // <RouterProvider router={router} />
    <Router>
      <Layout>
      {/* <NavigationPage /> */}
        <Switch>
            { authCtx.isLoggedIn && (<Route path='/home'>
              <HomePage />
            </Route>)}

          
            { !authCtx.isLoggedIn && (<Route path='/' exact>
              <AuthForm />
            </Route>)}

          
            { authCtx.isLoggedIn && (<Route path='/store'>
              <StorePage />
            </Route>)}
            { authCtx.isLoggedIn && (<Route path='/productdetail:title'>
              <ProductDetail />
            </Route>)}

            { authCtx.isLoggedIn && (<Route path='/about'>
              <AboutPage />
            </Route>)}
        

          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}


export default App;
