import React from 'react';
import style from 'src/components/Styles/Form.module.scss';
import Image from 'next/image';
import Button from '@/components/Common/Button';

const Attachments = ({ CustomClass }: { CustomClass: string }) => {
  return (
    <div>
      <div
        className={`flex ${style.CandidateForm} ${CustomClass} laptop: w-[65.4rem] h-[100rem]`}
      >
        <div className="laptop: pt-[3.7rem] pl-[2.5rem]">
          <div
            className={`${style.CandidateForm} laptop: w-[8.7rem] h-[7.7rem] `}
          >
            <h1 className="flex justify-end font-medium text-[0.875rem] pt-[0.875rem] pr-[1.5rem]">
              Resume
            </h1>
            <div className="flex justify-center pt-[0.625rem]">
              <Image
                src="/CandidateIcon/ResumeLine.svg"
                width={124}
                height={0}
                alt="line"
              />
            </div>

            <div className="pt-2 pl-2">
              <Button
                types="button"
                title=""
                containerStyle=""
                Children={
                  <Image
                    src="/CandidateIcon/ResumeImg.svg"
                    width={53}
                    height={53}
                    alt="resume image"
                    className=""
                  />
                }
              />
            </div>
          </div>
        </div>
        <div className="laptop: pt-[3.7rem] pl-[2.5rem]">
          <div
            className={`${style.CandidateForm} laptop: w-[8.7rem] h-[7.7rem] `}
          >
            <h1 className="flex justify-end font-medium text-[0.875rem] pt-[0.875rem] pr-[1.5rem]">
              Cover Letter
            </h1>
            <div className="flex justify-center pt-[0.625rem]">
              <Image
                src="/CandidateIcon/ResumeLine.svg"
                width={124}
                height={0}
                alt="line"
              />
            </div>

            <div className="pt-2 pl-2">
              <Button
                types="button"
                title=""
                containerStyle=""
                Children={
                  <Image
                    src="/CandidateIcon/CoverImg.svg"
                    width={53}
                    height={53}
                    alt="resume image"
                    className=""
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attachments;
