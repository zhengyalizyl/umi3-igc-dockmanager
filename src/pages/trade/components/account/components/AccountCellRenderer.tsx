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
    let unloginArr: any[] = [];
    Array.from(allLeafChildren).map((leaf) => {
      if (!leaf.data.accountIsLogin) {
        unloginArr.push(leaf);
      }
    });
    const isUnLoginArr = unloginArr.length == 1;
    return (
      <div className={styles.accountCellClass}>
        <span> {props.value}</span>
        {isUnLoginArr && (
          <Tooltip
            title={
              <ul className={styles.accountLoginTip}>
                <li>
                  <span>12222</span>
                  <span>未</span>
                  <span>登录,</span>
                  <span>点击</span>
                  <Button type="link">登录</Button>
                </li>
                <li>
                  <span>1233334444344</span>
                  <span>已</span>
                  <span>登录</span>
                </li>
              </ul>
            }
          >
            登录
          </Tooltip>
        )}
      </div>
    );
  }

  return null;
};

export default AccountCellRenderer;
