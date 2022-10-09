import React from 'react';
import { Tooltip } from 'antd';
import styles from './index.less';

const CustomTradeHeaderGroup = (props: any) => {
  return (
    <div>
      <div className="ag-header-group-cell-label">
        <div className={styles.customTradelabel}>
          <span className={styles.tradeTipClass}>
            <Tooltip title="日内">
              <sup>T</sup>
            </Tooltip>
          </span>
          {props.displayName}
        </div>
      </div>
    </div>
  );
};

export default CustomTradeHeaderGroup;
