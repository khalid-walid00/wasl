import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import DeleteOne from "../../delete";
import { BsDatabaseGear } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setInquiryModel } from "../../companies.slice";

interface Props {
  item?: any;
}
function ActionList({ item }: Props) {
  const dispatch = useDispatch();

  return (
    <div className="relative flex justify-center items-center  text-black gap-2">
      <Dropdown className=" p-0  min-w-40">
        <DropdownTrigger>
          <Button
            isIconOnly
            radius="full"
            size="sm"
            variant="light"
            className="text-[#008ffb]"
          >
            <Image
              width={30}
              height={30}
              src="/assets/icons/actionList.svg"
              alt="actionList Picture"
            />
          </Button>
        </DropdownTrigger>

        <DropdownMenu className="shadow-lg rounded-lg ">
          <DropdownItem className=" flex">
            <Link
              href={`/dashboard/companies/update/${item?.Id}`}
              className="flex text-xs items-center  gap-1"
            >
              <Image
                width={16}
                height={16}
                className="w-4 h-4"
                src="/assets/icons/svg/edit.svg"
                alt="icon"
              />
              <span className="group-hover:text-black">Edit</span>
            </Link>
          </DropdownItem>
          <DropdownItem className=" flex">
            <button onClick={() => dispatch(setInquiryModel(item))} className="flex  w-full text-xs items-center  gap-1">
              <BsDatabaseGear size={16} />
              <span className="group-hover:text-black">inquiry</span>
            </button>
          </DropdownItem>
          <DropdownItem className=" flex">
            <DeleteOne _id={item.Id} />
          </DropdownItem>
        </DropdownMenu>

      </Dropdown>
    </div>
  );
}

export default ActionList;
