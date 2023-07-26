import React from 'react';
import Image from 'next/image';
import Button from '../Common/Button';
import { customJobcard } from '@/types';
import style from '../Styles/Form.module.scss';

const JobCard = ({
  heading,
  customClass,
  activeCandidates,
  totalCandidates,
  JobId,
  Location,
  JobType
}: customJobcard) => {
  return (
    <div
      className={`${customClass} ${style.box} bg-white w-full laptop:w-[35rem] laptop:h-[12.8rem] rounded-[0.625rem] overflow-auto mobile:h-[10.6rem] mobile:w-[22rem] mobile:mt-2  `}
    >
      <div className="flex flex-row justify-between laptop:mt-[1rem] laptop:ml-[2.25rem] mobile:mt-[0.6rem] mobile:ml-[1rem]  ">
        <span className=" w-[7.62rem] h-[1.38rem] font-[31.25rem] text-[1rem] ">
          {heading}
        </span>
        <div className="laptop:mr-[2rem] mobile:mr-[1.3rem]">
          <Image
            src={`/jobcardicon/search.svg`}
            alt={'search'}
            width={13}
            height={15}
          />
        </div>
      </div>

      <div className="flex flex-row  laptop:mt-[0.125rem] mobile:mt-[0.125rem]  ">
        <div>
          <span className="flex py-2  laptop:ml-[2.25rem] mobile:ml-[1rem] text-grey15  font-[31.2rem] text-[0.75rem]">
            {Location}
          </span>
        </div>
        <div className="flex laptop:mx-[0.31rem]  mobile:mx-[0.31rem] ">
          {
            <Image
              src={`/jobcardicon/verticalLine.svg`}
              alt="line"
              width={2}
              height={0}
            ></Image>
          }
        </div>
        <span className=" flex    text-grey15 font-[31.2rem] text-[0.75rem] py-2">
          {JobType}
        </span>
      </div>
      <div className=" flex flex-row laptop:mt-[1.9rem] laptop:ml-[2.25rem] mobile:ml-[1rem]">
        <div>
          <h1 className="text-grey15 font-[25rem] text-[0.75rem] ">
            Total Candidates
          </h1>
          <h2 className=" text-black150 w-[1.25rem] h-[1.38rem]font-[31.25rem] text-[0.75rem]">
            {totalCandidates}
          </h2>
        </div>
        <div className="flex flex-col   laptop: mx-[1.8rem] mobile:mx-[0.6rem]">
          <h1 className="text-grey15 font-[25rem] text-[0.75rem] ">
            Active Candidates
          </h1>
          <h2 className=" text-black150 w-[1.25rem] h-[1.38rem]font-[31.25rem] text-[0.75rem]">
            {activeCandidates}
          </h2>
        </div>
        <div className="">
          <h1 className="text-grey15 font-[25rem] text-[0.75rem] ">Job ID</h1>
          <span className=" text-black150 w-[1.25rem] h-[1.38rem]font-[31.25rem] text-[0.75rem]">
            {JobId}
          </span>
        </div>
      </div>

      <div className=" laptop:mt-[0.5rem]  laptop:ml-[25.3rem] laptop:mr-[1.6rem] mobile:ml-[14.5rem] mobile:mt-[0.9rem] ">
        <Button
          types="button"
          title="Publish jobs"
          containerStyle="laptop:w-[7.93rem] laptop:h-[2.18rem] bg-greenlight rounded-[0.31rem] font-[25rem] text-[0.75rem]   mobile:w-[6.87rem] mobile:h-[2.4rem] "
        />
      </div>
    </div>
  );
};

export default JobCard;
