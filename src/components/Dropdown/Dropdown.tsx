import React, { ReactNode } from 'react';
import { DropdownItemProps } from './DropdownItem';

interface DropdownProps {
  text?: string;
  children: ReactNode;
}

const Dropdown = ({ text, children }: DropdownProps) => {
  const [isDrop, setIsDrop] = React.useState<boolean>(false);

  const handleDrop = () => {
    setIsDrop(!isDrop);
  };

  return (
    <div className="dropdown">
      <label className="dropdown-label" onClick={handleDrop}>
        {text}
      </label>
      {isDrop && (
        <ul className="dropdown-item">
          {React.Children.map(children, (child) => {
            if (React.isValidElement<DropdownItemProps>(child)) {
              return React.cloneElement(child);
            }
            return null;
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
