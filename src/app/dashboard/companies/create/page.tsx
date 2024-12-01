"use client";
import React from 'react';
import CustomInput from '~/common/components/atoms/input';
import CustomLabel from '~/common/components/atoms/label';
import HeadTable from '~/common/components/molecules/headTable';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomSelector from '~/common/components/atoms/customSelector/CustomSelector';
import Button from '~/common/components/atoms/button';

function CreateComapany() {
    return (
        <div className="bg-transparent py-[18px] flex flex-col gap-10">
            <HeadTable title="Create New Company" description="Create a new company" />
            <div className="flex flex-col  justify-between gap-8 container">
                <div className="flex items-center flex-col w-full gap-6 bg-white rounded-lg border border-grayWhite p-4">
                    <div className="text-2xl font-bold">Company Information</div>
                    <div className=" w-full grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <CustomLabel bold>Account</CustomLabel>
                            <CustomInput placeholder='Select Company' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <CustomLabel bold>Register Type </CustomLabel>
                            <CustomSelector
                                value={{ label: "", value: "" }}
                                options={[{ label: "", value: "" }]}
                                onChange={(e: any) => console.log(e)}
                                placeholder={"Select Type"}
                                isLoading={false}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <CustomLabel bold> Identity Number</CustomLabel>
                            <CustomInput placeholder='Company Number' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <CustomLabel bold>Commercial Record Number</CustomLabel>
                            <CustomInput placeholder='Commercial Record Number' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <CustomLabel bold>Commercial Record Issue
                                Manager Phone:
                                Date Hijrie</CustomLabel>
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
                            <CustomLabel bold>Extension Number</CustomLabel>
                            <CustomInput placeholder='Extension Number' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <CustomLabel bold>Activity</CustomLabel>
                            <CustomSelector
                                value={{ label: "DEFAULT", value: "" }}
                                options={[{ label: "", value: "" }]}
                                onChange={(e: any) => console.log(e)}
                                placeholder={"Select Type"}
                                isLoading={false}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <CustomLabel bold>DOB Format</CustomLabel>
                            <CustomSelector
                                value={{ label: "DEFAULT", value: "" }}
                                options={[{ label: "", value: "" }]}
                                onChange={(e: any) => console.log(e)}
                                placeholder={"Select Type"}
                                isLoading={false}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <CustomLabel bold>Date of Birth:</CustomLabel>
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
                            <CustomLabel bold>Phone No</CustomLabel>
                            <CustomInput placeholder='Phone No' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <CustomLabel bold>Email Id</CustomLabel>
                            <CustomInput placeholder='Email Id' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <CustomLabel bold>Manager Name</CustomLabel>
                            <CustomInput placeholder='Manager Name' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <CustomLabel bold>Manager Phone</CustomLabel>
                            <CustomInput placeholder='Manager Phone' />
                        </div>

                        <div className="flex flex-col gap-2">
                            <CustomLabel bold>Manager Mobile </CustomLabel>
                            <CustomInput placeholder='Manager Mobile' />
                        </div>
                    </div>
                    <div className="flex flex-col w-5/12 gap-6">
                        <Button primary className='px-8 w-full'>
                            Register
                        </Button>
                        <Button className='px-8 w-full'>
                            Clear
                        </Button>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default CreateComapany;