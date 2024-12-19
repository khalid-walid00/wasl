import React from 'react';
import Select from 'react-select';
import { Tooltip } from "@nextui-org/react"; 

interface Option {
  label: string;
  value: any;
}

interface TooltipOption {
  id: any;
  tooltipContent: string; 
}

interface CustomSelectorProps {
  label?: string;
  options: Option[];
  value: string | null | number;
  onChange: (selectedValue: any) => void;
  placeholder?: string;
  isClearable?: boolean;
  className?: string;
  bgArrow?: boolean; 
  isLoading?: boolean;
  isMulti?: boolean;
  tooltipOptions?: TooltipOption[]; 
  [key: string]: any; 
}

const CustomSelector: React.FC<CustomSelectorProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = "اختر خيارًا",
  isClearable = true,
  className = '',
  bgArrow = true,  
  isLoading = false,
  isMulti = false,
  tooltipOptions = [],
  ...props 
}) => {
  const selectedValue = value ? options.find(option => option.value === value) : null;
  
  const arrowColor = bgArrow ? 'white' : 'black';
  const arrowBackgroundColor = bgArrow ? '#008ffb' : 'transparent';

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      borderRadius: "8px",
      borderColor: '#d7d7d7',
      backgroundColor: 'transparent',
      cursor: "pointer",
      boxShadow: 'none',
      height: '100%',
      padding: '0',
      width: '100%',
      textWrap: 'nowrap',
      zIndex: 100,
      '&:hover': { borderColor: '#d7d7d7' },
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      backgroundColor: arrowBackgroundColor,
      color: arrowColor,
      display: 'flex',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0',
      borderRadius: "0px 8px 8px 0px",
      paddingLeft: "11px",
      paddingRight: "11px",
      margin: '0',
      border: 'none',
      '&:hover': {
        backgroundColor: arrowBackgroundColor,
        color: arrowColor,
      },
    }),
    clearIndicator: (provided: any) => ({
      ...provided,
      color: '#008ffb',
      backgroundColor: 'transparent',
      borderRadius: '50%',
      padding: '5px',
      cursor: 'pointer',
      '&:hover': { color: 'red' },
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      marginTop: '4px',
      zIndex: 101,
    }),
    menuList: (provided: any) => ({
      ...provided,
      padding: '0',
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#008ffb' : '#fff',
      borderRadius: '8px',
      color: state.isFocused ? '#fff' : '#333',
      padding: '10px 15px',
      cursor: 'pointer',
    }),
  };

  const renderOption = (props: any) => {
    const { data, innerRef, innerProps } = props;
    const tooltipContent = tooltipOptions?.find(option => option.id === data.value)?.tooltipContent;

    const optionContent = (
      <div
        style={{
          backgroundColor: props.isFocused ? '#008ffb' : '#fff',
          borderRadius: '8px',
          color: props.isFocused ? '#fff' : '#333',
          padding: '10px 15px',
          cursor: 'pointer',
        }}
      >
        {data.label}
      </div>
    );

    return (
      <div ref={innerRef} {...innerProps}>
        {tooltipContent ? (
          <Tooltip
            showArrow
            classNames={{
              base: ["before:bg-neutral-400 dark:before:bg-white"],
              content: ["py-2 px-4 shadow-xl", "text-black bg-gradient-to-br from-white to-neutral-400"],
            }}
            content={tooltipContent}
            placement="right"
          >
            {optionContent}
          </Tooltip>
        ) : (
          optionContent
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full p-0 m-0 h-full">
      {label && <label className={`font-normal ${className}`}>{label}</label>}
      <Select
        isLoading={isLoading}
        isClearable={isClearable}
        styles={customStyles}
        options={options}
        value={selectedValue}
        onChange={(selectedOption: any) => onChange(selectedOption ? selectedOption.value : null)}
        menuPlacement="auto"
        placeholder={placeholder}
        className="w-full h-full"
        isMulti={isMulti}
        components={{ Option: renderOption }}
        {...props} 
      />
    </div>
  );
};

export default CustomSelector;
