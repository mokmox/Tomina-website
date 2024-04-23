import React from 'react'

const TickBar = () => {
    return (
        <svg className="absolute bottom-6" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-4 0 1366 336">
            <rect x="-4" width="1366" height="336" fill="url(#pattern0_157_38408)" />
            <defs>
                <pattern id="pattern0_157_38408" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_157_38408" transform="matrix(0.000740884 0 0 0.00301205 -0.190134 0)" />
                </pattern>
                <image id="image0_157_38408" width="1863" height="332" xlinkHref="data:image/png;base64,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" />
            </defs>
        </svg>
    )
}

export default TickBar
