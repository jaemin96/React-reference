import React from 'react';

interface ToggleProps {
  isToggled?: boolean;
}

export const Toggle = ({ isToggled = false }: ToggleProps) => {
  const [visible, setVisible] = React.useState(isToggled);
  const onOff = visible ? 'toggle--on' : 'toggle--off';

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className={['toggle', `${onOff}`].join(' ')} onClick={handleVisible} data-testid="toggle">
      <div className="toggle--circle"></div>
    </div>
  );
};
