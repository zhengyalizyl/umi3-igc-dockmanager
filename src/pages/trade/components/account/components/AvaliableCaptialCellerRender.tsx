import React from 'react';
import styles from './index.less';
import { ICellRendererParams } from 'ag-grid-community';
import { Tooltip } from 'antd';

const AvaliableCaptialCellerRender = (props: ICellRendererParams) => {
  // 还要看子节点有没有暂停为true
  if (props.node.group) {
    const allLeafChildren = props.node.allLeafChildren;
    let stopArr: any[] = [];
    Array.from(allLeafChildren).map((leaf) => {
      if (leaf.data.avaliableCaptial) {
        stopArr.push(leaf);
      }
    });
    const isHasAvaliableArr = stopArr.length == 1;
    const avaliableTips =
      props.node.aggData.avaliableCaptial > 4000
        ? '日内交易所需资金8000,资金不足'
        : '日内交易所需资金8,000(深4,000 沪4,000),资金不足';
    return (
      <div>
        {isHasAvaliableArr && (
          <Tooltip title={avaliableTips}>
            <span
              className={`${styles.mr2} ${styles.dot} ${styles.redDot}`}
            ></span>
          </Tooltip>
        )}
        <span>{props.value}</span>
      </div>
    );
  }
  const isShowTip = props.value < 8000;
  const avaliableTips =
    props.value > 4000
      ? '日内交易所需资金8000,资金不足'
      : '日内交易所需资金8,000(深4,000 沪4,000),资金不足';

  return (
    <div>
      {isShowTip && (
        <Tooltip title={avaliableTips}>
          <span
            className={`${styles.mr2} ${styles.dot} ${styles.redDot}`}
          ></span>
        </Tooltip>
      )}
      <span>{props.value}</span>
    </div>
  );
};

export default AvaliableCaptialCellerRender;
