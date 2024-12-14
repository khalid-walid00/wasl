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
import UploadFile from '~/common/components/atoms/uploadFile';

function CreateDriver() {

    const optionsData = {
        carModel: [
            { label: "BMW", value: "bmw" },
            { label: "Mercedes", value: "mercedes" },
            { label: "Audi", value: "audi" },
            { label: "Tesla", value: "tesla" },
        ],
        vehicleType: [
            { label: "سيارة", value: "car" },
            { label: "دراجة نارية", value: "motorcycle" },
            { label: "شاحنة", value: "truck" },
            { label: "حافلة", value: "bus" },
            { label: "سيارة كهربائية", value: "electric_car" },
            { label: "سيارة رياضية", value: "sports_car" }
        ],
        status: [
            { label: "نشط", value: "active" },
            { label: "معلق", value: "pending" },
            { label: "ملغي", value: "canceled" },
            { label: "مهمل", value: "rejected" },
        ],
    };
    

//     <div className="flex flex-col gap-2">
//     <CustomLabel bold>Address</CustomLabel>
//     <div className=" relative bg-grayWhite w-full border border-[#D7D7D7] rounded-lg">
//     <UploadFile onSelect={(file) => console.log(file)}></UploadFile>
//     </div>
// </div>
    return (
        <div className=" bg-transparent py-[18px] flex flex-col gap-10 ">
            <HeadTable title="driver" description="register new driver" />
            <div className=" flex justify-center gap-8 container min-h-screen ">

                <div className="flex flex-col items-center gap-11 w-full  h-max  bg-white  rounded-lg border border-grayWhite p-4">
                    <div className=" h-max w-full flex flex-col gap-6 ">
                        <div className="text-2xl font-bold">Driver Information</div>
                        <div className=" w-full grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <CustomLabel bold>Account</CustomLabel>
                                <CustomInput placeholder='Select Company' />
                            </div>
                            <div className="flex flex-col gap-2">
                                <CustomLabel bold>Vehicle Type</CustomLabel>
                                <div className="flex gap-4">
                                    <Checkbox defaultSelected size="md">Heavy Vehicle</Checkbox>
                                    <Checkbox defaultSelected size="md">Light Vehicle</Checkbox>
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
                                <CustomLabel bold>Licence Expiry Date:</CustomLabel>
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
                                <CustomLabel bold>Permit Expiry Date:</CustomLabel>
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
                            <Checkbox defaultSelected size="md">Heavy Vehicle</Checkbox>
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
                            <Checkbox defaultSelected size="md">Tag ID</Checkbox>
                       
                            <div className="flex flex-col gap-2">
                                <CustomLabel bold> Working Hours</CustomLabel>
                                <CustomInput placeholder='Working Hours:' />
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
                                <CustomInput placeholder='Permit No:' />
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
                    <div className=" w-4/12  r">

                        <Button primary className=' px-8 '>
                            تسجيل
                        </Button>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default CreateDriver;