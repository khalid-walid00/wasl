import Section from "../../molecules/section";
import AnalysisSummaryOrganism from "../../organisms/analysisSummary";
import MultiLinesChart from "../../molecules/multiLineAnalysis";

function AnalysisSummaryTemplate() {
  const staticAnalysisData = {
    orders: {
      total: 120,
      data: [10, 20, 15, 30, 25, 20, 10],
      labels: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو"],
    },
    views: {
      total: 500,
      data: [50, 70, 60, 90, 80, 70, 50],
      labels: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو"],
    },
    actualViews: {
      total: 300,
      data: [30, 50, 40, 60, 55, 50, 30],
      labels: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو"],
    },
  };

  const { orders, views, actualViews } = staticAnalysisData;

  const getRateData = (data: any) => ({
    percentage: data?.percentage,
    trend: data?.trend,
    total: data?.total,
  });

  const analysisSummary = [
    { title: "company", image: "/assets/images/company.png", ...getRateData(views) },
    { title: "requests", image: "/assets/images/request.png", ...getRateData(orders) },
    { title: "vechile", image: "/assets/images/vehicle.png", ...getRateData(orders) },
    { title: "drivers", image: "/assets/images/driver.png", ...getRateData(orders) },
  ];

  const chartData = [
    { name: "Company not Register in Wasl", data: orders?.data },
    { name: "Company Register in Wasl", data: views?.data },
    { name: "Company Deleted", data: actualViews?.data },
  ];

  return (
    <div className="flex lg:flex-row flex-col justify-between gap-y-10 gap-x-[31px]">
      <div className="lg:w-1/3 w-full">
        <AnalysisSummaryOrganism data={analysisSummary} />
      </div>
      <div className="bg-white flex-1 flex rounded-2xl lg:w-2/3 w-full">
        <Section>
          <div className="flex flex-col h-full justify-between">
            <div className="h-full w-full flex justify-center items-end">
              <MultiLinesChart chartData={chartData} categories={views?.labels} />
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

export default AnalysisSummaryTemplate;
