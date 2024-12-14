import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '~/common/components/atoms/button';
import CustomSelector from '~/common/components/atoms/customSelector/CustomSelector';
import CustomInput from '~/common/components/atoms/input';
import { search, setSearch } from '../../companies.slice';
import { useSearch } from '~/features/search';
import { statuses, tooltipOptions } from '../statusOptions';
import { IoIosAddCircleOutline } from "react-icons/io";

function ComapnyHeader() {
  const dispatch = useDispatch();
  const { searchItems, handleSearch } = useSearch('companiesSlice', setSearch);

  return (
    <div className="flex flex-col gap-6 p-4 pb-0">
    <div className=" flex gap-3 flex-col sm:flex-row">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-2 w-full sm:w-11/12">
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
      <div className="w-full sm:w-2/12">
        <Button onClick={() => dispatch(search())}>Search</Button>
      </div>
    </div>
    <div className="flex justify-between">
      <div className="sm:w-2/12">
        <CustomSelector
          value={["Activity", "IsDeletedFromWasl"].includes(searchItems.type) ? searchItems.value : ""}
          placeholder="Active"
          options={statuses}
          tooltipOptions={tooltipOptions}
          onChange={(e) => handleSearch(e, e == "false" ? "IsDeletedFromWasl" : "Activity")}
        />
      </div>
      <Link href="/dashboard/companies/create" className="text-background bg-mainColor h-[40px] flex justify-center items-center px-[12px] rounded-lg shadow-lg gap-x-2">
        add company
        <IoIosAddCircleOutline size={20}/>
      </Link>
    </div>
  </div>
  );
}

export default ComapnyHeader;