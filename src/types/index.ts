import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
  type: string;
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  customtitle?: string;
}
