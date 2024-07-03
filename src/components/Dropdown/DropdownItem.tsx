import { ReactNode } from 'react';

export interface DropdownItemProps {
  onClick: () => void;
  children: ReactNode;
}

const DropdownItem = ({ onClick, children }: DropdownItemProps) => {
  return <li onClick={onClick}>{children}</li>;
};

export default DropdownItem;
