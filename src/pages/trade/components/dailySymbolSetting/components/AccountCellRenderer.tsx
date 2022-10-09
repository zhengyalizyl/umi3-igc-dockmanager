import React, { useState } from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import styles from './index.less';
import { Button, Tooltip } from 'antd';

const AccountCellRenderer = (props: ICellRendererParams) => {
  console.log(props);
  if (props.node.group) {
    const allLeafChildren = props.node.allLeafChildren;
    console.log(props.node);
    let isSettingArr: any[] = [];
    Array.from(allLeafChildren).map((leaf) => {
      if (!leaf.data.isSetting) {
        isSettingArr.push(leaf);
      }
    });
    const hasSettingArr = isSettingArr.length > 0;
    return (
      <div className={styles.accountCellClass}>
        <span> {props.value}</span>
        {hasSettingArr && <span>未设置</span>}
        {!hasSettingArr && <span>已设置</span>}
      </div>
    );
  }

  return null;
};

export default AccountCellRenderer;
