'use client';
import React, { ChangeEvent, useState } from 'react';

interface FloatingLabelInputProps {
  label: string | JSX.Element;
  type: string;
  name: string;
  handleInputChange: (value: string | number) => void;
  inputValue: string | number;
  customInput?: string;
  customLabel?: string;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  handleInputChange,
  inputValue,
  customInput,
  customLabel,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e.target.value);
  };

  return (
    <div className="relative">
      <input
        className={`${customInput}  px-2 py-1 border rounded focus:outline-none text-xs ${
          isFocused ? 'border-black' : 'border-grey100'
        }`}
        {...rest}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={e => handleChange(e)}
        value={inputValue}
      />
      {label && (
        <label
          className={`${customLabel} transition-all absolute left-2 ${
            isFocused ? '-top-2.5 text-black' : 'top-1 text-grey200'
          } px-1 text-xs bg-white pointer-events-none`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FloatingLabelInput;
