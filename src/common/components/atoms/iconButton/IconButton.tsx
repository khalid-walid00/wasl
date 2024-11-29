import React from 'react';
import Image from 'next/image';

interface IconButtonProps {
  icon: string;
  alt: string;
  checked: boolean;
  text: string;
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, alt, checked, text, onClick }) => {
  return (
    <li onClick={onClick} className="cursor-pointer flex justify-center flex-col items-center">
      <div className={`${checked ? 'bg-mainColor' : 'bg-[--linerSecColor]'} rounded-full w-[40px] h-[40px] flex justify-center items-center mb-[8px]`}>
        <Image width={18} height={18} alt={alt} src={icon} />
      </div>
      <h5 className={`font-bold ${checked ? 'text-mainColor' : 'text-[--subLiner]'}`}>{text}</h5>
    </li>
  );
};

export default IconButton;
