import React from 'react';
import { ConfigProvider, Table } from 'antd'
import CustomizeEmpty from '../customizeEmpty';
import { alarmReminderData } from '../../data'

const columns: any[] = [
    {
        title: '时间',
        dataIndex: 'time',
        align: 'left',
        width: 64,
        render: (text: number, record: any, index: number) => {
            return <span >{text}</span>;
        },
    },
    {
        title: '类型',
        dataIndex: 'type',
        align: 'center',
        render: (val: string) => {
            return (
                <span
                >
                    {val}
                </span>
            );
        },
    },

    {
        title: '提示',
        dataIndex: 'tip',
        align: 'right',
        fixed: 'right',
        render: (val: string) => {
            return (
                <span
                >
                    ID-Test，QS，上证行情超过120秒未更新
                </span>
            );
        },
    },

];

const AlarmReminder = () => {
    const customizeRenderEmpty = () => {
        return <CustomizeEmpty />;
    };
    return (
        <ConfigProvider renderEmpty={customizeRenderEmpty}>
            <Table
                columns={columns}
                pagination={false}
                dataSource={alarmReminderData}
            />
        </ConfigProvider>

    )
}

export default AlarmReminder
