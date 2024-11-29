function AnalysisSummaryHeadOrganism({ data }: any) {
  return (
    <div className=" flex md:justify-around justify-around md:px-10 pt-[22px]">
      {data.map((item: any, index: any) => (
        <div key={index}>
          <div className=" text-[18px] font-bold">{item.title}</div>
          <div className=" font-bold text-center text-mainColor">
            {item.views}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AnalysisSummaryHeadOrganism;
