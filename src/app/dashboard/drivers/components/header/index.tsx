import { DropdownItem, Input } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import Button from '~/common/components/atoms/button';
import CustomSelector from '~/common/components/atoms/customSelector/CustomSelector';
import CustomInput from '~/common/components/atoms/input';
import { statuses } from '../statusOptions';

function DriverHeader() {

  return (
    <div className="flex flex-col gap-6 p-4 pb-0">
      <div className=" flex gap-3 flex-col sm:flex-row">
        <div className=" grid md:grid-cols-4  grid-cols-2  gap-2 w-full sm:w-11/12 ">
          <CustomInput placeholder="Account Name" className='bg-[--linerPrimary]' />
          <CustomInput placeholder="Mobile Number" className='bg-[--linerPrimary]' />
          <CustomInput placeholder='Driver Name' className='bg-[--linerPrimary]' />

            </div>     
        <div className="   w-full sm:w-2/12">
          <Button>Search</Button>
        </div>
      </div>
      <div className=" flex justify-between">
        <div className="">
          <CustomSelector
            value={null}
            placeholder="driver status"
            options={statuses}
            onChange={() => { }}
          />
        </div>
        <Link href={"/dashboard/drivers/create"} className=" text-background bg-mainColor  h-[40px]   flex justify-center items-center px-[12px] rounded-lg shadow-lg gap-x-2 " >
          add driver
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 19 20" fill="none">
            <path d="M12.6875 9.99948H9.5M9.5 9.99948H6.3125M9.5 9.99948V13.187M9.5 9.99948L9.5 6.81198M18 10C18 14.6944 14.1944 18.5 9.5 18.5C4.80558 18.5 1 14.6944 1 10C1 5.30558 4.80558 1.5 9.5 1.5C14.1944 1.5 18 5.30558 18 10Z" stroke="white" stroke-width="2" stroke-linecap="round" />
          </svg>
        </Link>

      </div>
    </div>
  );
}

export default DriverHeader;