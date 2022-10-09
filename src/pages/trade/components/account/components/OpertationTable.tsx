import { Button, ConfigProvider, Dropdown, Menu } from 'antd';
import React from 'react';
import styles from './index.less';

const Opertation = (val: any) => {
  const { node } = val;
  let order = 0;
  if (node.aggData) {
    order = node.aggData.order;
  } else {
    order = node.data.order;
  }
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
        <div className={styles.buttonWidth40Class}>
          <ConfigProvider autoInsertSpaceInButton={false}>
            <Button className={styles.color00B69B}>开启</Button>
          </ConfigProvider>
        </div>

        <div className={styles.buttonWidth40Class}>
          <ConfigProvider autoInsertSpaceInButton={false}>
            <Button className={styles.color42B1FF}>暂停</Button>
          </ConfigProvider>
        </div>
        <div className={styles.buttonWidth40Class}>
          <ConfigProvider autoInsertSpaceInButton={false}>
            <Button className={styles.colorFF8743}>平仓</Button>
          </ConfigProvider>
        </div>
        <div className={styles.buttonWidth88Class}>
          <Button className={styles.colorC8C9CC}>日内标的设置</Button>
        </div>
      </li>
      <li>
        <div className={styles.buttonWidth76Class}>
          {order > 0 && (
            <Button className={styles.color42B1FF}>停止算法单</Button>
          )}
        </div>
        <div className={styles.buttonWidth64Class}>
          <Button className={styles.colorC8C9CC}>算法下单</Button>
        </div>
        <div className={styles.buttonWidth28Class}>
          <Dropdown overlay={menu}>
            <Button className={styles.colorC8C9CC}>...</Button>
          </Dropdown>
        </div>
      </li>
    </ul>
  );
};

export default Opertation;
