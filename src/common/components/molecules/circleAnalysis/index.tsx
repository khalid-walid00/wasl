import React from "react";
import dynamic from "next/dynamic";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const CircleAnalysis: React.FC<any> = ({ data, labels }) => {
  const ApexChartRenderCircle = ({ data = [], categories = [] }: any) => {
    return (
      <ApexCharts
        options={{
          chart: {
            type: "pie",
          },
          labels: categories,
          series: data.map((item:any) => item.count),
          tooltip: {
            y: {
              formatter: (value: any, { seriesIndex }: any) => {
                const method = categories[seriesIndex];
                const statusDetails = data[seriesIndex].statusCount
                  .map(
                    (status: any) => `
                    <div class="tooltip-item">
                      <strong>Status:</strong> ${status.status} <br />
                      <strong>Count:</strong> ${status.count}
                    </div>
                    `
                  )
                  .join("<hr />");

                return `
                  <div class="tooltip-content">
                    <div><strong>${value} requests for ${method}</strong></div>
                    <div class="status-details">${statusDetails}</div>
                  </div>
                `;
              },
            },
          },
          legend: {
            show: true,
          },
          responsive: [
            {
              breakpoint: 600,
              options: {
                chart: {
                  width: "100%",
                },
              },
            },
          ],
        }}
        series={data.map((item:any) => item.count)}
        type="pie"
        width="100%"
      />
    );
  };

  return (
    <div>
      {data && <ApexChartRenderCircle data={data} categories={labels} />}
    </div>
  );
};

export default CircleAnalysis;
