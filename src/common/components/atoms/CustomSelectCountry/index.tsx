import React from 'react';
import { Image } from "@nextui-org/image";
import Select, { MultiValue, SingleValue, ActionMeta } from 'react-select';

type OptionType = {
    value: string;
    label: string;
    imageUrl?: string;
};

type CustomSelectProps = {
    options: OptionType[];
    placeholder?: string;
    onChange?: (selectedOption: MultiValue<OptionType> | SingleValue<OptionType>) => void;
    value?: OptionType | null;
    isMulti?: boolean;
};

const CustomSelectCountry: React.FC<CustomSelectProps> = ({ options, placeholder = 'اختر الخيار', onChange, value , isMulti=true}) => {
    const customSingleValue = ({ data }: any) => {
        return (
            <div className="custom-single-value flex items-center flex-row gap-x-[8px]">
                {data?.image?.imageUrl && (
                    <Image
                        width={30}
                        height={20}
                        alt={data.label}
                        src={data?.image?.imageUrl}
                        className="object-contain mr-[10px]"
                    />
                )}
                {data.label}
            </div>
        );
    };

    const customOption = ({ data, innerRef, innerProps }: any) => (
        <div
            ref={innerRef}
            className="custom-option flex items-center gap-x-[8px] gap-y-[8px] mb-[8px]"
            {...innerProps}
        >
            {data?.image?.imageUrl && (
                <Image
                    width={30}
                    height={20}
                    alt={data.label}
                    src={data?.image?.imageUrl}
                    className="object-contain mr-[10px]"
                />
            )}
            {data.label}
        </div>
    );

    const styles = {
        control: (base: any) => ({
            ...base,
        height: '45px', // أقصى ارتفاع لحقل الإدخال
            // overflow: 'auto', // السماح بالتمرير داخل حقل الإدخال
            display:"flex",
            textAlign: 'right', 
            direction: 'rtl', 
            border: "1px  solid #D7D7D7",
            borderRadius: "8px",
            paddingLeft: '12px', 
            paddingRight: '4px', 
        }),

        menu: (base: any) => ({
            ...base,
            // maxHeight: 200,
            // overflowY: 'auto',
            
        }),
        placeholder: (base: any) => ({
            ...base,
            textAlign: 'right', 
            direction: 'rtl', 
        }),
        multiValue: (base: any) => ({
            ...base,
            display: 'flex',
            flexWrap: 'wrap',
            gap: '5px',
            
            // maxHeight: '40px', // أقصى ارتفاع للعناصر المختارة
            // overflowY: 'auto', // تمكين التمرير للعناصر المختارة
        }),
        multiValueLabel: (base: any) => ({
            ...base,
            padding: '0 5px',
        }),
        multiValueRemove: (base: any) => ({
            ...base,
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'red',
                color: 'white',
            },

        }),
    };

    return (
        <Select
            options={options}
            components={{ SingleValue: customSingleValue, Option: customOption }}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            isSearchable={true}
            closeMenuOnSelect={false} // Keep the menu open for multi-select
            isMulti={isMulti} // Enable multi-select
            styles={styles}
        />
    );
};

export default CustomSelectCountry;
