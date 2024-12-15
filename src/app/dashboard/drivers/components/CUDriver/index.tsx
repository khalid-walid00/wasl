"use client";
import CustomInput from '~/common/components/atoms/input';
import CustomLabel from '~/common/components/atoms/label';
import HeadTable from '~/common/components/molecules/headTable';
import "react-datepicker/dist/react-datepicker.css";
import CustomSelector from '~/common/components/atoms/customSelector/CustomSelector';
import Button from '~/common/components/atoms/button';
import DatePicker from 'react-datepicker';
import { Checkbox } from '@nextui-org/react';
import PasswordInput from '~/common/components/molecules/passwordInput';
import TextareaAtom from '~/common/components/atoms/Textarea';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { clearOneData, fetchOneData, sendData } from '../../drivers.slice';

const CUDriversComponent = ({ _id }: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (_id) {
      dispatch(fetchOneData(_id));
    } else {
      dispatch(fetchOneData(null));
      dispatch(clearOneData());
    }
  }, [_id, dispatch]);
  const handeleSendData = (e: any) => {
    dispatch(sendData());
  }
  const handeleClearData = (e: any) => {
    dispatch(clearOneData());
  }

  return (
    <div className=" bg-transparent py-[18px] flex flex-col gap-10 ">
    <HeadTable title="driver" description="register new driver" />
    <div className=" flex justify-center gap-8 container min-h-screen ">

        <div className="flex flex-col items-center gap-11 w-full  h-max  md:bg-white  md:rounded-lg md:border md:border-grayWhite md:p-4">
            <div className=" h-max w-full flex flex-col gap-6 ">
                <div className="text-2xl font-bold">Driver Information</div>
                <div className=" w-full grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div className="flex flex-col gap-2">
                        <CustomLabel bold>Account</CustomLabel>
                        <CustomInput placeholder='Select Company' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <CustomLabel bold>Vehicle Type</CustomLabel>
                        <div className="flex gap-4" dir="ltr">
                            <Checkbox className='flex gap-2' defaultSelected size="md">Heavy Vehicle</Checkbox>
                            <Checkbox className='flex gap-2' defaultSelected size="md">Light Vehicle</Checkbox>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <CustomLabel bold>Name</CustomLabel>
                        <CustomInput placeholder='Driver Name' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <CustomLabel bold>Driver Name Arabic</CustomLabel>
                        <CustomInput placeholder='Driver Name Arabic' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <CustomLabel bold>Mobile Number</CustomLabel>
                        <CustomInput placeholder='Driver Mobile Number' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <CustomLabel bold>License Number</CustomLabel>
                        <CustomInput placeholder='Driver License Number' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <CustomLabel bold>License No Number</CustomLabel>
                        <CustomInput placeholder='Driver License No Number' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <CustomLabel bold> User Number</CustomLabel>
                        <CustomInput placeholder=' Driver User Number' />
                    </div>       
                    <div className="flex flex-col gap-2">
                        <CustomLabel bold>Employee Id</CustomLabel>
                        <CustomInput placeholder=' Driver User Number' />
                    </div>
                        <PasswordInput label='Password' placeholder='User Password' />
                    <div className="flex flex-col gap-2">
                        <CustomLabel bold>Date of Birth</CustomLabel>
                        <div className="relative w-full border border-[#D7D7D7] rounded-lg">
                            <DatePicker
                                onChange={(date) => console.log(date)}
                                className="px-3 border-none outline-none w-full transition-all text-mainColor h-[42px] bg-transparent rounded-[8px]"
                                placeholderText={"Registration Date"}
                            />
                            <div className="absolute inset-y-0 end-2 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <CustomLabel bold>Licence Expiry Date</CustomLabel>
                        <div className="relative w-full border border-[#D7D7D7] rounded-lg">
                            <DatePicker
                                onChange={(date) => console.log(date)}
                                className="px-3 border-none outline-none w-full transition-all text-mainColor h-[42px] bg-transparent rounded-[8px]"
                                placeholderText={"Licence Expiry Date"}
                            />
                            <div className="absolute inset-y-0 end-2 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <CustomLabel bold>Visa Expiry Date</CustomLabel>
                        <div className="relative w-full border border-[#D7D7D7] rounded-lg">
                            <DatePicker
                                onChange={(date) => console.log(date)}
                                className="px-3 border-none outline-none w-full transition-all text-mainColor h-[42px] bg-transparent rounded-[8px]"
                                placeholderText={"Visa Expiry Date"}
                            />
                            <div className="absolute inset-y-0 end-2 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <CustomLabel bold>Permit Expiry Date</CustomLabel>
                        <div className="relative w-full border border-[#D7D7D7] rounded-lg">
                            <DatePicker
                                onChange={(date) => console.log(date)}
                                className="px-3 border-none outline-none w-full transition-all text-mainColor h-[42px] bg-transparent rounded-[8px]"
                                placeholderText={"Permit Expiry Date:"}
                            />
                            <div className="absolute inset-y-0 end-2 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-between items-center">
                    <Checkbox className='flex gap-2' dir='ltr' defaultSelected size="md">Heavy Vehicle</Checkbox>
                    <div className="flex flex-col w-8/12 gap-2">
                        <CustomLabel bold>Assign Assest</CustomLabel>
                        <CustomSelector
                            value=""
                            options={[{ label: "test", value: "test" }]}
                            onChange={(e: any) => console.log(e)}
                            placeholder={"Select Type"}
                            isLoading={false}
                        />
                    </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <CustomLabel bold>Employment Status</CustomLabel>
                        <CustomSelector
                            value=""
                            options={[{ label: "", value: "" }]}
                            onChange={(e: any) => console.log(e)}
                            placeholder={"Select Type"}
                            isLoading={false}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <CustomLabel bold>DOB Format</CustomLabel>
                        <CustomSelector
                            value=""
                            options={[{ label: "", value: "" }]}
                            onChange={(e: any) => console.log(e)}
                            placeholder={"Select Type"}
                            isLoading={false}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <CustomLabel bold>Nationality:</CustomLabel>
                        <CustomSelector
                            value=""
                            options={[{ label: "", value: "" }]}
                            onChange={(e: any) => console.log(e)}
                            placeholder={"Driver Nationality"}
                            isLoading={false}
                        />
                    </div>
                    <div className=' flex items-center' dir="ltr">
                    <Checkbox className='flex gap-2' defaultSelected size="md">Tag ID</Checkbox>
                    </div>
               
                    <div className="flex flex-col gap-2">
                        <CustomLabel bold> Working Hours</CustomLabel>
                        <CustomInput placeholder='Working Hours' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <CustomLabel bold> Overtime charges</CustomLabel>
                        <CustomInput placeholder='Overtime charges' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <CustomLabel bold>Other Permit</CustomLabel>
                        <CustomInput placeholder='Other Permit' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <CustomLabel bold>Permit No:</CustomLabel>
                        <CustomInput placeholder='Permit No' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <CustomLabel bold>Emergency Contact Name</CustomLabel>
                        <CustomInput placeholder='Emergency Contact Name' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <CustomLabel bold>Emergency Contact Number</CustomLabel>
                        <CustomInput placeholder='Emergency Contact Number' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <CustomLabel bold>Blood Group</CustomLabel>
                        <CustomInput placeholder='Blood Group' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <CustomLabel bold>Address</CustomLabel>
                        <TextareaAtom></TextareaAtom>
                    </div>
                    <div className="flex flex-col gap-2">
                        <CustomLabel bold>Notes</CustomLabel>
                        <TextareaAtom></TextareaAtom>
                    </div>
                </div>

            </div>
            <div className="flex flex-col md:w-5/12 w-full gap-6">
            <Button onClick={handeleSendData} primary className='px-8 w-full'>
              Register
            </Button>
            <Button onClick={handeleClearData} className='px-8 w-full'>
              Clear
            </Button>
          </div>
        </div>
    </div>

</div>
  );
};

export default CUDriversComponent;
