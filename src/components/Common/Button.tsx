import React from 'react';
import { CustomButtonProps } from '@/types';

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
