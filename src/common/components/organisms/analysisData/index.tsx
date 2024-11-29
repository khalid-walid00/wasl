import Button from "../../atoms/button";

function AnalysisSummary({ data, buttonSelected }: any) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {data?.length > 0 &&
        data.map((item: any, index: number) => (
          <Button
            onClick={item.action}
            key={index}
            className={`h-[40px] text-nowrap text-[--mainColor]
              ${buttonSelected == item.title && "custom-box"}`}
            style={{ fontSize: "18px" }}
          >
            {item.title}
            
          </Button>
        ))}
    </div>
  );
}

export default AnalysisSummary;
