import React from 'react';
interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  options: Option[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  LabelStyle?: string;
  SelectStyle?: string;
  PlaceHolder: string;
  OptionStyle: string;
}

const SelectField = ({
  label,
  options,
  value,
  onChange,
  LabelStyle,
  SelectStyle,
  PlaceHolder,
  OptionStyle
}: SelectFieldProps) => {
  return (
    <div>
      <label className={LabelStyle}>{label}</label>
      <select
        className={`${SelectStyle} `}
        value={value}
        onChange={onChange}
        placeholder={PlaceHolder}
      >
        {options.map(option => (
          <option
            key={option.value}
            value={option.value}
            className={OptionStyle}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
