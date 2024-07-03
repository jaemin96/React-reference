import { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';

type InputProps = {
  name: string;
  label: string;
  required?: boolean;
  type?: string;
  className?: string;
  isLabel?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
  name,
  label,
  className,
  isLabel = false,
  readOnly = false,
  disabled = false,
  type = 'text',
  placeholder,
  required = false,
  onChange,
}) => {
  const { register } = useFormContext();
  return (
    <fieldset className={className} style={{ border: 'none' }}>
      {isLabel && <label htmlFor={name}>{label}</label>}
      <input
        {...register(name, { required })}
        id={name}
        type={type}
        disabled={disabled}
        readOnly={readOnly}
        onChange={onChange}
        placeholder={placeholder}
      />
    </fieldset>
  );
};

export default Input;
