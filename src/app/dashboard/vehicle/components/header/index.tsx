import { DropdownItem, Input } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '~/common/components/atoms/button';
import CustomSelector from '~/common/components/atoms/customSelector/CustomSelector';
import CustomInput from '~/common/components/atoms/input';
import { toggleModel } from '../../create/createVehicle.slice';
import { search, setSearch } from '../../vehicle.slice';

function VehicleHeader() {
  const dispatch = useDispatch();
  const { searchItems } = useSelector((state: any) => state.vehiclesSlice);
console.log("searchItems", searchItems);
  const statuses = [
    {
      value: "Active", label: "Active"
    },
    {
      value: "Inactive", label: "Inactive"
    },
    {
      value: "delete", label: "delete"
    },
  ]
  const tooltipOptions = [
    { id: "Active", tooltipContent: "المركبات الموجوده في wasl" },
    { id: "Inactive", tooltipContent: "المركبات الغير موجوده في wasl" },
    { id: "delete", tooltipContent: "المركبات المحذوفه من wasl فقط" },
  ];
  const HandelSearchByName = (value: string, type: string) => {
    let finalValue;
    if (value === "All" && type === "Activity") finalValue = "";
    else finalValue = value;
    dispatch(setSearch({ type, value: finalValue }));
  }
  return (
    <div className="flex flex-col gap-6 p-4 pb-0">
      <div className=" flex gap-3 flex-col sm:flex-row">
        <div className=" grid lg:grid-cols-6 md:grid-cols-4  grid-cols-2  gap-2 w-full sm:w-11/12 ">
          <CustomInput
            value={searchItems.type === "Account" ? searchItems.value : ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => HandelSearchByName(e.target.value, "Account")}
            placeholder="Account Name" className='bg-[--linerPrimary]' />
          <div className="">
            <CustomSelector
              value={null}
              placeholder="Aseet Name"
              options={statuses}
              onChange={() => { }}
            />
          </div>
          <CustomInput
            value={searchItems.type === "PlateNumber" ? searchItems.value : ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => HandelSearchByName(e.target.value, "PlateNumber")}
            placeholder='Pile No' className='bg-[--linerPrimary]' />
          <CustomInput
            value={searchItems.type === "SequenceNumber" ? searchItems.value : ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => HandelSearchByName(e.target.value, "SequenceNumber")}
            placeholder='Sequence Number' className='bg-[--linerPrimary]' />
          <CustomInput
            value={searchItems.type === "IMEINumber" ? searchItems.value : ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => HandelSearchByName(e.target.value, "IMEINumber")}
            placeholder='Search IMCI' className='bg-[--linerPrimary]' />
        </div>
        <div className="   w-full sm:w-2/12">
          <Button onClick={() => dispatch(search())}>Search</Button>
        </div>
      </div>
      <div className=" flex justify-between">
        <div className="">
          <CustomSelector
            value={searchItems.type === "Activity" ? searchItems.value : ""}
            placeholder="driver status"
            options={statuses}
            onChange={(e: any) => HandelSearchByName(e, "Activity")}
            tooltipOptions={tooltipOptions}
          />
        </div>

        <Button onClick={() => dispatch(toggleModel())} primary className=" w-max " >
          add driver
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 19 20" fill="none">
            <path d="M12.6875 9.99948H9.5M9.5 9.99948H6.3125M9.5 9.99948V13.187M9.5 9.99948L9.5 6.81198M18 10C18 14.6944 14.1944 18.5 9.5 18.5C4.80558 18.5 1 14.6944 1 10C1 5.30558 4.80558 1.5 9.5 1.5C14.1944 1.5 18 5.30558 18 10Z" stroke="white" stroke-width="2" stroke-linecap="round" />
          </svg>
        </Button>

      </div>
    </div>
  );
}

export default VehicleHeader;