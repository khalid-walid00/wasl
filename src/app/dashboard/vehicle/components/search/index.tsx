import { Input } from '@nextui-org/react';
import React from 'react';
import Button from '~/common/components/atoms/button';
import CustomInput from '~/common/components/atoms/input';

function ComapnySearch() {
  return (
    <div className=" flex gap-3">
    <div className=" flex gap-2 w-11/12">
      <CustomInput placeholder="اسم المركبة" className='bg-[--linerPrimary]'/>
      <CustomInput placeholder="نوع المركبة" className='bg-[--linerPrimary]'/>
      <CustomInput placeholder="الموديل" className='bg-[--linerPrimary]'/>
      <CustomInput placeholder="البنزين" className='bg-[--linerPrimary]'/>
      <CustomInput placeholder="صندوق التروس"className='bg-[--linerPrimary]'/>
      <CustomInput placeholder="تاريخ التسجيل" className='bg-[--linerPrimary]'/>
  </div>
  <div className=" w-1/12">
  <Button>بحث</Button>
  </div>
  </div>
  );
}

export default ComapnySearch;