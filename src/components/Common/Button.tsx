import { CustomButtonProps } from '@/types';
import React from 'react';

const Button = ({
  title,
  containerStyle,
  handleClick,
  disabled,
  customClass,
  types,
  Children
}: CustomButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={types}
      className={` ${containerStyle}`}
      onClick={handleClick}
    >
      {Children}
      <span className={`${customClass}flex-1`}>{title}</span>
    </button>
  );
};

export default Button;
