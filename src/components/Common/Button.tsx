import { CustomButtonProps } from '@/types';
import React from 'react';

const Button = ({
  title,
  containerStyle,
  handleClick,
  disabled
}: CustomButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={'button'}
      className={` ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={'flex-1'}>{title}</span>
    </button>
  );
};

export default Button;
