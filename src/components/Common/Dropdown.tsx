/* eslint-disable @typescript-eslint/no-explicit-any */
import { dropdownProps } from '@/types';
import React, { useEffect, useState } from 'react';

export default function Dropdown({
  keyGenerator,
  renderElement,
  dataList,
  handleDataSelection,
  toggleDropdown = false,
  customClass = '',
  selectedKeyForCheck = '',
  selectedValue = '',
  disbaled = false
}: dropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>({});
  const dropdownList = () => {
    return dataList.map(item => {
      return (
        <div key={keyGenerator(item)} onClick={() => onSelect(item)}>
          {renderElement(item)}
        </div>
      );
    });
  };
  const onSelect = (item: any) => {
    selectedItem(item);
    handleDataSelection(item);
  };
  useEffect(() => {
    if (toggleDropdown) {
      setIsOpen(!isOpen);
    }
  }, [isOpen, toggleDropdown]);
  useEffect(() => {
    if (dataList?.length > 0) {
      const selection: any[] = dataList.filter(item => {
        return (item[selectedKeyForCheck] = selectedValue);
      });
      if (selection?.length > 0) {
        setSelectedItem(selection[0]);
      } else {
        setSelectedItem({});
      }
    }
  }, [dataList, selectedValue]);
  const onFocus = () => {
    if (!disbaled) setIsOpen(true);
  };
  return (
    <div className={`relative w-full ${customClass}`}>
      <div
        onClick={() => onFocus()}
        className={`text-sm border bg-white border-grey100 flex items-center justify-start pl-3 h-10 ${customClass}`}
      >
        dropdown
      </div>
      {isOpen && <div className="absolute w-full">{dropdownList()}</div>}
    </div>
  );
}
