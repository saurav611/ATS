import Image from 'next/image';
import React from 'react';
const bottomNavList = [
  { name: 'Home', Logo: 'Home' },
  { name: 'Notifications', Logo: 'notification' },
  { name: 'Setting', Logo: 'setting' },
  { name: 'Login', Logo: 'profile.gif', isGif: true }
];
export default function BottomNav() {
  return (
    <div
      className="fixed bottom-0 right-0 left-0 z-10 bg-white py-3 px-5 rounded-t-[1.25rem] lg:hidden"
      style={{ boxShadow: '0px -1px 4px 0px rgba(0, 0, 0, 0.25)' }}
    >
      <div className="flex items-center">
        {bottomNavList.map(item => (
          <div
            key={item.name}
            className="flex flex-1  flex-col items-center shrink-0 cursor-pointer"
          >
            <Image
              src={`/iconsNavbar/${
                !item.isGif ? `${item.Logo}.svg` : `${item.Logo}`
              }`}
              width={24}
              height={34}
              alt={item.name}
              className="!h-[34px]"
            />
            <p className="ml-2 text-sm text-grey100">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
