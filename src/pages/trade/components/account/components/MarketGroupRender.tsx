import React, { useState } from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import styles from './index.less';
import { Button, Tooltip } from 'antd';

const ProductGroupCellRender = (props: ICellRendererParams) => {
  const onClick = () => {
    props.node.setExpanded(!props.node.expanded);
  };
  const count = props.node.allChildrenCount;
  const countMore1 = count && count > 1;
  if (props.node.group) {
    return (
      <div className={styles.accountCellClass}>
        <span>{countMore1 ? '市场' : props.value}</span>
        {countMore1 && <span className={styles.countClass}>{count}</span>}
        <span className={styles.expandClass}>
          {countMore1 && props.node.expanded && (
            <DownOutlined style={{ fontSize: 12 }} onClick={onClick} />
          )}
          {countMore1 && !props.node.expanded && (
            <RightOutlined style={{ fontSize: 12 }} onClick={onClick} />
          )}
        </span>
      </div>
    );
  }

  return (
    <div className={styles.accountCellClass}>
      <span>{props.value}</span>
    </div>
  );
};

export default ProductGroupCellRender;
