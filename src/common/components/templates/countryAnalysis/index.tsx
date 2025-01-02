import React from "react";
import CircleAnalysis from "../../molecules/circleAnalysis";

const CountryAnalysisTemplate: React.FC<any> = () => {
  const data = [
    { 
      method: "Get", 
      statusCount: [
        { status: 200, count: 40 },
        { status: 404, count: 5 },
        { status: 500, count: 2 }
      ],
      registData: "Data A", 
      count: 47 
    },
    { 
      method: "Post", 
      statusCount: [
        { status: 200, count: 10 },
        { status: 404, count: 10 },
        { status: 500, count: 5 }
      ],
      registData: "Data B", 
      count: 25 
    },
    { 
      method: "Put", 
      statusCount: [
        { status: 200, count: 15 },
        { status: 404, count: 2 },
        { status: 500, count: 3 }
      ],
      registData: "Data C", 
      count: 20 
    },
    { 
      method: "Delete", 
      statusCount: [
        { status: 200, count: 2 },
        { status: 404, count: 3 },
        { status: 500, count: 5 }
      ],
      registData: "Data D", 
      count: 10 
    },
  ];

  const labels = ["Get", "Post", "Put", "Delete"];

  return (
    <div className="bg-white rounded-[16px]">
      <div className="text-black text-bold text-[18px] px-[22px] py-[15px]">Requests</div>
      <CircleAnalysis data={data} labels={labels} />
    </div>
  );
};

export default CountryAnalysisTemplate;
