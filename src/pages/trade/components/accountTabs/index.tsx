import { Tabs } from 'antd';
import React from 'react';
import AbandonedOrderReminder from '../abandonedOrderReminder';
import Account from '../account';
import DailyAlgo from '../dailyAlgo';
import styles from './index.less';

const AccountTabs = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div className={styles.accountTabsBox}>
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        items={[
          {
            label: `账户`,
            key: '1',
            children: <Account />,
          },
          {
            label: `日内执行算法`,
            key: '2',
            children: <DailyAlgo />,
          },
          {
            label: `订单执行算法`,
            key: '3',
            children: <AbandonedOrderReminder />,
          },
          {
            label: `当日委托`,
            key: '4',
            children: <AbandonedOrderReminder />,
          },
          {
            label: `当日交易日志`,
            key: '5',
            children: <AbandonedOrderReminder />,
          },

          {
            label: `日内标的设置`,
            key: '6',
            children: <AbandonedOrderReminder />,
          },
        ]}
      />
    </div>
  );
};

export default AccountTabs;
