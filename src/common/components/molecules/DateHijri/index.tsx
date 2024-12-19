"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import { useState, useEffect } from "react";
import CustomSelector from "../../atoms/customSelector/CustomSelector";
// @ts-ignore
import moment from "moment-hijri";

function DynamicDateInput({ label, slice, field }: { label: string, slice: any, field: string }) {
    const stateSlice = useSelector((state: any) => state[slice]);
    const value = stateSlice ? stateSlice[field] : "";
    const dispatch = useDispatch();

    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");

    const currentHijriYear = moment().iYear();
    const yearOptions = Array.from({ length: currentHijriYear - 1400 + 1 }, (_, index) => ({
        label: (currentHijriYear - index).toString(),
        value: (currentHijriYear - index).toString()
    }));

    const monthOptions = Array.from({ length: 12 }, (_, index) => ({
        label: (index + 1).toString().padStart(2, '0'),
        value: (index + 1).toString().padStart(2, '0')
    }));

    const getDaysInMonth = (year: string, month: string) => {
        const daysInMonth = moment(`${year}-${month}-01`, "iYYYY-iMM-DD").daysInMonth();
        return Array.from({ length: daysInMonth }, (_, index) => ({
            label: (index + 1).toString().padStart(2, '0'),
            value: (index + 1).toString().padStart(2, '0')
        }));
    };

    const [dayOptions, setDayOptions] = useState(getDaysInMonth(currentHijriYear.toString(), "01"));

    useEffect(() => {
        if (year && month) {
            setDayOptions(getDaysInMonth(year, month));
        }
    }, [year, month]);

    const handleYearChange = (value: string) => {
        setYear(value);
    };

    const handleMonthChange = (value: string) => {
        setMonth(value);
    };

    const handleDayChange = (value: string) => {
        setDay(value);
    };

    const handleDateChange = () => {
        const formattedDate = `${year}-${month}-${day}`;
        dispatch({
            type: `${slice}/setCUData`,
            payload: { [field]: formattedDate }
        });
    };

    return (
        <div className="flex flex-col gap-4">
            <CustomLabel bold>{label}</CustomLabel>
            <div className="flex gap-4">
                <div className="w-full">
                    <CustomSelector
                        bgArrow={false}
                        value={year}
                        options={yearOptions}
                        onChange={(e) => {
                            handleYearChange(e);
                            handleDateChange();
                        }}
                        placeholder="السنة"
                        required
                    />
                </div>
                <div className="w-full">
                    <CustomSelector
                        bgArrow={false}
                        value={month}
                        options={monthOptions}
                        onChange={(e) => {
                            handleMonthChange(e);
                            handleDateChange();
                        }}
                        placeholder="الشهر"
                        required
                    />
                </div>
                <div className="w-full">
                    <CustomSelector
                        value={day}
                        bgArrow={false}
                        options={dayOptions}
                        onChange={(e) => {
                            handleDayChange(e);
                            handleDateChange();
                        }}
                        required
                        placeholder="اليوم"
                    />
                </div>
            </div>
        </div>
    );
}

export default DynamicDateInput;
