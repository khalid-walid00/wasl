import AnalysisCard from "../../molecules/analysisCard";

function AnalysisSummaryOrganism({ data }: any) {


  return (
    <div className="  flex flex-col gap-4 w-full ">
      {
        data.map((item: any, index: any) => (
          <AnalysisCard
            key={index}
            index={index}
            title={item.title}
            image={item.image}
            trend={item.trend}
            percentage={item.percentage}
            total={item.total}
          />))
      }
    </div>
  );
}

export default AnalysisSummaryOrganism;