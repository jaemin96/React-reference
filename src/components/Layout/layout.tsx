import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Nav/nav';

const Layout = (): ReactElement => {
  return (
    <>
      <header>React reference</header>
      <main>
        <Navigation />
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
