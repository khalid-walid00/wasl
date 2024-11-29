import React from 'react';

interface SectionProps {
    title?: string;
    children: React.ReactNode;
    titleClass?:string
    className?:string
}
function Section({ children, title,titleClass,className }: SectionProps) {
    return (
        <div className={`w-full h-full ${className}`} >
            <div className={`font-bold text-lg ${titleClass}`}>{title}</div>
            <div >
                {children}
            </div>
        </div>
    );
}

export default Section;