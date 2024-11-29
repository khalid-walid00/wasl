import Link from 'next/link';
import React from 'react';
import Button from '../../atoms/button';

interface Props {
  title?: string;
  description?: string;
  btnTitle?: string;
  link?: string;
  button?: React.ReactNode;
}

function HeadTable({ title, description, btnTitle, link = "#" , button }: Props) {
  return (
    <div className='flex w-full bg-white border-gray4White border-y px-4 justify-between ' dir='rtl'>
      <div className='my-4' >
        <div className='text-start text-[24px] sm:text-[32px] font-[700]'>{title}</div>
        <div className='text-start text-[#6C6D6E] text-[14px] sm:text-[14px]'>{description}</div>
      </div>
      {link && btnTitle ? (
        <Link href={link} className='self-center'>
          <Button className=' sm:h-[42px] py-[10px] px-[16px] md:px-6 md:py-7  text-nowrap w-max'>
            {btnTitle}
          </Button>
        </Link>
      ) : (
        button && <div className='self-center'>{button}</div>
      )}
    </div>
  );
}

export default HeadTable;
