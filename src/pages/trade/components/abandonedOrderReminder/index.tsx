import React from 'react';
import { ConfigProvider, Table } from 'antd'
import CustomizeEmpty from '../customizeEmpty';
import { abandonedOrderReminderData } from '../../data'

const columns: any[] = [
    {
        title: '时间',
        dataIndex: 'time',
        align: 'left',
        width:80,
        render: (text: number, record: any, index: number) => {
            return <span >{text}</span>;
        },
    },
    {
        title: 'ID',
        dataIndex: 'id',
        align: 'left',
        width:80,
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
        title: '策略账户',
        dataIndex: 'account',
        align: 'left',
        width:100,
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
        title: '标的代码',
        dataIndex: 'symbol',
        align: 'left',
        width:80,
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
        title: '报单号',
        dataIndex: 'orderId',
        align: 'left',
        width:120,
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
        title: '买卖',
        dataIndex: 'sellType',
        align: 'left',
        width:50,
        render: (val: number) => {
            return (
                <span
                >
                    {val === 1 ? '买' : "卖"}
                </span>
            );
        },
    },
    {
        title: '类型',
        dataIndex: 'type',
        align: 'right',
        width:40,
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
        fixed: 'right',
        align: 'center',
        width:240,
        render: (val: string) => {
            return (
                <span
                >
                    {val}
                </span>
            );
        },
    },

];

const AbandonedOrderReminder = () => {
    const customizeRenderEmpty = () => {
        return <CustomizeEmpty />;
    };
    return (
        <ConfigProvider renderEmpty={customizeRenderEmpty}>
            <Table
                columns={columns}
                pagination={false}
                dataSource={abandonedOrderReminderData}
                scroll={{x:313,y:200}}
            />
        </ConfigProvider>

    )
}

export default AbandonedOrderReminder
