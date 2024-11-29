// atoms/SocialInput.tsx

import React from 'react';
import { Image } from "@nextui-org/react";

// تعريف واجهة لأنواع props
interface SocialInputProps {
    imageUrl: string;
    title: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SocialInput: React.FC<SocialInputProps> = ({ imageUrl, title, placeholder, value, onChange }) => {
    return (
        <>
            <div className='flex items-center gap-x-2 pt-4 mb-[16px] '>
                <Image
                    alt={title}
                    className="object-cover rounded-[8px]"
                    height={40}
                    src={imageUrl}
                    width={40}
                />
                <h2 className='text-[20px] font-bold'>{title}</h2>
            </div>
            <input
                type="text"
                className='w-full h-[40px] border border-[#D7D7D7] rounded-[8px] p-2 mb-8  placeholder-gray-400'
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </>
    );
};

export default SocialInput;
