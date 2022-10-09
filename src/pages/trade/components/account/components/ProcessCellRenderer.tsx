import React, { useState, useMemo } from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import styles from './index.less';
import { Progress } from 'antd';

export const ProcessCellRenderer = (props: ICellRendererParams) => {
  const getProgressColor = (percent: number) => {
    let color = '';
    if (percent === 0) {
      color = '#322D28';
    } else if (percent > 0 && percent < 0.5) {
      color = '#FFCF4F';
    } else if (percent >= 0.5) {
      color = '#2D71F6';
    }
    return color;
  };

  const getProgressText = (percent: any) => {
    return <div className={styles.processFormatClass}>{percent}%</div>;
  };

  const getPercent = useMemo(() => {
    let percent;
    if (props.value !== null) {
      if (props.value > 0 && props.value < 0.01) {
        percent = 0.01;
      } else if (props.value > 0.99 && props.value < 1) {
        percent = 0.99;
      } else {
        percent = props.value;
      }
    }
    return percent;
  }, [props.value]);

  return (
    <div className={styles.processClass}>
      {props.value != null && (
        <Progress
          strokeColor={getProgressColor(props.value)}
          percent={getPercent * 100}
          format={(percent) => getProgressText(percent)}
        />
      )}
      {props.value == null && <span>--</span>}
    </div>
  );
};

export default ProcessCellRenderer;
