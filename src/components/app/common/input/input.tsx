import { type FC } from 'react';
import { Input } from 'react-daisyui';
import type { InputProps } from 'react-daisyui';

const InputComponent: FC<InputProps> = ({ className = '', color = 'ghost', ...props }) => (
    <Input color={color} className={`w-full placeholder:text-sm ${className}`} {...props} />
);

export default InputComponent;
