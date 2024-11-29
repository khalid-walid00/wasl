import { Input } from '@nextui-org/react';
import React from 'react';
import Button from '~/common/components/atoms/button';
import CustomInput from '~/common/components/atoms/input';

function UserSearch() {
  return (
    <div className=" flex gap-3 flex-col sm:flex-row">
    <div className=" grid md:grid-cols-3 grid-cols-1 gap-3  w-full sm:w-10/12 ">
    
      <CustomInput placeholder='البحث بالاسم' className='bg-[--linerPrimary]'/>
      <CustomInput placeholder='البحث بالرقم' className='bg-[--linerPrimary]'/>
      <CustomInput placeholder='البحث بالايميل' className='bg-[--linerPrimary]'/>

  </div>
  <div className=" sm:w-2/12 w-full">
  <Button>بحث</Button>
  </div>
  </div>
  );
}

export default UserSearch;