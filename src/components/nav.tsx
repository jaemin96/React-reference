import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = (): ReactElement => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/test">TestPage</NavLink>
        </li>
      </ul>
    </nav>
  );
};
