import React from 'react';
import IconButton from '../../atoms/iconButton/IconButton';

interface Step {
  id: number;
  checked: boolean;
  icon: string;
  alt: string;
  text: string;
}

interface StepsListProps {
  steps: Step[];
  onStepClick: (id: number) => void;
}

const StepsList: React.FC<StepsListProps> = ({ steps, onStepClick }) => {
  return (
    <ul className="flex overflow-hidden flex-wrap w-full  gap-5 justify-center sm:gap-0 z-10 flex-row sm:justify-between mt-5 relative before:absolute sm:before:w-[95%] before:left-1/2 before:h-2 before:bg-[--linerSubGray] before:contents-[''] before:-z-10 before:top-[40%] before:-translate-y-full before:-translate-x-1/2">
      {steps.map((step) => (
        <IconButton
          key={step.id}
          icon={step.icon}
          alt={step.alt}
          checked={step.checked}
          text={step.text}
          onClick={() => onStepClick(step.id)}
        />
      ))}
    </ul>
  );
};

export default StepsList;
