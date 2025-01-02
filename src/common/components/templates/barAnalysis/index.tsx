import React from "react";
import dynamic from 'next/dynamic';

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

const ApexChartRenderBar = ({ data = [], categories = [] }: any) => {
  const options = {
    chart: {
      type: 'bar' as const,
      height: '100%',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 5,
        borderRadiusApplication: 'end' as const,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: categories,
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val + " Vehicles";
        },
      },
    },
    colors: [
      '#FF0000', // Vehicle Not Register in Wasl - Red
      '#008000', // Vehicle Register in Wasl - Green
      '#0000FF', // Vehicle Deleted - Blue
      '#FF5733', // Vehicle Not Register in Wasl Public - Orange
      '#28a745', // Vehicle Register in Wasl Public - Dark Green
      '#3498db', // Vehicle Deleted Public - Light Blue
    ],
  };

  return (
    <div className="w-full">
      <ApexCharts
        options={options}
        series={data}
        type="bar"
        width="100%"
      />
    </div>
  );
};

function BarAnalysis() {
  const data = [
    {
      name: 'Vehicle Not Register in Wasl',
      data: [40, 35, 50], 
    },
    {
      name: 'Vehicle Register in Wasl',
      data: [76, 70, 90], 
    },
    {
      name: 'Vehicle Deleted',
      data: [35, 40, 45], 
    },
    {
      name: 'Vehicle Not Register in Wasl Public',
      data: [60, 65, 50],
    },
    {
      name: 'Vehicle Register in Wasl Public',
      data: [85, 95, 100],
    },
    {
      name: 'Vehicle Deleted Public',
      data: [41, 60, 50], 
    },
  ];

  const labels = ['Feb', 'Mar', 'Apr'];

  return (
    <div className="bg-white flex items-center">
      {data && labels && (
        <ApexChartRenderBar
          data={data}
          categories={labels}
        />
      )}
    </div>
  );
}

export default BarAnalysis;
