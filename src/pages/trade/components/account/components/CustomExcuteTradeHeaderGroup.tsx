import React from 'react';
import { Tooltip } from 'antd';
import styles from './index.less';

const CustomExcuteTradeHeaderGroup = (props: any) => {
  return (
    <div>
      <div className="ag-header-group-cell-label">
        <div className={styles.customTradelabel}>
          <span className={styles.tradeTipClass}>
            <Tooltip title="执行">
              <sup>E</sup>
            </Tooltip>
          </span>
          {props.displayName}
        </div>
      </div>
    </div>
  );
};

export default CustomExcuteTradeHeaderGroup;
