import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import { Typography, CircularProgress } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';

const SemiCircle = styled('path')<{ strokeColor: string }>((props) => ({
  fill: 'none',
  stroke: props.strokeColor,
  strokeWidth: 10,
}));

function calculateSemiCirclePath(radius: number, strokeWidth: number, value: number) {
  const colorRanges = [
    { color: 'red', minValue: 0, maxValue: 20 },
    { color: 'orange', minValue: 20, maxValue: 40 },
    { color: 'yellow', minValue: 40, maxValue: 60 },
    { color: 'limegreen', minValue: 60, maxValue: 80 },
    { color: 'green', minValue: 80, maxValue: 100 },
  ];

  let indicatorPosition = 0;
  let fillColor = 'red';

  for (const range of colorRanges) {
    if (value >= range.minValue && value <= range.maxValue) {
      fillColor = range.color;
      indicatorPosition = (value - range.minValue) / (range.maxValue - range.minValue);
      break;
    }
  }

  const circumference = 2 * Math.PI * (radius - strokeWidth / 2);
  const offset = circumference * (1 - indicatorPosition);
  return `
    M ${radius},${radius}
    m ${-radius + strokeWidth / 2},0
    a ${radius - strokeWidth / 2},${radius - strokeWidth / 2} 0 1,0 ${2 * radius - strokeWidth},0
    a ${radius - strokeWidth / 2},${radius - strokeWidth / 2} 0 1,0 ${-2 * radius + strokeWidth},0
    Z
    M ${radius},${strokeWidth / 2}
    L ${radius + offset},${strokeWidth / 2}
  `;
}

interface SpeedometerGaugeProps {
  value: number;
  max: number;
}

const SpeedometerGauge: React.FC<SpeedometerGaugeProps> = ({ value, max }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const colorRanges = [
    { color: 'red', minValue: 0, maxValue: 349 },
    { color: 'orange', minValue: 350, maxValue: 499 },
    { color: 'yellow', minValue: 500, maxValue: 599 },
    { color: 'limegreen', minValue: 600, maxValue: 699 },
    { color: 'green', minValue: 700, maxValue: 850 },
  ];

  let indicatorPosition = 0;
  let fillColor = 'red';

  for (const range of colorRanges) {
    if (value >= range.minValue && value <= range.maxValue) {
      fillColor = range.color;
      indicatorPosition = (value - range.minValue) / (range.maxValue - range.minValue);
      break;
    }
  }

  return (
    <div style={{ position: 'relative', width: 200, height: 120 }}>
      <svg viewBox="0 0 200 120" style={{ width: '100%', height: '100%' }}>
        {colorRanges.map((range, index) => (
          <SemiCircle
            key={index}
            d={calculateSemiCirclePath(100, 10, 20)}
            strokeColor={range.color}
          />
        ))}
      </svg>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        {loading ? (
          <CircularProgress size={40} />
        ) : (
          <>
            <Typography variant="h5">{value}</Typography>
            <Typography variant="body2">credit score</Typography>
          </>
        )}
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 5,
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
        }}
      >
        {/* <Typography variant="body2">
          <SpeedIcon fontSize="small" /> Speed
        </Typography> */}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) rotate(${(indicatorPosition * 180) - 90}deg)`,
          width: 0,
          height: 0,
          borderLeft: '7px solid transparent',
          borderRight: '7px solid transparent',
          borderBottom: `14px solid ${fillColor}`,
        }}
      ></div>
    </div>
  );
};

export default SpeedometerGauge;
