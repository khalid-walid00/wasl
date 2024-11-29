import React from 'react';
import dynamic from 'next/dynamic';
import { format, parseISO } from 'date-fns';
import { ar } from 'date-fns/locale';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

const MultiLinesChart = ({ chartData = [], categories = [] }: any) => {
  
  return (
    <div style={{ width: '100%', display: 'block' }}> 
      <ApexCharts
        options={{
          chart: {
            type: 'bar',
            height: "100%",
            toolbar: {
              show: false
            }
          },
          stroke: {
            width: [2, 2, 2, 2],
            curve: 'smooth'
          },
          plotOptions: {
            bar: {
              columnWidth: '50%',
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: categories,
            labels: {
              style: {
                colors: ['#000'],
                fontSize: '14px'
              },
            }
          },
          yaxis: {
            labels: {
              style: {
                colors: '#fff',
                fontSize: '14px'
              }
            }
          },
          grid: {
            borderColor: '#555'
          },
          fill: {
            colors: ['#357EDD', '#f39c12', '#00E396', '#775DD0']
          },
          tooltip: {
            theme: 'dark'
          },
          legend: {
            show: true,
            labels: {
              colors: '#000'
            }
          }
        }}
        series={chartData}
        type={'line'}
        height={510}
        width={'100%'} 
      />
    </div>
  );
}

export default MultiLinesChart;
