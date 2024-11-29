import React from 'react';

function ProgressBar({point,max}:any) {
    const percentage = (point / max) * 100;
    return (
        <div className="h-3 w-full bg-[#f4f4f4] rounded-2xl">
        <div className="h-3 bg-mainColor  rounded-2xl" style={{ width: `${percentage}%` }}></div>
    </div>
    );
}

export default ProgressBar;