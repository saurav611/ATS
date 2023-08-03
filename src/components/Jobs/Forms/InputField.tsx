'use client';
import React from 'react';
import { InputFieldProps } from '@/types';

const InputField = ({
  label,
  name,
  type,
  required,
  InputStyle,
  LabelStyle,
  PlaceHolder
}: InputFieldProps) => {
  return (
    <div>
      <div>
        <label htmlFor={name} className={`${LabelStyle} `}>
          {label}
        </label>
        <input
          type={type}
          placeholder={PlaceHolder}
          id={name}
          name={name}
          required={required}
          className={`${InputStyle} `}
        />
      </div>
    </div>
  );
};

export default InputField;
