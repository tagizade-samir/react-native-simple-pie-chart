import React, { FC, ReactNode, useState } from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import { DEFAULT } from './constants';
import { CustomCircle } from './CustomCircle';
import { DASHES_AMOUNT, PieChartItem } from './types';
import { generateMainPie } from './utils';

const {
  SVG_SIZE,
  STROKE_WIDTH,
  SVG_CENTER,
  SVG_RADIUS,
  SECONDARY_STROKE_WIDTH,
  SECONDARY_SVG_RADIUS,
} = DEFAULT;

interface PieChartProps {
  max?: number;
  data: PieChartItem[];
  backgroundColor?: string;
  withDashes?: boolean;
  dashesAmount?: DASHES_AMOUNT;
  center?: ReactNode;
}

export const PieChart: FC<PieChartProps> = ({
  max,
  data,
  backgroundColor,
  withDashes,
  center,
  dashesAmount,
}) => {
  const [size, setSize] = useState(0);
  const [pies, dashes] = generateMainPie(data, max, withDashes, dashesAmount);

  const handleLayout = (event: LayoutChangeEvent) => {
    const height = event.nativeEvent.layout.height;
    const width = event.nativeEvent.layout.width;
    if (!height || !width) return;

    const finalSize =
      Math.floor(height) < Math.floor(width)
        ? Math.floor(height)
        : Math.floor(width);
    setSize(finalSize * 0.7);
  };

  return (
    <View style={styles.container}>
      <Svg
        onLayout={handleLayout}
        style={styles.chart}
        viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
      >
        <Circle
          cy={SVG_CENTER}
          cx={SVG_CENTER}
          fill="transparent"
          r={SVG_RADIUS}
          strokeWidth={STROKE_WIDTH}
          stroke={backgroundColor ?? '#b5e48c'}
        />
        {dashes.map((dash, index) => (
          <CustomCircle key={index} {...dash} />
        ))}
        {pies.map((pie, index) => (
          <CustomCircle
            {...pie}
            key={index}
            radius={SECONDARY_SVG_RADIUS}
            strokeWidth={SECONDARY_STROKE_WIDTH}
          />
        ))}
      </Svg>
      {center ? (
        <View style={[styles.centerContainer, { width: size, height: size }]}>
          {center}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  chart: {
    shadowColor: 'rgba(21, 138, 164, 0.6)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  centerContainer: {
    borderRadius: 500,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    overflow: 'hidden',
  },
});
