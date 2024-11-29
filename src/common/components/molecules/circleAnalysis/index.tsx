import React from "react";
import dynamic from 'next/dynamic';

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

const ApexChartRenderCircle = ({ data = [], categories = [] }: any) => {
  return (
    <ApexCharts
      options={{
        chart: {
          type: 'bar',
          stacked: true

        },
        series: [{
          data: [{
            x: 'category A',
            y: 10
          }, {
            x: 'category B',
            y: 18
          }, {
            x: 'category C',
            y: 13
          }]
        }]
      }}
      series={data}
      type="pie"
      width="100%"
    />
  );
}

function CircleAnalysis({ data , labels }: any) {
  return (
    <div>
      {data && (
        <ApexChartRenderCircle
          data={data}
          categories={labels}
        />
      )}
    </div>
  );
}

export default CircleAnalysis;
