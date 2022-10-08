
import { Tabs, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React, { FC } from 'react'
import styles from './index.less'
import AlarmReminder from '../alarmReminder';
import AbandonedOrderReminder from '../abandonedOrderReminder';

const AlarmOrAbandonedOrder = () => {
    const onChange = (key: string) => {
        console.log(key);
    };

    const InputSearchReminder = () => {
        return (
            <div className={styles.searchInputBox}>
                <Input
                    style={{ width: '180px', fontSize: '12px' }}
                    placeholder="请输入账户/标的代码查询"
                    maxLength={8}
                    prefix={<SearchOutlined className={styles.searchIcon} />}
                />
            </div>
            )
    }
    return (
        <div className={styles.alarmOrAbandonedBox}>
            <Tabs
                tabBarExtraContent={<InputSearchReminder />}
                defaultActiveKey="1"
                onChange={onChange}
                items={[
                    {
                        label: `告警提示`,
                        key: '1',
                        children: <AlarmReminder />,
                    },
                    {
                        label: `废单提示`,
                        key: '2',
                        children: <AbandonedOrderReminder />,
                    },
                ]}
            />
        </div>
    )
}

export default AlarmOrAbandonedOrder