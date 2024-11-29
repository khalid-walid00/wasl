import { Input } from '@nextui-org/react';
import React from 'react';
import Button from '~/common/components/atoms/button';
import CustomInput from '~/common/components/atoms/input';

function ComapnySearch() {

  return (
    <div className=" flex gap-3 flex-col sm:flex-row">
    <div className="  grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4  grid-cols-2  gap-2 w-full sm:w-11/12 ">
      <CustomInput placeholder="اسم الشركة" className='bg-[--linerPrimary]'/>
      <CustomInput placeholder="رقم الشركة" className='bg-[--linerPrimary]'/>
      <CustomInput placeholder='ايميل الشركة' className='bg-[--linerPrimary]'/>
      <CustomInput placeholder="السجل التجاري" className='bg-[--linerPrimary]'/>
      <CustomInput placeholder="اسم المدير" className='bg-[--linerPrimary]'/>
      <CustomInput placeholder="رقم المدير" className='bg-[--linerPrimary]'/>
      <CustomInput placeholder='ايميل المدير' className='bg-[--linerPrimary]'/>
      <CustomInput placeholder="تاريخ التسجيل" className='bg-[--linerPrimary]'/>
  </div>
  <div className=" w-full sm:w-1/12">
  <Button>بحث</Button>
  </div>
  </div>
  );
}

export default ComapnySearch;