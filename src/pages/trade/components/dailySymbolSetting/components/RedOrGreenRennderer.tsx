import React, { useState } from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import styles from './index.less';
import classnames from 'classnames';

export default (props: ICellRendererParams) => {
  const btnClass = classnames({
    [`${styles.redClass}`]: props.value > 0,
    [`${styles.greenClass}`]: props.value < 0,
    [`${styles.normalClass}`]: !(props.value < 0 || props.value > 0),
  });
  if (props.node.group) {
    return <div className={btnClass}>{props.value}</div>;
  }

  return (
    <div className={btnClass}>
      <span>{props.value}</span>
    </div>
  );
};
