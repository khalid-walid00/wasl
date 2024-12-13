import React from 'react';
import Select from 'react-select';

interface Option {
  label: string;
  value: string;
}

interface CustomSelectorProps {
  label?: string; 
  options: Option[];
  value: string | null;
  onChange: (selectedValue: any) => void;
  placeholder?: string;
  isClearable?: boolean;
  className?: string;
  bgArrow?: string;
  isLoading?: boolean;
  isMulti?: boolean;
}

const CustomSelector: React.FC<CustomSelectorProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = "اختر خيارًا",
  isClearable = true,
  className = '',
  bgArrow = '#008ffb',
  isLoading = false,
  isMulti = false
}) => {
  const selectedValue = value
    ? options.find(option => option.value === value) || null
    : null;

  return (
    <div className='flex flex-col w-full p-0 m-0'>
      {label && <label className={`font-normal ${className}`}>{label}</label>}
      <Select
        isLoading={isLoading}
        isClearable={isClearable}
        styles={{
          control: (provided) => ({
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
            '&:hover': {
              borderColor: '#d7d7d7',
            },
          }),


          dropdownIndicator: (provided) => ({
            ...provided,
            backgroundColor: bgArrow,
            color: "white",
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0',
            borderRadius: "8px 0px 0px 8px",
            paddingLeft: "11px",
            paddingRight: "11px",
            margin: '0', 
            border: 'none',
            '&:hover': {
              backgroundColor: '#008ffb',
              color: "white",
            },
          }),
          clearIndicator: (provided) => ({
            ...provided,
            color: '#008ffb',
            backgroundColor: 'transparent',
            borderRadius: '50%',
            padding: '5px',
            cursor: 'pointer',
            '&:hover': {
              color: "red"
            }
          }),
          menu: (provided) => ({
            ...provided,
            backgroundColor: '#fff', 
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            marginTop: '4px',
            zIndex: 100,
          }),
          menuList: (provided) => ({
            ...provided,
            padding: '0',
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#008ffb' : '#fff', 
            borderRadius: '8px',
            color: '#333',
            padding: '10px 15px', 
            cursor: 'pointer',
          }),
        }}
        options={options}
        value={selectedValue} 
        onChange={(selectedOption:any) => onChange(selectedOption ? selectedOption.value : null)}
        placeholder={placeholder}
        className="w-full h-full"
        isMulti={isMulti}
      />
    </div>
  );
};

export default CustomSelector;
