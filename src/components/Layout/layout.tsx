import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Nav/nav';
import { SidebarLeft, SidebarRight } from '../Sidebar';

const Layout = (): ReactElement => {
  return (
    <div id='layout'>
      <header className='header'>React reference</header>
      <SidebarLeft show={false} />
      <main className="main">
        <Navigation />
        <Outlet />
      </main>
      <SidebarRight show={false} />
      <footer className='footer'>footer</footer>
    </div>
  );
};

export default Layout;
