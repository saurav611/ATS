import Image from 'next/image';
import React from 'react';
const navList = [
  { name: 'Home', Logo: 'Home' },
  { name: 'Jobs', Logo: 'category' },
  { name: 'Mails', Logo: 'mailBox' },
  { name: 'Interviews', Logo: 'info' },
  { name: 'Reports', Logo: 'report' },
  { name: 'Talent Pool', Logo: 'tableReport' }
];
export default function Navbar({ customClass }: { customClass: string }) {
  return (
    <nav
      className={`${customClass} w-full box-border lg:w-[243px]  lg:fixed lg:left-0 shadow-sm`}
    >
      <div className="flex overflow-x-auto w-full py-2 px-4 border border-grey50 rounded-t-[0.625rem] lg:h-[90vh] max-lg:bg-grey10 lg:flex-col lg:items-center lg:bg-white lg:pt-7">
        {navList.map(item => (
          <div
            key={item.name}
            className="flex items-center shrink-0  max-lg:mr-10 cursor-pointer lg:min-w-[120px] lg:mb-10"
          >
            <Image
              src={`/iconsNavbar/${item.Logo}.svg`}
              width={24}
              height={24}
              alt={item.name}
            />
            <span className="ml-2 text-sm text-grey100">{item.name}</span>
          </div>
        ))}
      </div>
    </nav>
  );
}
