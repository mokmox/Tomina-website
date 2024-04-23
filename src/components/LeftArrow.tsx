import * as React from "react";
const LeftArrow = ({ color, height, width }: any) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 35 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"

    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.06 0H34.65L14.59 30.09L34.65 60.27H20.06L0 30.18L20.06 0Z"
            fill={color}
        />
    </svg>
);
export default LeftArrow;