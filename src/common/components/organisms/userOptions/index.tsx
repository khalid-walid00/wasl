import { useRouter } from "next/navigation";
function UserOptionsOrganism({ data: userOptionsList }: any) {
  const router = useRouter();
  const handleClick = (item: { path: string; onClick?: () => void }) => {
    if (item.onClick) {
      item.onClick();
    } else {
      router.push(item.path);
    }
  };

  return (
    <>
      {userOptionsList.map((item: any, index: any) => (
        <div
          key={index}
          className="flex w-full p-[12px] items-center gap-[8px] cursor-pointer menuProfile "
          onClick={() => handleClick(item)}
        >
          {item.logo}
          <div className="flex flex-col items-start">
            <span className=" text-[14px] font-normal ">{item.title}</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default UserOptionsOrganism;
