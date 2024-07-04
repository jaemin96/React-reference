interface SpinnerProps {
  color?: string;
  size?: 'large' | 'medium' | 'small';
}

export const Spinner = (props: SpinnerProps) => {
  const { size = 'medium', color = 'black' } = props;

  return (
    <>
      <div className={['spinner', `spinner-${size}`].join(' ')} style={{ borderColor: color }}></div>
    </>
  );
};
