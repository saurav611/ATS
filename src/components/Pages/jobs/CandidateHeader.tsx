'use client';
import React, { useState } from 'react';
import Button from '@/components/Common/Button';
import Attachments from './Attachments';
import style from 'src/components/Styles/Form.module.scss';
import CandidateForm from './CandidateForm';

const CandidateHeader = ({ customClass }: { customClass: string }) => {
  const [page, setPage] = useState(0);
  const pageInfo = () => {
    if (page === 0) {
      return <CandidateForm customClass="" />;
    } else {
      return <Attachments CustomClass="" />;
    }
  };
  const [activeTab, setActiveTab] = useState('application');

  const handleTabClick = (tab: 'application' | 'attachments') => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div
        className={`${style.CandidateForm} ${customClass} laptop: w-[65.4rem] h-[3.6rem] `}
      >
        <div className="flex ">
          <h1 className="laptop: pl-[4.8rem] pt-[0.94rem] pb-[1.125rem] text-[14px] ">
            <Button
              types="button"
              title="Application Form"
              containerStyle={` ${style.tabbutton}  ${
                activeTab === 'application' ? `${style.active}` : ''
              }`}
              disabled={page == 0}
              handleClick={() => {
                setPage(currPage => currPage - 1);
                handleTabClick('application');
              }}
            />
            <div
              className={`${style.indicator}   transform translate-x-1/2 ${
                activeTab === 'attachments' ? `${style.right}` : ''
              }`}
            ></div>
          </h1>
          <h1 className="laptop: pl-[1.9rem] pt-[0.94rem] pb-[1.125rem] text-[14px]">
            <Button
              types="button"
              title="Attachments"
              containerStyle={`${style.tabbutton}  ${
                activeTab === 'attachments' ? `${style.active}` : ''
              }`}
              handleClick={() => {
                setPage(currPage => currPage + 1);
                handleTabClick('attachments');
              }}
            />
          </h1>
        </div>
        <div className="-mt-3">{pageInfo()}</div>
      </div>
    </div>
  );
};

export default CandidateHeader;
