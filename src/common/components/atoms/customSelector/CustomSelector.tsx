import React from 'react';
import Select from 'react-select';

interface Option {
  label: string;
  value: string;
}

interface CustomSelectorProps {
  label?: string; 
  options: Option[];
  value: Option | null;
  onChange: any;
  placeholder?: string;
  isClearable?: boolean;
  className?:string
  bgArrow?:string
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
  className='',
  bgArrow='#008ffb',
  isLoading=false,
  isMulti=false
}) => {
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
            minHeight: '40px',
            padding: '0', 
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
              '&:hover':{
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
            '&:hover':{
              color:"red"
            }
          }),
          menu: (provided) => ({
            ...provided,
            backgroundColor: '#fff', // لون الخلفية
            borderRadius: '8px', // التحكم في الزوايا
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // إضافة ظل للقائمة
            marginTop: '4px', // المسافة بين الحقل والقائمة
          }),
          menuList: (provided) => ({
            ...provided,
            padding: '0', // إزالة التباعد داخل القائمة
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#008ffb' : '#fff', // لون الخلفية عند التحويم
            borderRadius: '8px', // التحكم في الزوايا
            color: '#333', // لون النص
            padding: '10px 15px', // التباعد داخل العنصر
            cursor: 'pointer', // تغيير شكل المؤشر
          }),
        }}
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full py-1 mb-1"
        isMulti={isMulti}
      />
    </div>
  );
};

export default CustomSelector;
