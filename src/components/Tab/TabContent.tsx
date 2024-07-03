import { ReactNode } from 'react';

interface TabContentProps {
  children: ReactNode;
}

export const TabContent = ({ children }: TabContentProps) => {
  return (
    <div data-testid="tabContent" className="tab-content">
      {children}
    </div>
  );
};
