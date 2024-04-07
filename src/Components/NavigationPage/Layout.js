import { Fragment } from 'react';
import NavigationPage from './NavigationPage';



const Layout = (props) => {
  return (
    <>
      <NavigationPage />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
