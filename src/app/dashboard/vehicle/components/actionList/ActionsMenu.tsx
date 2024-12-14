import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import DeleteProducts from "../../deleteMany";
import DeleteOne from "../../delete";
import { toggleModel } from "../../vehicle.slice";

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
            <button
                onClick={() => dispatch(toggleModel(item.Id))}
              className="flex text-xs items-center  w-full gap-1"
            >
              <Image
                width={16}
                height={16}
                className="w-4 h-4"
                src="/assets/icons/svg/edit.svg"
                alt="icon"
              />
              <span className="group-hover:text-black">تعديل</span>
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
