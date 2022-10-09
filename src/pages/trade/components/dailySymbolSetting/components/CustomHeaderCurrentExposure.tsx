import React from 'react';
import { Tooltip } from 'antd';
import styles from './index.less';
import { QuestionCircleOutlined } from '@ant-design/icons';

const CustomHeaderCurrentExposure = (props: any) => {
  console.log(props);
  return (
    <div>
      <div className="ag-header-group-cell-label">
        <div className={styles.customTradelabel}>
          <Tooltip title="1223">
            <QuestionCircleOutlined />
          </Tooltip>
          <span>{props.displayName}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomHeaderCurrentExposure;
