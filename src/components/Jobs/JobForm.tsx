'use client';
import React, { useState } from 'react';
import style from '../Styles/Form.module.scss';
import { customform } from '@/types';
import InputField from './Forms/InputField';
import SelectField from './Forms/SelectField';
interface Option {
  value: string;
  label: string;
}

const JobForm = ({ customClass }: customform) => {
  const [SelectedMode, setSelectedGender] = useState('');

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGender(event.target.value);
  };

  const EmploymentOptions: Option[] = [
    { value: 'permanent', label: 'Permanent ' },
    { value: 'internship', label: 'Internship' },
    { value: 'contract', label: 'Contract' }
  ];
  const SeniorityOptions: Option[] = [
    { value: 'entry level', label: ' Entry level' },
    { value: 'association', label: 'Association' },
    { value: 'lead', label: 'Lead' }
  ];
  const IndustryOptions: Option[] = [
    { value: 'it ', label: 'IT' },
    { value: 'non it', label: 'Non-IT' }
  ];

  const WorkOptions: Option[] = [
    { value: 'Mode', label: 'On site' },
    { value: 'Remote', label: 'Remote' },
    { value: 'Hybrid', label: 'Hybrid' }
  ];
  return (
    <div>
      <div
        className={`${style.heder} ${customClass}  laptop:w-[71.2rem] laptop:h-[3.5rem]`}
      >
        <h1 className="laptop:pt-[1.06rem] laptop:pl-[2rem] text-blue50">
          About Job
        </h1>
        <div className="h-full bg-white  laptop:mt-4 laptop:h-[100rem]">
          <div className="laptop:pt-[2.75rem] laptop:pl-[15.6rem]">
            <h1 className="font-[31.25rem] text-[1rem]   ">
              Job you're hiring for?
            </h1>
          </div>
          <form>
            <div className="laptop:pt-[2rem] ">
              <InputField
                name="job title"
                PlaceHolder="Enter the Job Title"
                label="Job Title"
                type="Text"
                required={true}
                LabelStyle={` text-[0.7rem] laptop:ml-[17rem] font-[25rem] ${style.RequiredLabel}`}
                InputStyle={`${style.border} rounded-[0.31rem] placeholder:focus:text-blue50  focus:outline-none   w-[40.1rem] laptop:ml-[15.6rem] placeholder:font-[25rem] text-[0.625rem] pt-[0.43rem] pl-[1rem] pb-[0.3rem] focus:border-blue50`}
              />
            </div>

            <div className="laptop:pt-[2rem] flex flex-row">
              <InputField
                name="Department"
                PlaceHolder="Enter Department"
                label="Department(optional)"
                type="Text"
                required={false}
                LabelStyle=" text-[0.7rem] laptop:ml-[17rem] font-[25rem] flex"
                InputStyle={` ${style.border} rounded-[0.31rem] placeholder:focus:text-blue50  focus:outline-none   w-[12.5rem] laptop:ml-[15.6rem] placeholder:font-[25rem] text-[0.625rem] pt-[0.43rem] pl-[1rem] pb-[0.3rem] focus:border-blue50`}
              />

              <InputField
                name="location"
                PlaceHolder="Enter Location"
                label="Location"
                type="Text"
                required={true}
                LabelStyle={`text-[0.7rem] font-[25rem] flex  laptop:ml-[2.5rem] ${style.RequiredLabel}`}
                InputStyle={`${style.border} laptop:ml-[1.25rem] rounded-[0.31rem] placeholder:focus:text-blue50  focus:outline-none   w-[12.5rem]  placeholder:font-[25rem] text-[0.625rem] pt-[0.43rem] pl-[1rem] pb-[0.3rem] focus:border-blue50`}
              />

              <SelectField
                label="Work Mode"
                options={WorkOptions}
                value={SelectedMode}
                onChange={handleGenderChange}
                LabelStyle="flex text-[0.7rem] laptop:ml-[2.25rem] font-[25rem]"
                SelectStyle={` ${style.border} laptop:ml-[1.25rem] rounded-[0.31rem] placeholder:focus:text-blue50  focus:outline-none    placeholder:font-[25rem] text-[0.625rem] pt-[0.43rem] pl-[1rem] focus:border-blue50`}
                PlaceHolder="Mode"
                OptionStyle=" placeholder:text-blue50 bg-white flex"
              />
            </div>
            <div className="laptop:pt-[2rem]">
              <InputField
                name="job Description"
                PlaceHolder="Enter the Job Title"
                label="Job Description"
                type="Text"
                required={true}
                LabelStyle={` text-[0.7rem] laptop:ml-[17rem] font-[25rem] ${style.RequiredLabel}`}
                InputStyle={`${style.border} rounded-[0.31rem] placeholder:focus:text-blue50  focus:outline-none laptop:h-[7.8rem]   laptop:w-[40.1rem] laptop:ml-[15.6rem] placeholder:font-[25rem] text-[0.625rem] pt-[0.43rem] pl-[1rem] pb-[6rem] focus:border-blue50`}
              />
            </div>
            <div className="laptop:pt-[2rem] flex flex-row">
              <SelectField
                label="Emplyement Type"
                options={EmploymentOptions}
                value={SelectedMode}
                onChange={handleGenderChange}
                LabelStyle={`flex text-[0.7rem] laptop:ml-[17rem] font-[25rem] ${style.RequiredLabel}`}
                SelectStyle={` ${style.border} laptop:ml-[15.6rem]  rounded-[0.31rem] placeholder:focus:text-blue50  focus:outline-none    placeholder:font-[25rem] text-[0.625rem] pt-[0.43rem] pl-[1rem] focus:border-blue50`}
                PlaceHolder="Mode"
                OptionStyle=" placeholder:text-blue50 bg-white"
              />

              <SelectField
                label="Seniority Type"
                options={SeniorityOptions}
                value={SelectedMode}
                onChange={handleGenderChange}
                LabelStyle="flex text-[0.7rem] laptop:ml-[2.25rem] font-[25rem]"
                SelectStyle={` ${style.border} laptop:ml-[1.25rem] rounded-[0.31rem] placeholder:focus:text-blue50  focus:outline-none    placeholder:font-[25rem] text-[0.625rem] pt-[0.43rem] pl-[1rem] focus:border-blue50 `}
                PlaceHolder="Mode"
                OptionStyle=" placeholder:text-blue50 bg-white flex"
              />
              <SelectField
                label="Industry Type"
                options={IndustryOptions}
                value={SelectedMode}
                onChange={handleGenderChange}
                LabelStyle="flex text-[0.7rem] laptop:ml-[2.25rem] font-[25rem]"
                SelectStyle={` ${style.border} laptop:ml-[1.25rem] rounded-[0.31rem] placeholder:focus:text-blue50  focus:outline-none    placeholder:font-[25rem] text-[0.625rem] pt-[0.43rem] pl-[1rem] focus:border-blue50`}
                PlaceHolder="Mode"
                OptionStyle=" placeholder:text-blue50 bg-white flex"
              />
            </div>
            <div className="laptop:pt-[2rem] flex flex-row">
              <InputField
                name="salary"
                PlaceHolder=""
                label="Salary Range(CTC)(optional)"
                type="Text"
                required={false}
                LabelStyle=" text-[0.7rem] laptop:ml-[17rem] font-[25rem] flex"
                InputStyle={` ${style.border} rounded-[0.31rem] placeholder:focus:text-blue50  focus:outline-none   w-[12.5rem] laptop:ml-[15.6rem] placeholder:font-[25rem] text-[0.625rem] pt-[0.43rem] pl-[1rem] pb-[0.3rem] focus:border-blue50`}
              />

              <InputField
                name="experience"
                PlaceHolder=""
                label="Work Exp(In Years)(Optional)"
                type="Text"
                required={false}
                LabelStyle={`text-[0.7rem] font-[25rem] flex  laptop:ml-[2.5rem] `}
                InputStyle={`${style.border} laptop:ml-[1.25rem] rounded-[0.31rem] placeholder:focus:text-blue50  focus:outline-none   w-[12.5rem]  placeholder:font-[25rem] text-[0.625rem] pt-[0.43rem] pl-[1rem] pb-[0.3rem] focus:border-blue50`}
              />
              <InputField
                name="notice period"
                PlaceHolder=""
                label="Notice Period(In Years)(Optional)"
                type="Text"
                required={false}
                LabelStyle={`text-[0.7rem] font-[25rem] flex  laptop:ml-[2.5rem] `}
                InputStyle={`${style.border} laptop:ml-[1.25rem] rounded-[0.31rem] placeholder:focus:text-blue50  focus:outline-none   w-[12.5rem]  placeholder:font-[25rem] text-[0.625rem] pt-[0.43rem] pl-[1rem] pb-[0.3rem] focus:border-blue50`}
              />
            </div>
            <div className="laptop:pt-[2rem]">
              <InputField
                name="Vacancies"
                PlaceHolder=""
                label="Number of Vacancies(Optional)"
                type="Text"
                required={false}
                LabelStyle=" text-[0.7rem] laptop:ml-[17rem] font-[25rem] flex"
                InputStyle={` ${style.border} rounded-[0.31rem] placeholder:focus:text-blue50  focus:outline-none   w-[12.5rem] laptop:ml-[15.6rem] placeholder:font-[25rem] text-[0.625rem] pt-[0.43rem] pl-[1rem] pb-[0.3rem] focus:border-blue50`}
              />
            </div>
            <div className="laptop:pt-[2rem]">
              <InputField
                name="skills "
                PlaceHolder=""
                label="Skills"
                type="Text"
                required={true}
                LabelStyle={` text-[0.7rem] laptop:ml-[17rem] font-[25rem] ${style.RequiredLabel}`}
                InputStyle={`${style.border} rounded-[0.31rem] placeholder:focus:text-blue50  focus:outline-none laptop:h-[7.8rem]   laptop:w-[40.1rem] laptop:ml-[15.6rem] placeholder:font-[25rem] text-[0.625rem] pt-[0.43rem] pl-[1rem] pb-[6rem] focus:border-blue50`}
              />
            </div>
            <div className="laptop:pt-[2rem] laptop:ml-[15.6rem]">
              <h2 className="text-lg">Educational Qualification</h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
