import React from 'react';
import Button from './Button';

const Jobs = ({ customClass }: { customClass: string }) => {
  return (
    <div className={`${customClass} flex flex-row  `}>
      <div
        className="bg-white w-[1700px] h-[139px] rounded-[0.625rem] "
        style={{ boxShadow: `1px 1px 4px 0px rgba(0, 0, 0, 0.25)` }}
      >
        <div className="mt-[18.5px] ml-[15px]">
          <Button
            title="+ add new job"
            containerStyle=" w-[179px] h-[35px]  bg-blue50 text-white rounded"
          />
        </div>
        <div
          className="py-5 mx-4 w-max-full "
          style={{ boxShadow: '0px 1px 0px 0px rgba(189, 189, 189, 1)' }}
        ></div>
      </div>
    </div>
  );
};

export default Jobs;
