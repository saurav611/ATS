import React from 'react';

export default function RadioButton({
  customWrapperClass = '',
  title = '',
  checked = false
}: {
  customWrapperClass?: string;
  title: string;
  checked: boolean;
}) {
  return (
    <div className={`${customWrapperClass} flex items-center cursor-pointer`}>
      <div className="w-[0.875rem] h-[0.875rem] rounded-full border border-grey100 flex justify-center items-center">
        {checked && <div className="w-2 h-2 rounded-full bg-blue50"></div>}
      </div>
      <p className="text-xs ml-[0.625rem]">{title}</p>
    </div>
  );
}
