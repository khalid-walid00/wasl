import Image from 'next/image';
import React from 'react';
import TrendIcon from '../../atoms/TrendIcon';

enum TTrend {
  increase = 'increase',
  decrease = 'decrease',
  noChange = 'noChange'
}

interface Props {
  title: string;
  image: string;
  percentage: number;
  total: number;
  index: number;
  trend: TTrend;
}

const trendColors = {
  [TTrend.increase]: 'text-[#00CC39]',
  [TTrend.decrease]: 'text-[#FF0000]',
  [TTrend.noChange]: 'text-[#DB9C00]',
};

const trendImages = [
  "bg-[#DB9C00]",
  "bg-[#008ffb]",
  "bg-[#FF2C2C]",
  "bg-[#4A90E2]", 
];
const boxBg = [
  "bg-[#F7F2E6]",
  "bg-[#E0ECEC]",
  "bg-[#F4E5E4]",
  "bg-[#E6F1FA]", 
];

function AnalysisCard({ title, image, percentage, total, index, trend }: Props) {
  return (
    <div className={`flex gap-16 justify-between ${boxBg[index]} py-[15px] px-[30px] rounded-lg`}>
      <div className="flex flex-col items-center gap-[11px]">
        <div className={`p-[11px] flex items-center justify-center rounded-full w-max ${trendImages[index]}`}>
          <div className="w-max">
          <Image alt="icon" src={image} width={40} height={40} />
          </div>
        </div>
        <div className="font-bold text-lg">{title}</div>
      </div>

      <div className="flex flex-col gap-[11px]">
        <div className="text-end text-[36px] font-[600]">{total?.toLocaleString('ar-EG')}</div>
        <div className="flex justify-between items-center gap-1">
          <TrendIcon trend={trend} />
          <div className={`${trendColors[trend]} flex`}>
            <div>%</div>
            <div>{percentage?.toFixed(2)}</div>
            <div>{trend === TTrend.noChange ? "" : trend === TTrend.increase ? '+' : '-'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalysisCard;
