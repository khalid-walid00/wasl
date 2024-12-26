"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import { useState, useEffect } from "react";
import CustomSelector from "../../atoms/customSelector/CustomSelector";
// @ts-ignore
import moment from "moment-hijri";

function DynamicDateInput({ label, slice, field, defaultValue }: { label: string, slice: any, field: string, defaultValue?: string }) {
    const stateSlice = useSelector((state: any) => state[slice]);
    const value = stateSlice ? stateSlice[field] : "";
    const errors = stateSlice?.errors || [];
    const dispatch = useDispatch();

    const parseDate = (date: string) => {
        if (date) {
            const [y, m, d] = date.split("-");
            return { year: y, month: m, day: d };
        }
        return { year: "", month: "", day: "" };
    };

    // تحديد القيم الافتراضية بناءً على defaultValue أو قيمة المخزن في slice
    const initialDate = parseDate(value || defaultValue || "");
    const [year, setYear] = useState(initialDate.year);
    const [month, setMonth] = useState(initialDate.month);
    const [day, setDay] = useState(initialDate.day);

    const currentHijriYear = moment().iYear();

    const yearOptions = Array.from({ length: currentHijriYear - 1400 + 1 }, (_, index) => ({
        label: (currentHijriYear - index).toString(),
        value: (currentHijriYear - index).toString(),
    }));

    const monthOptions = Array.from({ length: 12 }, (_, index) => ({
        label: (index + 1).toString().padStart(2, "0"),
        value: (index + 1).toString().padStart(2, "0"),
    }));

    const getDaysInMonth = (year: string, month: string) => {
        const daysInMonth = moment(`${year}-${month}-01`, "iYYYY-iMM-DD").daysInMonth();
        return Array.from({ length: daysInMonth }, (_, index) => ({
            label: (index + 1).toString().padStart(2, "0"),
            value: (index + 1).toString().padStart(2, "0"),
        }));
    };

    const [dayOptions, setDayOptions] = useState(getDaysInMonth(initialDate.year || currentHijriYear.toString(), initialDate.month || "01"));

    // تحديث الحقول عند تحميل المكون
    useEffect(() => {
        const initial = parseDate(value || defaultValue || "");
        setYear(initial.year);
        setMonth(initial.month);
        setDay(initial.day);
        setDayOptions(getDaysInMonth(initial.year || currentHijriYear.toString(), initial.month || "01"));
    }, [value, defaultValue]);

    useEffect(() => {
        if (year && month) {
            setDayOptions(getDaysInMonth(year, month));
        }
    }, [year, month]);

    const error = errors.find((err: { field: string }) => err.field === field);

    const handleYearChange = (value: string) => {
        setYear(value);
        updateDateInRedux(value, month, day);
    };

    const handleMonthChange = (value: string) => {
        setMonth(value);
        updateDateInRedux(year, value, day);
    };

    const handleDayChange = (value: string) => {
        setDay(value);
        updateDateInRedux(year, month, value);
    };

    const updateDateInRedux = (newYear: string, newMonth: string, newDay: string) => {
        dispatch({
            type: `${slice}/setCUData`,
            payload: {
                [field]: `${newYear || ""}-${newMonth || ""}-${newDay || ""}`,
            },
        });
    };

    return (
        <div className="relative flex flex-col gap-4">
            <CustomLabel bold>{label}</CustomLabel>
            <div className="flex gap-4 items-center">
                <div className="w-full">
                    <CustomSelector
                        bgArrow={false}
                        value={year}
                        options={yearOptions}
                        onChange={(e) => handleYearChange(e)}
                        placeholder="السنة"
                        required
                        className={`${error ? 'border-red-500' : 'border-gray-300'}`}
                    />
                </div>
                <div className="w-full">
                    <CustomSelector
                        bgArrow={false}
                        value={month}
                        options={monthOptions}
                        onChange={(e) => handleMonthChange(e)}
                        placeholder="الشهر"
                        required
                        className={`${error ? 'border-red-500' : 'border-gray-300'}`}
                    />
                </div>
                <div className="w-full">
                    <CustomSelector
                        value={day}
                        bgArrow={false}
                        options={dayOptions}
                        onChange={(e) => handleDayChange(e)}
                        required
                        placeholder="اليوم"
                        className={`${error ? 'border-red-500' : 'border-gray-300'}`}
                    />
                </div>
            </div>

            <div
                className={`absolute text-red-500 left-0 top-full transition-all duration-300 ${
                    error ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
                }`}
            >
                {error?.message}
            </div>
        </div>
    );
}

export default DynamicDateInput;
