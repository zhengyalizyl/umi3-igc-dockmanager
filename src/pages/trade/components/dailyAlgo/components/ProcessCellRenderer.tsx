import React, { useState } from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import styles from './index.less';
import classnames from 'classnames';
import { Progress, Slider } from 'antd';

export default (props: ICellRendererParams) => {
  const getProgressColor = (percent: number) => {
    console.log(percent);
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
  return (
    <div className={styles.processClass}>
      {props.value != null && (
        <Progress
          strokeColor={getProgressColor(props.value)}
          percent={props.value * 100}
          format={(percent) => getProgressText(percent)}
        />
      )}
      {props.value == null && <span>--</span>}
    </div>
  );
};
