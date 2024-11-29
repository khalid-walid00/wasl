"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./analysisSlice";
import SectionLoading from "~/common/components/atoms/sectionLoading";
import DatepickerComponent from "./components/datePickerAnalysis";
import AnalysisSummaryTemplate from "~/common/components/templates/analysisSummary";
import CountryAnalysisTemplate from "../../../common/components/templates/countryAnalysis";
import SalesAnalysisTemplate from "~/common/components/templates/barAnalysis";
import MostTrendingAnalysis from "../../../common/components/templates/mostTrendingAnalysis";
import DountAnalysis from "~/common/components/templates/DountAnalysis";




const Page = () => {
  const dispatch = useDispatch();
  // const { analysis: { countries, platforms, products, referrer }, loading } =
  // useSelector((state: any) => state.analysisSlice);

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, [dispatch]);

  return (
    <div className=" flex flex-col gap-6">
      <DatepickerComponent />
      <div className="md:container bg-[#F7F7F7] px-[34px]  pb-[50px]">

        {false ? <><SectionLoading /></> : <>

          <div className=" flex flex-col gap-[20px] ">
          <AnalysisSummaryTemplate />
          <div className="grid md:grid-cols-2 grid-cols-1 gap-[21px] h-full">
            <SalesAnalysisTemplate />
            <CountryAnalysisTemplate  />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-[21px]  h-full">
            <DountAnalysis title="test"/>
            <MostTrendingAnalysis  title= "test" />
          </div>
          </div>
          
        </>}

      </div>    </div>
  );
};

export default Page;
