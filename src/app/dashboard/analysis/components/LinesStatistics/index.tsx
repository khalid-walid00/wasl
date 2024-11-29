import React from 'react';
import LinesChart from '../../../../../common/components/templates/barAnalysis';

type DataType = {
  data: number[];
  labels: string[];
  total: number;
};

type Props = {
  data: {
    views: DataType;
    actualViews: DataType;
    orders: DataType;
  };
};

const LinesStatistics: React.FC<Props> = ({ data }) => {
  const { views, actualViews, orders } = data;


  return (
    <>

      <LinesChart
        // data={data || []}
        // total={orders?.total || 0}
        // title={t("analysis.showAnalysis.sectionOne.title")}
        // labels={orders?.labels || []}

      />
    </>
  );
};

export default LinesStatistics;
