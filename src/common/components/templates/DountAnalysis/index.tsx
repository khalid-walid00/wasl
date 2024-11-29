import React from 'react';
import Section from '../../molecules/section';
import DountAnalysisCricle from '../../molecules/donutAnlaysis';

const DountAnalysis = ({ data ,title }:any) => {
  return (
      <Section className="bg-white  rounded-[16px]" titleClass='py-6 px-7' title={title}>
        <DountAnalysisCricle
          data={data}
          title={"test"}
          loading={false}
          name={"test"}
        />
      </Section>
  );
};


export default DountAnalysis;
