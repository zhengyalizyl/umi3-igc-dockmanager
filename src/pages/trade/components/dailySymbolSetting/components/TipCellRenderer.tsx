import { Tooltip } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import React from 'react';

function TipCellRenderer(val: any) {
  return (
    <Tooltip placement="topLeft" title={val.value}>
      <ExclamationCircleOutlined width={13} height={13} color="#FF5140" />
    </Tooltip>
  );
}

export default TipCellRenderer;
