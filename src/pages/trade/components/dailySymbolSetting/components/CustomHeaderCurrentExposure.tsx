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
          <span>{props.displayName}</span>
          <Tooltip title="1223">
            <QuestionCircleOutlined />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default CustomHeaderCurrentExposure;
