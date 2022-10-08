import { Tabs,Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React, { FC } from 'react'
import AlarmReminder from './components/alarmReminder'
import styles from './index.less'
import AbandonedOrderReminder from './components/abandonedOrderReminder';
import Account from './components/account';
import AlarmOrAbandonedOrder from './components/alarmOrAbandonedOrder';
import AccountTabs from './components/accountTabs/index';

const index: FC = () => {
    const onChange = (key: string) => {
        console.log(key);
    };

return (
    <div className={styles.themeDark}>
        <AlarmOrAbandonedOrder/>
        <AccountTabs/> 
    </div>
)
}

export default index