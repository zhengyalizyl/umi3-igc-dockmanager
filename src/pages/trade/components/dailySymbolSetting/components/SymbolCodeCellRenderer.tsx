import React, { useState } from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import styles from './index.less';
import { Button, Tooltip } from 'antd';
import classNames from 'classnames';

const SymbolCodeCellRenderer = (props: ICellRendererParams) => {
  //0---未开启
  //1---已开启
  //2---平仓中
  //3---已关闭
  //4---暂不执行

  const titleMap = {
    '0': '未开启',
    '1': '已开启',
    '2': '平仓中',
    '3': '已关闭',
    '4': '暂不执行',
  };

  const { status } = props.data;

  return (
    <div>
      <Tooltip title={titleMap[status as keyof typeof titleMap]}>
        <span
          className={classNames(
            styles.dot,
            {
              [styles.blueDot]: status === 0,
              [styles.greenDot]: status === 1,
              [styles.yellowDot]: status === 2,
              [styles.grayDot]: status === 3,
              //    [styles.] :status===4,
            },
            styles.mr2,
          )}
        ></span>
      </Tooltip>
      <span>{props.value}</span>
    </div>
  );
};

export default SymbolCodeCellRenderer;
