import CircleAnalysis from '../../molecules/circleAnalysis';
import Section from '../../molecules/section';
// type DataType = {
//   data: number[];
//   labels: string[];
//   total: number;
// };

// type CountrySctionProps = {
//   data: DataType;
// };

const CountryAnalysisTemplate: React.FC<any> = ({
  // data,
}) => {
  const data = [40, 30, 20, 10];
  const labels = ["فئة 1", "فئة 2", "فئة 3", "فئة 4"]; 

  return (
       <Section className="bg-white  rounded-[16px]" titleClass='text-black text-bold text-[18px] px-[22px] py-[15px] '
        title='test'>
      <CircleAnalysis
        data={data}
        labels={labels}
        title={"test"}
        loading={false}
        description={"ss"}
        name={"test"}
        />
        </Section>
  );
};

export default CountryAnalysisTemplate;
