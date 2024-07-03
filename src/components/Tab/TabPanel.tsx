import { ReactNode } from 'react';

interface TabPanelProps {
  label: string;
  children: ReactNode;
}

export const TabPanel = ({ children }: TabPanelProps) => {
  return <div className="tab-panel">{children}</div>;
};
