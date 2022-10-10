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
    let unSettingArr: any[] = [];
    Array.from(allLeafChildren).map((leaf) => {
      if (!leaf.data.isSetting) {
        unSettingArr.push(leaf);
      }
    });
    const hasSettingArr = unSettingArr.length > 0;
    return (
      <div className={styles.accountCellClass}>
        <span> {props.value}</span>
        {hasSettingArr && <span>未设置</span>}
        {!hasSettingArr && <span className={styles.color47C1BF}>已设置</span>}
      </div>
    );
  }

  return null;
};

export default AccountCellRenderer;
