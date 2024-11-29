import React from 'react';
import dynamic from 'next/dynamic';
import { Section } from '~/common/components/organisms/Section';

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

const ApexChartRender = ({ data=[], categories =[]}:any) => {
  return (
    <ApexCharts
      options={{
        chart: {
          type: 'bar',
          height: 350,
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '40%',
            borderRadius: 5,
            distributed: true, 
          }
        },
        dataLabels: {
          enabled: true,
          style: {
            colors: ['#fff']
          },
          background: {
            enabled: true,
            foreColor: '#000',
            borderRadius: 2,
          },
          offsetX: 0 // لضبط مسافة التسمية
        },
        xaxis: {
          categories,
          labels: {
            style: {
              colors: '#fff',
              fontSize: '14px'
            },
            // opposite: true // لعرض المحور في الجهة الأخرى
          }
        },
        yaxis: {
          reversed: true,
          labels: {
            style: {
              colors: '#fff',
              fontSize: '14px'
            },
            align: 'right', // لضبط محاذاة النصوص إلى اليمين
            // formatter: (value) => {
            //   const labelMap = {
            //     'Google Chrome': 'جوجل كروم',
            //     'Facebook': 'فيسبوك',
            //     'Instagram': 'انستجرام',
            //     'X': 'اكس',
            //     'Other': 'اخرى'
            //   };
            //   return labelMap[value] || value;
            // }
          }
        },
        grid: {
          borderColor: '#555',
          xaxis: {
            lines: {
              show: false
            }
          }
        },
        fill: {
          colors: ['#357EDD', '#00E396', '#FEB019', '#FF4560', '#775DD0']
        },
        tooltip: {
          theme: 'dark'
        }
      }}
      series={data}
      type={'bar'}
      height={350}
      width={"100%"}
    />
  );
}

const Bar = ({ loading, title, description, data, name }:any) => {
  return (
    <div className='text-center' >
      <Section loading={loading} title={title} button={description}>
        {data && (
          <ApexChartRender
            data={[{
              name,
              data: data?.data ?? []
            }]}
            categories={data?.labels ?? []}
          />
        )}
      </Section>
    </div>
  );
}

export default Bar;
