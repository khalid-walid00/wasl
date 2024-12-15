import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '~/common/components/atoms/button';
import CustomSelector from '~/common/components/atoms/customSelector/CustomSelector';
import CustomInput from '~/common/components/atoms/input';
import { search, setSearch } from '../../requestsLog.slice';
import { useSearch } from '~/features/search';
import { tooltipOptions, statuses } from '../statusOptions';

function VehicleHeader() {
  const dispatch = useDispatch();
  const { searchItems, handleSearch } = useSearch('vehiclesSlice', setSearch);
  return (
    <div className="flex flex-col gap-6 p-4 pb-0">
      <div className=" flex gap-3 flex-col sm:flex-row">
        <div className=" grid lg:grid-cols-6 md:grid-cols-4  grid-cols-2  gap-2 w-full sm:w-11/12 ">
          <CustomInput
            value={searchItems.type === "Account" ? searchItems.value : ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value, "Account")}
            placeholder="Vehicle Name" className='bg-[--linerPrimary]' />
          <CustomInput
            value={searchItems.type === "PlateNumber" ? searchItems.value : ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value, "PlateNumber")}
            placeholder='Plate Number' className='bg-[--linerPrimary]' />
          <CustomInput
            value={searchItems.type === "SequenceNumber" ? searchItems.value : ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value, "SequenceNumber")}
            placeholder='Sequence Number' className='bg-[--linerPrimary]' />
          <CustomInput
            value={searchItems.type === "IMEINumber" ? searchItems.value : ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value, "IMEINumber")}
            placeholder='Search IMEI' className='bg-[--linerPrimary]' />
        </div>
        <div className="   w-full sm:w-2/12">
          <Button onClick={() => dispatch(search())}>Search</Button>
        </div>
      </div>
     
    </div>
  );
}

export default VehicleHeader;