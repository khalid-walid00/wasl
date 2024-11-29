import React from 'react';

function StoreCategoriesOrganisms() {
    const items = Array(11).fill("الشحن والتخزين");

    return (
      <div className="grid grid-cols-5 gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="px-[18px] py-4 rounded-lg bg-[#D6EDED] font-bold text-center text-mainColor"
          >
            {item}
          </div>
        ))}
      </div>
    );
}

export default StoreCategoriesOrganisms;