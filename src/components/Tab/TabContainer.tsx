import React, { ReactNode, useState } from 'react';
import { TabContent, TabItem, TabMenu } from './';

interface TabContainerProps {
  activeColor?: string;
  activeBgColor?: string;
  inactiveColor?: string;
  inactiveBgColor?: string;
  fontSize?: string;
  borderColor?: string;
  children: ReactNode;
}

export const TabContainer = (props: TabContainerProps) => {
  const { children, activeColor, activeBgColor, inactiveColor, inactiveBgColor, fontSize, borderColor } = props;
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="tab-container" data-testid="tab">
      <TabMenu borderColor={borderColor}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return (
              <TabItem
                activeColor={activeColor}
                activeBgColor={activeBgColor}
                inactiveColor={inactiveColor}
                inactiveBgColor={inactiveBgColor}
                borderColor={borderColor}
                fontSize={fontSize}
                key={index}
                index={index}
                isActive={index === activeTab}
                onClick={() => handleTab(index)}
              >
                {child.props.label}
              </TabItem>
            );
          }
          return null;
        })}
      </TabMenu>
      <TabContent>
        {React.Children.map(children, (child, index) =>
          React.isValidElement(child) && index === activeTab ? child : null
        )}
      </TabContent>
    </div>
  );
};
