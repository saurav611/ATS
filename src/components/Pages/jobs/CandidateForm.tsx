'use client';
import React from 'react';
import style from 'src/components/Styles/Form.module.scss';
import Input from '@/components/Common/Input';
import { useState } from 'react';
import Button from '@/components/Common/Button';
// import Attachments from './Attachments';

// interface CandidateFormProps {
//   customClass: string;
// }
const CandidateForm = ({ customClass }: { customClass: string }) => {
  const [value, setValue] = useState<string | number>('');

  return (
    <div className={`${customClass}`}>
      <div className={`${style.CandidateForm} laptop: w-[65.4rem] h-[100rem]`}>
        <h1 className="text-black text-[16px] font-medium pt-[2.125rem] pl-[5.4rem]">
          Personal Information
        </h1>
        <div className="pt-[2.31rem] pl-[5.4rem] flex ">
          <Input
            label={'First Name'}
            type={'Text'}
            name={'first Name'}
            inputValue={value}
            handleInputChange={(value: string | number) => {
              setValue(value);
            }}
            customInput="laptop: w-[26.7rem] h-[1.7rem]"
          />
          <div className="pl-[1.25rem]">
            <Input
              label={'Last Name'}
              type={'Text'}
              name={'last name'}
              inputValue={value}
              handleInputChange={(value: string | number) => {
                setValue(value);
              }}
              customInput=" laptop: w-[26.7rem] h-[1.7rem]"
            />
          </div>
        </div>
        <div className="flex pt-[2.3rem] pl-[5.4rem]">
          <Input
            label={'Contact Number'}
            type={'Text'}
            name={'Phone number'}
            inputValue={value}
            handleInputChange={(value: string | number) => {
              setValue(value);
            }}
            customInput="laptop: w-[26.687rem] h-[1.7rem]"
          />
          <div className="pl-[1.25rem]">
            <Input
              label={'Email ID'}
              type={'Text'}
              name={'Email'}
              inputValue={value}
              handleInputChange={(value: string | number) => {
                setValue(value);
              }}
              customInput="laptop: w-[26.7rem] h-[1.7rem]"
            />
          </div>
        </div>
        <div className="flex pt-[2.3rem] pl-[5.4rem]">
          <Input
            label={'Address'}
            type={'Text'}
            name={'address'}
            inputValue={value}
            handleInputChange={(value: string | number) => {
              setValue(value);
            }}
            customInput="laptop: w-[26.7rem] h-[1.7rem]"
          />
          <div className="pl-[1.25rem]">
            <Input
              label={'Post Code'}
              type={'Text'}
              name={'post code'}
              inputValue={value}
              handleInputChange={(value: string | number) => {
                setValue(value);
              }}
              customInput="laptop: w-[26.7rem] h-[1.7rem]"
            />
          </div>
        </div>

        <div className="flex pt-[2.3rem] pl-[5.4rem]">
          <Input
            label={'City'}
            type={'Text'}
            name={'City'}
            inputValue={value}
            handleInputChange={(value: string | number) => {
              setValue(value);
            }}
            customInput="laptop: w-[17.4rem] h-[1.7rem]"
          />
          <div className="px-[1.25rem]">
            <Input
              label={'State'}
              type={'Text'}
              name={'state'}
              inputValue={value}
              handleInputChange={(value: string | number) => {
                setValue(value);
              }}
              customInput="laptop: w-[17.4rem] h-[1.7rem]"
            />
          </div>
          <Input
            label={'Country'}
            type={'Text'}
            name={'country'}
            inputValue={value}
            handleInputChange={(value: string | number) => {
              setValue(value);
            }}
            customInput="laptop: w-[17.4rem] h-[1.7rem]"
          />
        </div>
        <p className="text-black text-[16px] font-medium pt-[3.5rem] pl-[5.4rem]">
          Skills
        </p>
        <div className="pt-[2.31rem] pl-[5.4rem] flex ">
          <Button
            types="button"
            title="Add skills+"
            containerStyle={`${style.InterviewBaground} laptop: w-[17.4rem] h-[1.7rem]  rounded-[0.31rem] font-[25rem] text-[0.75rem]    `}
          />
        </div>

        <p className="text-black text-[16px] font-medium pt-[3.5rem] pl-[5.4rem]">
          Work Experience
        </p>
        <div className="pt-[2.31rem] pl-[5.4rem] flex ">
          <Input
            label={'Company Name'}
            type={'Text'}
            name={'company name'}
            inputValue={value}
            handleInputChange={(value: string | number) => {
              setValue(value);
            }}
            customInput="laptop: w-[26.7rem] h-[1.7rem]"
          />
        </div>
        <div className="pt-[2.31rem] pl-[5.4rem] flex ">
          <Input
            label={'Designation'}
            type={'Text'}
            name={'company name'}
            inputValue={value}
            handleInputChange={(value: string | number) => {
              setValue(value);
            }}
            customInput="laptop: w-[26.7rem] h-[1.7rem]"
          />
        </div>
        <div className="flex pt-[2.3rem] pl-[5.4rem]">
          <Input
            label={'Joining Date'}
            type={'Text'}
            name={'joining date'}
            inputValue={value}
            handleInputChange={(value: string | number) => {
              setValue(value);
            }}
            customInput="laptop: w-[26.7rem] h-[1.7rem]"
          />
          <div className="pl-[1.25rem] flex ">
            <Input
              label={'Working Till'}
              type={'Text'}
              name={'working till'}
              inputValue={value}
              handleInputChange={(value: string | number) => {
                setValue(value);
              }}
              customInput="laptop: w-[26.7rem] h-[1.7rem]"
            />
          </div>
        </div>
        <div className="pt-[2.31rem] pl-[5.4rem]">
          <Input
            label={'Job Profile'}
            type={'paragraph'}
            name={'first Name'}
            inputValue={value}
            handleInputChange={(value: string | number) => {
              setValue(value);
            }}
            customInput="laptop: w-[54.6rem] h-[6.25rem] pt-[0.43rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default CandidateForm;
