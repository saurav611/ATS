import { MouseEventHandler, ReactNode } from 'react';

export interface CustomButtonProps {
  types: 'button' | 'submit' | 'reset' | undefined;
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  customClass?: string;
  Children?: ReactNode;
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
