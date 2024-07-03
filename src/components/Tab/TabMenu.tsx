import React, { ReactNode } from 'react';

interface TabMenuProps {
  borderColor?: string;
  children: ReactNode;
}

export const TabMenu = ({ borderColor, children }: TabMenuProps) => {
  return (
    <div data-testid="tabMenu" className="tab-menu" style={{ borderBottomColor: borderColor }}>
      {children}
    </div>
  );
};
