/* eslint-disable @typescript-eslint/no-explicit-any */
import { MouseEventHandler, ReactNode } from 'react';

export interface CustomButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  customClass?: string;
  Children?: ReactNode;
  types?: 'button' | 'submit' | 'reset' | undefined;
}

export interface customJobcard {
  heading: string;
  customClass?: string;
  totalCandidates?: number;
  activeCandidates?: number;
  JobId?: number;
  Location: string;
  JobType: string;
}
export interface customform {
  customClass?: string;
}

export interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  InputStyle?: string;
  LabelStyle?: string;
  PlaceHolder?: string;
  Value?: string;
}

export interface CandidateInfoProp {
  Imagesrc?: string;
  CustomClass?: string;
  CandidateName: string;
  age: number;
  Gender: string;
  CandidateLastname: string;
  Email: string;
  Location: string;
  MobNumber: string;
  Skills?: string[];
  Experience?: string;
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
