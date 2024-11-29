import React from "react";
import dynamic from 'next/dynamic';

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

const ApexChartRenderBar = ({ data = [], categories = [] }: any) => {
  var options = {
    series: data, 
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
          return "$ " + val + " thousands";
        },
      },
    },
  };

  return (
    <div className=" w-full">
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
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    },
    {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }
  ];
  
  const labels = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  
  
  return (
    <div className=" bg-white flex items-center ">
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
