import React from 'react';
import dynamic from 'next/dynamic';

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

interface DataPoint {
  x: number;
  y: number;
  z: number;
}

interface ApexChartRenderProps {
  seriesData?: DataPoint[];
  categories?: string[];
}

interface BarAnalysisProps {
  loading: boolean
  title: string
  name: string
  data?: {
    data: DataPoint[];
    labels: string[];
  };
}

const generateData = (baseval: number, count: number, yrange: { min: number; max: number }): DataPoint[] => {
  const series: DataPoint[] = [];
  for (let i = 0; i < count; i++) {
    const x = baseval + i * 86400000;
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
    series.push({ x, y, z });
  }
  return series;
};

const ApexChartRender: React.FC<ApexChartRenderProps> = ({ seriesData = [], categories = [] }) => {
  return (
    <ApexCharts
      options={{
        chart: {
          height: 350,
          type: 'bubble',
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          opacity: 0.8,
        },
        title: {
          text: '',
        },
        xaxis: {
          tickAmount: 12,
          type: 'category',
          categories: categories,
        },
        yaxis: {
          max: 70,
        },
      }}
      series={[
        {
          name: 'Bubble1',
          data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60,
          }),
        },
        {
          name: 'Bubble2',
          data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60,
          }),
        },
        {
          name: 'Bubble3',
          data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60,
          }),
        },
        {
          name: 'Bubble4',
          data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60,
          }),
        },
      ]}
      type="bubble"
      width="100%"
    />
  );
};

const BarAnalysis: React.FC<BarAnalysisProps> = ({ data }) => {
  const seriesData = generateData(new Date().getTime(), 4, { min: 10, max: 60 });
  const categories = ['فئة 1', 'فئة 2', 'فئة 3', 'فئة 4']; 

  return (
    <div>
      <ApexChartRender seriesData={seriesData} categories={categories} />
    </div>
  );
};

export default BarAnalysis;
