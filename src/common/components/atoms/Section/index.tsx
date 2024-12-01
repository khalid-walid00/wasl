"use client"
import React from 'react';
import { BarLoader } from 'react-spinners';
import './style.css'

const Section = ({children, footer, header, maxHeight = "unset" }: any) => {
  return (
    <div className="relative sec flex flex-col min-w-0 break-words bg-white border-0 border-solid border-black-125 shadow-soft-xl rounded-2xl bg-clip-border mb-2">
      { header && header }
      <div className="p-4">
        {children}
      </div>
      {footer ?
        <>
          <hr className="h-px bg-gray-200 border-0 hr dark:bg-gray-100" />
          <div className="p-4 mb-0 rounded-t-4">
            <div className="flex justify-between">
              {footer}
            </div>
          </div>
        </>
        : null}
    </div>
  );
}

export { Section };
