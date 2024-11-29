

function SeachTypeOrganism({ data,setIschoosed}: any) {
  
  const handleChange = (item: any) => {
    const selectedlocale = item.key;
    setIschoosed(selectedlocale)
  };
  return (
    <div className='flex flex-col h-full  w-full'>
           {data?.length > 0 &&
                    data?.map((item: any) => (
                      <div
                        key={item?._id}
                        onClick={() => handleChange(item)}
                        className="flex text-white  py-2 items-center justify-start border-b last:border-b-0 gap-2
                         border-[#E5E5E5B8] cursor-pointer "
                      >
                    {item?.icon}
                        <div className="text-black text-[16px] ">
                          {item?.label}
                        </div>
                      </div>
                    ))}

    </div>);
}

export default SeachTypeOrganism;