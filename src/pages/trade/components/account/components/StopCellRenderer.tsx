import React, { useState } from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import styles from './index.less';
import Tooltip from 'antd/es/tooltip';

export default (props: ICellRendererParams) => {
  // 还要看子节点有没有暂停为true
  if (props.node.group) {
    const allLeafChildren = props.node.allLeafChildren;
    let stopArr: any[] = [];
    Array.from(allLeafChildren).map((leaf) => {
      if (leaf.data.isStop) {
        stopArr.push(leaf);
      }
    });
    const isHasStopArr = stopArr.length > 0;
    return (
      <div>
        {props.value}
        {isHasStopArr && (
          <Tooltip title={`${stopArr.length}个标的自动暂停`}>
            <span
              className={`
          ${styles.mr2} ${styles.dot} ${styles.redDot}`}
            ></span>
          </Tooltip>
        )}
      </div>
    );
  }

  return (
    <div>
      <span>{props.value}</span>
      {props.data.isStop && (
        <Tooltip title="一个标的自动暂停">
          <span
            className={`
          ${styles.mr2} ${styles.dot} ${styles.redDot}`}
          ></span>
        </Tooltip>
      )}
    </div>
  );
};
