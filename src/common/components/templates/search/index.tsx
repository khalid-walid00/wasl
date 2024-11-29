"use client";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import DropDown from "../../molecules/dropDown";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import SeachTypeOrganism from "../../organisms/searchType";
// import { dispatchAction } from "../../atoms/cunstomSearch/dispatchAction";
import CustomInput from "../../atoms/input";
import { useRouter } from "next/navigation";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";
import { BsBuildingGear } from "react-icons/bs";
import { PiUsersLight } from "react-icons/pi";
import { LiaBikingSolid } from "react-icons/lia";


const SectionsSearch = [
  { key: "1", icon: <BsBuildingGear className="text-mainColor" size={20}/> , label: "شركات", href: "products", slice: "products" },
  { key: "2", icon: <PiUsersLight className="text-mainColor" size={20}/>, label: "مستخدمين", href: "articles", slice: "articles" },
  { key: "3", icon: <LiaBikingSolid className="text-mainColor" size={20}/>, label: "سائقين", href: "customers", slice: "customers" },
];


function SearchTemplates() {
  const [isOpen, setIsOpen] = useState(false);
  const [ischoosed, setIschoosed] = useState("");
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const { user } = useSelector((state: any) => state.config);
  const subdomain = user?.defaultApp?.subdomain;



  const selectedSearchType = SectionsSearch.find((item) => item.key === ischoosed);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const redirect = async () => {
    if (ischoosed) {
      const selectedSection = SectionsSearch.find(section => section.key === ischoosed);
      if (selectedSection) {
        const encodedSearch = encodeURIComponent(inputValue);
        const url = `/${subdomain}/${selectedSection.href}?search=${encodedSearch}`;
        // await dispatchAction(dispatch, selectedSection.slice, 'setSearch', encodedSearch);
        // await dispatchAction(dispatch, selectedSection.slice, 'search');
        router.push(url);
      }
    }
  };

  return (

    <div className='flex w- lg:gap-5 gap-1 items-center md:justify-normal justify-center'>
      <div className="flex shadow-[0px_0px_15px_rgba(0,0,0,0.1)] border border-[#ECECEC] md:w-auto  rounded-lg">
        <div  className="font-bold p-3">
          <svg onClick={redirect} className='cursor-pointer' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.9297 3.125C15.0363 3.125 17.5547 5.6434 17.5547 8.75C17.5547 11.8566 15.0363 14.375 11.9297 14.375C10.3762 14.375 8.97082 13.7461 7.95221 12.7275C6.9336 11.7089 6.30469 10.3035 6.30469 8.75C6.30469 5.6434 8.82309 3.125 11.9297 3.125ZM18.8047 8.75C18.8047 4.95304 15.7266 1.875 11.9297 1.875C8.13273 1.875 5.05469 4.95304 5.05469 8.75C5.05469 10.4232 5.65304 11.9575 6.64641 13.1494L2.73775 17.0581C2.49367 17.3021 2.49367 17.6979 2.73775 17.9419C2.98182 18.186 3.37755 18.186 3.62163 17.9419L7.5303 14.0333C8.72214 15.0266 10.2565 15.625 11.9297 15.625C15.7266 15.625 18.8047 12.547 18.8047 8.75Z"
             fill="#008ffb" stroke="#249597" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <CustomInput onChange={handleInputChange} placeholder='ابحث الان....' className='border-[0px] font-bold  text-mainColor' />


        <div className="flex justify-center">
          <Popover
            
            placement="bottom-end"
            classNames={{
              content: [
                // Adjust the popover content position slightly down
                "py-3 w-[153px] rounded-md mt-2",
              ],
            }}
          >
            <PopoverTrigger>
              <div className="cursor-pointer flex justify-center items-center gap-1 h-full bg-white rounded-l-lg px-[14px] border-r border-[#DCDCDC]">
                {selectedSearchType && selectedSearchType?.icon}
                <span className="text-[16px] text-[#979797] font-bold">
                  {selectedSearchType?.label || "الانواع"}
                </span>
                <IoIosArrowDown
                  className={`${isOpen ? "rotate-180" : ""} transition-all duration-300 text-[#979797]`}
                  size={20}
                />
              </div>
            </PopoverTrigger>
            <PopoverContent>
              {(titleProps:any) => (
                <div className="overflow-x-hidden w-full">
                  <SeachTypeOrganism setIschoosed={setIschoosed} data={SectionsSearch} />
                </div>
              )}
            </PopoverContent>
          </Popover>

        </div>



        {/* 
        <DropDown
          setIsOpen={setIsOpen}
          arrow
          arrowSize="before:md:w-4 before:md:h-4"
          className=" shadow-lg drop-shadow-lg"
          containerPosition="md:mt-1"
     
        >
      
        </DropDown> */}


      </div>
    </div>
  );
}

export default SearchTemplates;


