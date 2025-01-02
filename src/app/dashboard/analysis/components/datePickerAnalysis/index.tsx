import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../analysisSlice";
import { DateTime } from "luxon";
import { DateRangePicker } from "@nextui-org/react";
import Section from "~/common/components/molecules/section";
import AnalysisOrganism from "~/common/components/organisms/analysisData";
import "./style.css";

interface DatepickerData {
  startDate: Date | null;
  endDate: Date | null;
}

const DatepickerComponent: React.FC = () => {
  const dispatch = useDispatch();


  const [buttonSelected, setButtonSelected] = useState("last 7 days");

  const convertToISO = (date: Date | null): string | null =>
    date ? DateTime.fromJSDate(date).toISO() : null;

  const handleDateChange = (value: any) => {
    const start = value?.start ? (value.start.toDate() as Date) : null;
    const end = value?.end ? (value.end.toDate() as Date) : null;


    dispatch(
      setFilter({
        startDate: convertToISO(start),
        endDate: convertToISO(end),
      })
    );
  };

  const setDateRange = (range: string, days: number) => {
    const end = DateTime.now().toJSDate();
    const start = DateTime.now().minus({ days }).toJSDate();
    setButtonSelected(range); 
    dispatch(
      setFilter({
        startDate: convertToISO(start),
        endDate: convertToISO(end),
      })
    );
  };

  const AnalysisData = [
    { title: "this day", value: "today", action: () => setDateRange("this day", 0) },
    { title: "last 7 days", value: "last 7 days", action: () => setDateRange("last 7 days", 7) },
    { title: "last month", value: "last month", action: () => setDateRange("last month", 30) },
  ];

  return (
    <Section>
      <div className=" bg-transparent pt-[18px]">
      <div className="flex flex-col-reverse gap-4  bg-white border border-[#E5E5E5] md:flex-row justify-between px-10  items-center py-[17px] ">
        <div className=" w[224px] h-[40px] border-none text-white-all date-analysis rounded-lg px-[5px]">
          <DateRangePicker
            color="primary"
            variant={"bordered"} 
            aria-label="Options"
            style={{ border: "none", color: "white", borderWidth: 0 }}
            className="max-w-xs bg-transparent text-white"
            onChange={handleDateChange}
          />
        </div>
        <AnalysisOrganism buttonSelected={buttonSelected} data={AnalysisData} />
      </div>
      </div>
    </Section>
  );
};

export default DatepickerComponent;
