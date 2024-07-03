import { ReactNode } from 'react';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'medium' | 'small' | 'large';
  children: ReactNode;
  type?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  type = 'submit',
  onClick,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'button--primary' : 'button--secondary';

  return (
    <button
      type={type}
      className={['button', `button--${size} ${mode}`].join(' ')}
      style={{ backgroundColor }}
      onClick={onClick}
      {...props}
    >
      {props.children}
    </button>
  );
};
