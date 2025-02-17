import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '~/common/components/atoms/button';
import CustomSelector from '~/common/components/atoms/customSelector/CustomSelector';
import CustomInput from '~/common/components/atoms/input';
import { search, setFilter, setSearch } from '../../companies.slice';
import { useSearch } from '~/features/search';
import { statuses, tooltipOptions } from '../statusOptions';
import { IoIosAddCircleOutline } from "react-icons/io";

function ComapnyHeader() {
  const dispatch = useDispatch();
  const { searchItems, handleSearch } = useSearch('companiesSlice', setSearch);
  const {filter} = useSelector((state: any) => state.companiesSlice);

  return (
    <div className="flex flex-col gap-6 p-4 pb-0">
    <div className=" flex gap-3 flex-col justify-between sm:flex-row">
      <div className="w-full sm:w-2/12">
        <Button onClick={() => dispatch(search())}>Search</Button>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-2 w-full sm:w-8/12">
        <CustomInput
          value={searchItems.type === "Name" ? searchItems.value : ""}
          onChange={(e) => handleSearch(e.target.value, "Name")}
          placeholder="Account Name"
          className="bg-[--linerPrimary]"
        />
        <CustomInput
          value={searchItems.type === "IdentityNumber" ? searchItems.value : ""}
          onChange={(e) => handleSearch(e.target.value, "IdentityNumber")}
          placeholder="Identity Number"
          className="bg-[--linerPrimary]"
        />
        <CustomInput
          value={searchItems.type === "CommercialRecordNumber" ? searchItems.value : ""}
          onChange={(e) => handleSearch(e.target.value, "CommercialRecordNumber")}
          placeholder="CR Number"
          className="bg-[--linerPrimary]"
        />
      </div>
    </div>
    <div className="flex justify-between">
      <Link href="/dashboard/companies/create" className="text-background bg-mainColor h-[40px] flex justify-center items-center px-[12px] rounded-lg shadow-lg gap-x-2">
        add company
        <IoIosAddCircleOutline size={20}/>
      </Link>
      <div className="sm:w-2/12">
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

export default ComapnyHeader;