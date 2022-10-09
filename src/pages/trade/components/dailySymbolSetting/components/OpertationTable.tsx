import { Button, ConfigProvider, Dropdown, Menu } from 'antd';
import React from 'react';
import styles from './index.less';

const Opertation = (val: any) => {
  console.log(val, 'caouzo ');
  const { node } = val;

  return (
    <ul className={styles.operationStyles}>
      <li>
        <ConfigProvider autoInsertSpaceInButton={false}>
          <Button className={styles.color00B69B}>开启</Button>
        </ConfigProvider>
        <ConfigProvider autoInsertSpaceInButton={false}>
          <Button className={styles.color42B1FF}>暂停</Button>
        </ConfigProvider>
        <ConfigProvider autoInsertSpaceInButton={false}>
          <Button className={styles.colorFF8743}>平仓</Button>
        </ConfigProvider>
        <ConfigProvider autoInsertSpaceInButton={false}>
          <Button className={styles.colorC8C9CC}>取消</Button>
        </ConfigProvider>
        <ConfigProvider autoInsertSpaceInButton={false}>
          <Button className={styles.colorC8C9CC}>日志</Button>
        </ConfigProvider>
      </li>
    </ul>
  );
};

export default Opertation;
