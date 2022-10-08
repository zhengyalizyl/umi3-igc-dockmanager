import { Table } from 'antd';
import React from 'react';
const columns :any= [
    {
        title: 'Name',
        dataIndex: 'name',
        width: 150,
        fixed: 'left',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        width: 150,
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];
const data: any[] = [];

for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

const DayTable = () => {
    return (
    <>
        <Table
            columns={columns}
            dataSource={data}
            pagination={{
                pageSize: 50,
            }}
            scroll={{
                y: 240,
            }}
        />
    </>
    )
};

export default DayTable;