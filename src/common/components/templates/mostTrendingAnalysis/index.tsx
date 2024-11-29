import React from 'react';
import BarAnalysis from '../../molecules/barAnalysis';
import Section from '../../molecules/section';

const MostTrendingAnalysis = ({ data ,title }:any) => {
  return (
      <Section className="bg-white  rounded-[16px]" titleClass='p-6' title={title}>
        <BarAnalysis
          data={data}
          title={"test"}
          loading={false}
          name={"test"}
        />
      </Section>
  );
};


export default MostTrendingAnalysis;
