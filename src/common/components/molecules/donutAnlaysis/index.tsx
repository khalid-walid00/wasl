import React from 'react';
import dynamic from 'next/dynamic';

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

// Add interface for props
interface ApexDonutChartProps {
  seriesData: number[];
  categories: string[];
}

const ApexDonutChart = ({ seriesData = [], categories = [] }: ApexDonutChartProps) => {
  const options:any = {
    chart: {
      type: 'donut',
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#fff'],
      },
    },
    colors: ['#00E396', '#FEB019', '#FF4560', '#775DD0', '#008FFB'],
    tooltip: {
      theme: 'dark',
    },
    legend: {
      position: 'right',
      offsetY: 0,
      height: '100%',
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    }],
    labels: categories, // استخدم التسميات هنا
    plotOptions: {
      pie: {
        expandOnClick: true, // يمكن توسيع القسم عند الضغط عليه
      },
      donut: {
        // إعدادات الدونات
        size: '65%',
        labels: {
          show: true,
          name: {
            show: true,
          },
          value: {
            show: true,
          },
        },
      },
    },
  };

  return (
    <ApexCharts
      options={options}
      series={seriesData}
      type="donut"
      width="100%"
    />
  );
};

const DonutAnalysisCircle = ({ data }:any) => {
  const seriesData = [40, 30, 20, 10];
  const categories = ['فئة 1', 'فئة 2', 'فئة 3', 'فئة 4']; 

  return (
    <div>
      <ApexDonutChart seriesData={seriesData} categories={categories} />
    </div>
  );
};

export default DonutAnalysisCircle;
