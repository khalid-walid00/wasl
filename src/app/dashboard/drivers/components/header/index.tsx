import { DropdownItem, Input } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import Button from '~/common/components/atoms/button';
import CustomSelector from '~/common/components/atoms/customSelector/CustomSelector';
import CustomInput from '~/common/components/atoms/input';
import { statuses, tooltipOptions } from '../statusOptions';
import { search, setFilter, setSearch } from '../../drivers.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useSearch } from '~/features/search';

function DriverHeader() {
  const dispatch =useDispatch()
  const { searchItems, handleSearch } = useSearch('driversSlice', setSearch);
  const { filter } = useSelector((state: any) => state.driversSlice);
  return (
    <div className="flex flex-col gap-6 p-4 pb-0">
      <div className=" flex gap-3 justify-between flex-col sm:flex-row">
        <div className="   w-full sm:w-2/12">
          <Button onClick={() => dispatch(search())}>Search</Button>
        </div>
        <div className=" grid md:grid-cols-3  grid-cols-2  gap-2 w-full sm:w-8/12 ">
          <CustomInput
            value={searchItems.type === "driverName" ? searchItems.value : ""}
            onChange={(e) => handleSearch(e.target.value, "driverName")}
            placeholder="Account Name" className='bg-[--linerPrimary]' />
          <CustomInput
            value={searchItems.type === "mobileNumber" ? searchItems.value : ""}
            onChange={(e) => handleSearch(e.target.value, "mobileNumber")}
            placeholder="Mobile Number" className='bg-[--linerPrimary]' />
          <CustomInput
            value={searchItems.type === "driverNameArabic" ? searchItems.value : ""}
            onChange={(e) => handleSearch(e.target.value, "driverNameArabic")}
            placeholder='driver Name Arabic' className='bg-[--linerPrimary]' />

        </div>
      </div>
      <div className=" flex justify-between">
        <Link href={"/dashboard/drivers/create"} className=" text-background bg-mainColor  h-[40px]   flex justify-center items-center px-[12px] rounded-lg shadow-lg gap-x-2 " >
          add driver
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 19 20" fill="none">
            <path d="M12.6875 9.99948H9.5M9.5 9.99948H6.3125M9.5 9.99948V13.187M9.5 9.99948L9.5 6.81198M18 10C18 14.6944 14.1944 18.5 9.5 18.5C4.80558 18.5 1 14.6944 1 10C1 5.30558 4.80558 1.5 9.5 1.5C14.1944 1.5 18 5.30558 18 10Z" stroke="white" stroke-width="2" stroke-linecap="round" />
          </svg>
        </Link>
        <div className="">
          <CustomSelector
            value={filter}
            placeholder="Active"
            options={statuses}
            tooltipOptions={tooltipOptions}
            onChange={(e) => dispatch(setFilter(e))}
          />
        </div>

      </div>
    </div>
  );
}

export default DriverHeader;