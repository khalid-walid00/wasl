import React from 'react';
import { Select, SelectItem } from "@nextui-org/react";
import { IoIosArrowDown } from 'react-icons/io';

function CustomSelect({ onChange, value, data, className, placeholder, placeholderClass }: any) {
  const [showArrow, setShowArrow] = React.useState(false);
  const currentValue = data?.find((item: any) => item.key === value);
  const renderPlaceholder = (): any => {

    if (currentValue) {
      return (
        <div className={`flex items-center gap-2 `}>
          <div className="flex gap-1 items-center">
            <img src={currentValue.image} alt={currentValue.label} className="w-[26px] h-[19px] rounded-sm" />
            <span>{currentValue.label}</span>
          </div>
        </div>
      );
    }
    return <div className={`${placeholderClass}`} >{placeholder}</div>;
  };
  return (
    <div className=' relative '>
      {/* { showArrow && (
  <div className="absolute top-[2.55rem] right-[70%] inset-0 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px]
    border-l-transparent border-r-transparent border-b-white filter drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
  </div>
)} */}
      <Select
        items={data}
        className={` w-full flex justify-center ${className}`}
        variant="bordered"
        // onOpenChange={(isOpen: boolean) => setShowArrow(isOpen)} 
        selectorIcon={<IoIosArrowDown className=' font-bold' />}
        placeholder={renderPlaceholder()}
        style={{ border: "none", boxShadow: "none", outline: "none", borderRadius: "2px", minHeight: "40px", padding: "0" }}
        classNames={{
          label: "group-data-[filled=true]:-translate-y-5",
          trigger: "min-h-16",
          listboxWrapper: "max-h-[400px]",
        }}
        onChange={onChange}
        listboxProps={{
          itemClasses: {
            base: [
              "rounded-md",
              "transition-opacity",
              "data-[hover=true]:text-foreground",
              "data-[hover=true]:bg-default-100",
              "dark:data-[hover=true]:bg-default-50",
              "data-[selectable=true]:focus:bg-default-50",
              "data-[pressed=true]:opacity-70",
              "data-[focus-visible=true]:ring-default-500",
            ],
          },
        }}
        popoverProps={{
          classNames: {
            base: "before:bg-default-200",
            content: "border-small border-divider bg-background rounded-[4px] w-max p-0",
          },
          style: {
            padding: "0",
            marginTop: "5px",
            borderRadius: "8px",
          },
        }}
        renderValue={(items: any) => {
          return items.map((item: any) => (
            <div key={item.key} className={`flex items-center gap-2 `}>
              <div className="flex gap-1 items-center">
                <img src={item.data.image} alt={item.data.label} className="w-[26px] h-[19px] rounded-sm" />
                <span>{item.data.label}</span>
              </div>
            </div>
          ));
        }}
      >
        {(data: any) => (
          <SelectItem className={`bg-transparent px-0 border-b border-[#ECECEC] last:border-b-0 rounded-none`}
            key={data.key} textValue={data.key}>
            <div className="flex gap-2 items-center">
              <div className="flex gap-1 items-center">
                {data.image && <img src={data.image} alt={data.label} className="w-[26px] h-[19px] rounded-sm" />}
                <span className=" all font-bold">{data.label}</span>
              </div>
            </div>
          </SelectItem>
        )}
      </Select>
    </div>
  );
}

export default CustomSelect;
