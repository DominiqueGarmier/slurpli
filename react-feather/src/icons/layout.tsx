import React, { ForwardedRef, forwardRef } from 'react';

import { IconProps } from '../types';

const Layout = (
  { color = 'currentColor', size = 24, ...rest }: IconProps,
  ref: ForwardedRef<SVGSVGElement>
) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  );
};

Layout.displayName = 'Layout';

export default forwardRef(Layout);
