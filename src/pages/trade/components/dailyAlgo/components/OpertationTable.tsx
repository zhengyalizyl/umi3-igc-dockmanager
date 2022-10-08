import { Button, Dropdown, Menu } from 'antd';
import React from 'react';
import styles from './index.less';

const Opertation = (val: any) => {
  console.log(val, 'caouzo ');
  const { node } = val;
  const menu = (
    <Menu
      items={[
        {
          label: <span>登录柜台</span>,
          key: '0',
        },
        {
          label: <span>同步持仓</span>,
          key: '1',
        },
        {
          label: <span>同步资金</span>,
          key: '2',
        },
        {
          label: <span>查看账户</span>,
          key: '3',
        },
      ]}
    />
  );
  return (
    <ul className={styles.operationStyles}>
      <li>
        <Button className={styles.color00B69B}>开启</Button>
        <Button className={styles.color42B1FF}>暂停</Button>
        <Button className={styles.colorFF8743}>平仓</Button>
        <Button className={styles.colorC8C9CC}>取消</Button>
        <Button className={styles.colorC8C9CC}>日志</Button>
      </li>
    </ul>
  );
};

export default Opertation;
