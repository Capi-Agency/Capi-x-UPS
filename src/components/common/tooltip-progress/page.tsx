interface TooltipProgressProps {
    percentage: number; 
  }
const TooltipProgress = ({ percentage }:TooltipProgressProps) => {
    return (
      <div className="bg-[rgba(144,145,156,0.15)] relative h-1 w-full rounded-[2px]">
        <div className="bg-[#00D763] absolute top-0 left-0 h-full rounded-2xl" style={{ width: `${percentage}%` }}>
          <span className="bg-[#4B4753] absolute -right-4 bottom-full mb-2 rounded-[6px] px-[7px] py-1 text-[13px] text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="7"
              viewBox="0 0 15 7"
              fill="none"
              className="absolute -bottom-[7px] left-1/2 -translate-x-1/2"
            >
              <path d="M7.5 7L14.5 0H0.5L7.5 7Z" fill="#4B4753" />
            </svg>
            {percentage}%
          </span>
        </div>
      </div>
    );
  };
  
  export default TooltipProgress;
  