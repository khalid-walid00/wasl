"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import DatePicker from "react-datepicker";
import { setCUData } from "~/app/dashboard/companies/companies.slice";

function DateOfBirthHijri() {
    const {
        company: { DateOfBirthHijri }
    } = useSelector((state: any) => state.companiesSlice);

    const dispatch = useDispatch();

    const DateOfBirthHijriChange = (e: any) => {

        dispatch(setCUData({ DateOfBirthHijri: e }));
    };

    return (
        <div className="flex flex-col gap-2">
            <CustomLabel bold>Date Of Birth Hijri</CustomLabel>
            <div className="relative w-full border border-[#D7D7D7] rounded-lg">
                <DatePicker
                    selected={DateOfBirthHijri}
                    onChange={DateOfBirthHijriChange}
                    wrapperClassName="w-full"
                    className="px-3 border-none outline-none w-full transition-all text-mainColor h-[42px] bg-transparent rounded-[8px]"
                    placeholderText={"Registration Date"}
                    dateFormat="yyyy-MM-dd"
                />
                <div className="absolute inset-y-0 end-2 flex items-center ps-3.5 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default DateOfBirthHijri;
