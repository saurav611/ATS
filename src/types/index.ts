/* eslint-disable @typescript-eslint/no-explicit-any */
import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}
export interface dropdownProps {
  renderElement: (item: any) => JSX.Element;
  placeholder: string;
  dataList: any[];
  keyGenerator: (item: any) => string;
  toggleDropdown?: boolean;
  handleDataSelection: (item: any) => void;
  selectedValue?: string | number;
  customClass?: string;
  selectedKeyForCheck?: string;
  disbaled?: boolean;
}
