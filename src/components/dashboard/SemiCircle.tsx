import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

interface ColorSemiCircleProps extends SvgIconProps {
  // Add any additional props you might need
}

const ColorSemiCircle: React.FC<ColorSemiCircleProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox="0 0 100 50">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="red" />
            <stop offset="25%" stopColor="orange" />
            <stop offset="50%" stopColor="yellow" />
            <stop offset="75%" stopColor="limegreen" />
            <stop offset="100%" stopColor="green" />
          </linearGradient>
        </defs>
        <path
          d="M 0 0 C 50 0 50 100 0 100 Z"
          fill="url(#gradient)"
        />
      </svg>
    </SvgIcon>
  );
};

export default ColorSemiCircle;
