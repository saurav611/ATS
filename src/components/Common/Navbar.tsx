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
      className={`${customClass} w-full box-border laptop:w-[243px]  laptop:fixed laptop:left-0 shadow-sm`}
    >
      <div className="flex overflow-x-auto w-full py-2 px-4 border border-grey50 rounded-t-[0.625rem] laptop:h-[90vh] max-laptop:bg-grey10 laptop:flex-col laptop:items-center laptop:bg-white">
        {navList.map(item => (
          <div
            key={item.name}
            className="flex items-center shrink-0  max-laptop:mr-10 cursor-pointer laptop:min-w-[120px] laptop:mt-10"
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
