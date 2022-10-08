import React, { useState } from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import styles from './index.less';

export default (props: ICellRendererParams) => {
  console.log(props);

  // 还要看子节点有没有暂停为true
  if (props.node.group) {
    const allLeafChildren = props.node.allLeafChildren;
    let stopArr: any[] = [];
    Array.from(allLeafChildren).map((leaf) => {
      if (leaf.data.isStop) {
        stopArr.push(leaf);
      }
    });

    console.log(stopArr);
    const isHasStopArr = stopArr.length > 0;
    return (
      <div>
        {props.value}
        {isHasStopArr && (
          <span className={`${styles.dot} ${styles.redDot}`}></span>
        )}
      </div>
    );
  }

  return (
    <div>
      <span>{props.value}</span>
      {props.data.isStop && (
        <span className={`${styles.dot} ${styles.redDot}`}></span>
      )}
    </div>
  );
};
