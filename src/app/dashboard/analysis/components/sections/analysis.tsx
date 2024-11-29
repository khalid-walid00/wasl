import dynamic from 'next/dynamic';
import { Section } from '~/common/components/organisms/Section';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

const ApexChartRender = ({ data, categories }: any) => {
  return (<ApexCharts
    options={{
      chart: {
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        type: 'datetime',
        categories,
      }
    }}
    series={data}
    type={'line'}
    height={350}
    width={"100%"}
  />)
}
function Analysis ({loading,title,description,data ,name}:any){
  return  (<Section loading={loading} title={title} button={description}>
  {data && (ApexChartRender({
    data: [{
      name,
      data: data?.data ?? []
    }], categories: data?.labels ?? []
  }))}
</Section>)
}

export default Analysis;