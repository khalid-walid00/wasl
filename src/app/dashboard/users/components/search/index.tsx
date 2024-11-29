import { Input } from '@nextui-org/react';
import React from 'react';
import Button from '~/common/components/atoms/button';
import CustomInput from '~/common/components/atoms/input';

function UserSearch() {
  return (
    <div className=" flex gap-3">
    <div className=" flex gap-2 w-10/12">
    
      <CustomInput placeholder='البحث بالاسم' className='bg-[--linerPrimary]'/>
      <CustomInput placeholder='البحث بالرقم' className='bg-[--linerPrimary]'/>
      <CustomInput placeholder='البحث بالايميل' className='bg-[--linerPrimary]'/>

  </div>
  <div className=" w-2/12">
  <Button>بحث</Button>
  </div>
  </div>
  );
}

export default UserSearch;