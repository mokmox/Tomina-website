import * as React from "react";
const RightArrow = ({ color, height, width }: any) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 34 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.52 0.579956H0.699951L19.71 29.09L0.699951 57.69H14.52L33.62 29.18L14.52 0.579956Z"
            fill={color}
        />
    </svg>
);
export default RightArrow;