import { CircleSvg, Circle } from "./styledCircleChart";

export const CircleChart = ({ strokeDashoffset, strokeDasharray }) => {
  return (
    <>
      <CircleSvg>
        <Circle
          strokeDashoffset={strokeDashoffset}
          strokeDasharray={strokeDasharray}
          cx="38"
          cy="38"
          r="36"
        ></Circle>
      </CircleSvg>
    </>
  );
};
