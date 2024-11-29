'use client'
import dynamic from 'next/dynamic';
import styles from './MyChart.module.css'; // Assuming you have a CSS module for styling
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type LinesChartProps = {
  height?: number;
  data: number[];
  labels: string[];
  total: number;
  title: string;
};

const ChartLineAnalysis: React.FC<LinesChartProps> = ({height = "100%",data = [],labels = [],total = 0,title = 'المقالات'}) => {
  const calculatePercentageChange = (data: number[]) => {
    if (data.length < 3) return 0; // تحقق من أن هناك بيانات كافية
    const initial = data[data.length - 2]; // القيمة قبل 2 أيام
    const final = data[data.length - 1]; // القيمة الحالية
    return initial !== 0 ? ((final - initial) / initial) * 100 : 0;
  };
  const percentageChange = calculatePercentageChange(data);
  // تحديد لون الخط والخلفية بناءً على نسبة التغيير
  const lineColor = percentageChange > 0 ? '#27C6DB' : '#008ffb';
  const fillColor = percentageChange > 0 ? 'rgba(39, 198, 219, 0.3)' : 'rgba(255, 69, 96, 0.3)';

  // إعدادات الرسم البياني
  const options: ApexOptions = {
    chart: {
      type: 'area',
      height: "100%",
      foreColor: '#FFFFFF',
      background: 'transparent',
      sparkline:{enabled:true},
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
      colors: [lineColor]
    },
    xaxis: {
      categories: labels.length > 0 ? labels : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    grid: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    title: {
      align: 'left',
      style: {
        fontSize: '20px',
        color: '#FFFFFF'
      }
    },
    annotations: {
      yaxis: [
        {
          y: data.length > 0 ? data[data.length - 1] : 0,
          borderColor: lineColor,
          label: {
            borderColor: lineColor,
            style: {
              color: '#fff',
              background: lineColor
            },
            // text: `عدد ${title}: ${total} (${percentageChange.toFixed(2)}%)`
          }
        }
      ]
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: [fillColor],
        shadeIntensity: 1,
        type: 'vertical',
        opacityFrom: 0.5,
        opacityTo: 0
      }
    }
  };

  // البيانات لسلسلة الرسم البياني
  const series = [
    {
      name: `عدد ${title}`,
      data: data
    }
  ];

  return (
      <Chart options={options as ApexOptions} series={series} type="area" height={height}  width={"100%"}/>
  );
};

export default ChartLineAnalysis;
