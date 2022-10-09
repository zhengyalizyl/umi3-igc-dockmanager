import React, { useState } from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import styles from './index.less';
import { Button, Tooltip } from 'antd';

const MarketCellRender = (props: ICellRendererParams) => {
  const onClick = () => {
    props.node.setExpanded(!props.node.expanded);
  };
  const count = props.node.allChildrenCount;
  const countMore1 = count && count > 1;
  if (props.node.group) {
    return (
      <div className={styles.accountCellClass}>
        <span>{props.value}</span>
      </div>
    );
  }

  return null;
};

export default MarketCellRender;
