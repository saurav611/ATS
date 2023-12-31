'use client';
import React from 'react';
import style from '../Styles/Form.module.scss';
import { CandidateInfoProp } from '@/types';
import Image from 'next/image';
import Button from '../Common/Button';
// import CandidateForm from '../Pages/jobs/CandidateForm';
import SelectField from './Forms/SelectField';
import { useState } from 'react';
import CandidateHeader from '../Pages/jobs/CandidateHeader';

interface Option {
  value: string;
  label: string;
}

const CandidateInfo = ({
  CustomClass,
  Imagesrc,
  CandidateName,
  CandidateLastname,
  age,
  Gender,
  Email,
  Location,
  MobNumber,
  Skills,
  Experience
}: CandidateInfoProp) => {
  const hasExperience = Experience && Experience.trim() !== '';
  const [SelectedMode, setSelectedGender] = useState('');

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGender(event.target.value);
  };

  const MoveCandidate: Option[] = [
    { value: 'move condidate ', label: 'Move Candidate' },
    { value: 'contacted', label: 'Contacted ' },
    { value: 'interview', label: 'Interview' }
  ];
  return (
    <div>
      <div
        className={`${style.InfoBackground}  ${CustomClass} laptop:w-[65.8rem] h-[9.8rem] flex`}
      >
        <div className="laptop: pb-[2rem] pl-[0.76rem] pt-[0.76rem] flex flex-row">
          <Image
            src={`${Imagesrc}`}
            alt={'Candidate photo'}
            width={106}
            height={106}
          />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row">
            <h1
              className={`${style.InfoName} laptop: pt-[0.76rem] pl-[0.76rem] `}
            >
              {CandidateName}
            </h1>

            <h1 className={`${style.InfoName} laptop: pt-[0.76rem] pl-1 `}>
              {CandidateLastname}
            </h1>

            <h2 className={`${style.InfoName} ml-2 mt-[0.76rem] `}>{age},</h2>
            <h2 className={`${style.InfoName} ml-2 mt-[0.76rem]`}>{Gender}</h2>
          </div>
          <div className="flex flex-row">
            <div className=" laptop: pl-[0.75rem] pt-[0.31rem] flex ">
              <Image
                src="/CandidateIcon/Mail.svg"
                width={24}
                height={24}
                alt="Mail image"
              ></Image>

              <h1 className={`text-[0.75rem] font-[25rem] pt-1 pl-1`}>
                {Email}
              </h1>
              <div className="laptop: pl-[0.75rem] flex">
                <Image
                  src="/CandidateIcon/Map.svg"
                  width={24}
                  height={24}
                  alt="Mail image"
                ></Image>
                <h1 className={`text-[0.75rem] font-[25rem] pt-1 pl-1`}>
                  {Location}
                </h1>
              </div>
              <div className="laptop: pl-[0.75rem] flex">
                <Image
                  src="/CandidateIcon/Call.svg"
                  width={24}
                  height={24}
                  alt="Mail image"
                ></Image>
                <h1 className={`text-[0.75rem] font-[25rem] pt-1 pl-1`}>
                  {MobNumber}
                </h1>
              </div>
            </div>
          </div>
          <div className=" laptop: pl-[0.75rem] pt-[0.31rem] flex">
            <h1
              className={`${style.SkillsBaground} text-white text-[0.75rem] font-[25rem] p-[0.26rem]`}
            >
              {Skills}
            </h1>
          </div>
          <div className=" laptop: pl-[0.75rem] pt-[0.31rem] flex">
            {hasExperience ? (
              <h2 className="text-[0.75rem] font-[25rem]">
                Experience:{Experience}
              </h2>
            ) : (
              <h2> </h2>
            )}
          </div>

          <div className=" pl-[24.7rem] flex flex-row flex-wrap">
            <Button
              types="button"
              title="Schedule Interview"
              containerStyle={`${style.InterviewBaground} bg-black flex items-center justify-center p-1 laptop: font-[25rem] text-[0.7rem] laptop:w-[9.6rem] h-[2.2rem] text-blue50`}
              Children={
                <Image
                  src="/CandidateIcon/Calender.svg"
                  width={22}
                  height={22}
                  alt="Mail image"
                  className="items-center"
                />
              }
            />
            <div className={`laptop: pl-[0.31rem] `}>
              <Button
                types="button"
                title="Hire"
                containerStyle={` ${style.HireBaground} text-green120 flex items-center justify-center laptop: font-[31.65rem] text-[0.75rem] laptop:w-[4.4375rem] h-[2.2rem]`}
                Children={
                  <Image
                    src="/CandidateIcon/Hire.svg"
                    width={24}
                    height={24}
                    alt="Mail image"
                    className="items-center"
                  />
                }
              />
            </div>
            <div className={`laptop: pl-[0.31rem] `}>
              <Button
                types="button"
                title="Reject"
                containerStyle={` ${style.RejectBaground} text-red14 flex items-center justify-center laptop: font-[31.65rem] text-[0.75rem] laptop:w-[4.4rem] h-[2.2rem]`}
                Children={
                  <Image
                    src="/CandidateIcon/Reject.svg"
                    width={24}
                    height={24}
                    alt="Mail image"
                    className="items-center"
                  />
                }
              />
            </div>
            <div className={`laptop: pl-[0.8rem] pr-[0.75rem]`}>
              <SelectField
                label=""
                options={MoveCandidate}
                value={SelectedMode}
                onChange={handleGenderChange}
                LabelStyle=""
                SelectStyle={`rounded-[0.31rem] w-[8.4rem] h-[2.2rem] text-[0.75rem] bg-black text-white  flex flex-wrap pb-2   placeholder:font-[31.65rem] pt-[0.43rem] pl-[0.63rem]`}
                PlaceHolder="Mode"
                OptionStyle=" flex flex-wrap"
              />
            </div>
          </div>

          <div className=" absolute  pl-[54rem]  ">
            <Button
              types="button"
              title=""
              containerStyle={` ${style.closeStyle} w-[4.12rem] h-[9.8rem]  `}
              Children={
                <Image
                  src="/CandidateIcon/Close.svg"
                  width={28}
                  height={28}
                  alt="Mail image"
                />
              }
            />
          </div>
        </div>
      </div>
      <CandidateHeader customClass="mt-5" />
    </div>
  );
};

export default CandidateInfo;
