import { useState, useEffect } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import CustomUnRead from "../../atoms/unRead";

export default function DropDown({
  itemToggle,
  children,
  className,
  containerClassName,
  unRead,
  arrow = false,
  setIsOpen,
  arrowSize,
  containerPosition,
  popupPosition,
}: any) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOpen = () => {
    if (setIsOpen) setIsOpen(true);
  };

  const handleClose = () => {
    if (setIsOpen) setIsOpen(false);
  };

  return (
    <Dropdown
      arrowBoundaryOffset={80}
      showArrow={isSmallScreen ? false : arrow}
      placement={"bottom"}
      onOpenChange={(open) => open ? handleOpen() : handleClose()}
      classNames={{
        base: `before:md:w-7 before:md:h-7 before:w-4 before:h-4  ${arrowSize}`,
        content: `md:mt-3 mt-1 bg-white  ${containerPosition}`,
      }}
      className={`rounded-md p-0 ${containerClassName}`}
      style={{ minWidth: 'max-content' }}
    >
      <DropdownTrigger>
        <div className="cursor-pointer relative z-10   ">
          {unRead > 0 && (
            <CustomUnRead>
              {unRead}
            </CustomUnRead>
          )}
          {itemToggle}
        </div>
      </DropdownTrigger>
      <DropdownMenu
        closeOnSelect={false}
        className={`${className} group bg-white  rounded-[8px]   `}
        aria-label="Dynamic Actions"
      >
        <DropdownItem className="group hover:bg-transparent group-hover:bg-transparent p-0">
          {children}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
