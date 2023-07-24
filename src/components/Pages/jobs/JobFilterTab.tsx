import RadioButton from '@/components/Common/RadioButton';
import React from 'react';

export default function JobFilterTab() {
  return (
    <div
      className="bg-white py-[0.6875rem] px-5 rounded-lg"
      style={{ boxShadow: '0px -1px 4px 0px rgba(0, 0, 0, 0.25)' }}
    >
      <div className="pb-[0.9375rem] border-b border-grey100 flex">
        <div className="pr-3 border-r border-grey100">ds</div>
        <div className="px-3 border-r border-grey100">
          <p className="text-xs">Job status</p>
          <div className="flex mt-[0.9375rem]">
            <RadioButton title={'All Jobs'} checked={false} />
            <RadioButton
              customWrapperClass="ml-5"
              title={'Published'}
              checked={false}
            />
            <RadioButton
              customWrapperClass="ml-5"
              title={'Closed'}
              checked={false}
            />
          </div>
        </div>
        <div className="px-3 border-r border-grey100">
          <p className="text-xs">Department</p>
        </div>
        <div className="px-3 ">
          {' '}
          <p className="text-xs">Location</p>
        </div>
      </div>
    </div>
  );
}
