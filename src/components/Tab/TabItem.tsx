import { ReactNode } from 'react';

interface TabItemProps {
  activeColor?: string;
  activeBgColor?: string;
  inactiveColor?: string;
  inactiveBgColor?: string;
  borderColor?: string;
  fontSize?: string;
  isActive: boolean;
  index: number;
  children: ReactNode;
  onClick: (index: number) => void;
}

export const TabItem = ({
  activeColor,
  activeBgColor,
  inactiveColor,
  inactiveBgColor,
  borderColor,
  fontSize,
  isActive,
  index,
  children,
  onClick,
}: TabItemProps) => {
  const tabItemInactiveStyle = {
    backgroundColor: inactiveBgColor,
    color: inactiveColor,
    fontSize,
  };
  const tabItemActiveStyle = {
    backgroundColor: activeBgColor,
    color: activeColor,
    fontSize,
    borderColor,
  };
  return (
    <button
      data-testid={`tabItem-${index + 1}`}
      className={`tab-item ${isActive ? 'active' : ''}`}
      onClick={() => {
        onClick(index);
      }}
      style={isActive ? tabItemActiveStyle : tabItemInactiveStyle}
    >
      {children}
    </button>
  );
};
