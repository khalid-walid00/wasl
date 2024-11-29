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
        <div className=" bg-transparent py-[18px] flex flex-col gap-10 ">
            <HeadTable title="إنشاء شركة جديدة" description="انشاء شركة جديدة" />
            <div className=" flex flex-col md:flex-row justify-between gap-8 container ">
                <div className=" h-max w-full md:w-1/2 flex flex-col gap-6  bg-white  rounded-lg border border-grayWhite p-4">
                    <div className="text-2xl font-bold"> بيانات الشركة</div>
                    <div className=" flex flex-col gap-4 ">
                        <div className=" flex flex-col gap-2">
                            <CustomLabel bold>اسم الشركة</CustomLabel>
                            <CustomInput placeholder='اسم الشركة' />
                        </div>
                        <div className=" flex flex-col gap-2">
                            <CustomLabel bold>رقم الشركة</CustomLabel>
                            <CustomInput placeholder='رقم الشركة' />
                        </div>
                        <div className=" flex flex-col gap-2">
                            <CustomLabel bold>بريد الالكتروني للشركة</CustomLabel>
                            <CustomInput placeholder='بريد الالكتروني للشركة' />
                        </div>
                        <div className=" flex flex-col gap-2">
                            <CustomLabel bold>السجل التجاري</CustomLabel>
                            <CustomInput placeholder='السجل التجاري' />
                        </div>
                        {/* <div className=" flex flex-col gap-2">
                            <CustomLabel bold>تاريخ التسجيل</CustomLabel>
                            <div className="relative w-full  border border-[#D7D7D7]  rounded-lg" >

                                <DatePicker
                                    onChange={(date) => console.log(date)}
                                    className=" px-3  border-none  outline-none w-full  transition-all text-mainColor h-[42px] bg-transparent rounded-[8px]"
                                    placeholderText={"تاريخ التسجيل"}
                                />
                                <div className="absolute inset-y-0 end-2 flex items-center ps-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                            </div>
                        </div> */}

                        <div className=" flex flex-col gap-2">
                            <CustomLabel bold>الحالة</CustomLabel>
                            <CustomSelector
                                value={{ label: "", value: "" }}
                                options={[{ label: "", value: "" }]}
                                onChange={(e: any) => console.log(e)}
                                placeholder={"الحالة"}
                                isLoading={false}
                            />
                        </div>
                        <div className=" flex flex-col gap-2">
                            <CustomLabel bold>الحالة</CustomLabel>
                            <CustomSelector
                                value={{ label: "", value: "" }}
                                options={[{ label: "", value: "" }]}
                                onChange={(e: any) => console.log(e)}
                                placeholder={"الحالة"}
                                isLoading={false}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-11 w-full md:w-1/2">
                    <div className=" h-max w-full flex flex-col gap-6 bg-white  rounded-lg border border-grayWhite p-4">
                        <div className="text-2xl font-bold"> بيانات مدير الشركة</div>

                        <div className=" flex flex-col gap-4 ">
                            <div className=" flex flex-col gap-2">
                                <CustomLabel bold>اسم المدير</CustomLabel>
                                <CustomInput placeholder='اسم الشركة' />
                            </div>
                            <div className=" flex flex-col gap-2">
                                <CustomLabel bold>هاتف المدير</CustomLabel>
                                <CustomInput placeholder='اسم الشركة' />
                            </div>

                            <div className=" flex flex-col gap-2">
                                <CustomLabel bold>هاتف (2) للمدير</CustomLabel>
                                <CustomInput placeholder='اسم الشركة' />
                            </div>
                            <div className=" flex flex-col gap-2">
                                <CustomLabel bold>البريد الالكتروني للمدير</CustomLabel>
                                <CustomInput placeholder='ايميل المدير' />
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col gap-6">
                    <Button primary className=' px-8 w-full'>
                        تسجيل
                    </Button>
                    <Button  className=' px-8 w-full'>
                        مسح
                    </Button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CreateComapany;