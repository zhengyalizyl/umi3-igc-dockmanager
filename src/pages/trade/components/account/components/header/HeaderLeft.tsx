import { Button, Input, Select } from 'antd';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import styles from './index.less'
import { selectProductMap } from '../../utils';
import { connect, Dispatch } from 'umi';
import { TradeModelState } from '@/pages/trade/tradeModelType';

const { Option } = Select;



interface AccountHeaderLeftProps {
    dispatch: Dispatch,
    accountSelectData:number
}

const HeaderLeft = (props: AccountHeaderLeftProps) => {

    const { dispatch } = props;

    const handleChange = (value: keyof typeof selectProductMap) => {
        console.log(`selected ${value}`, selectProductMap[value]);
        // handleOnChangeDisaply(selectProductMap[value])
        dispatch({
            type: 'trade/handleSelectAccount',
            payload: selectProductMap[value]
        })
    };

    return (
        <div className={styles.headerLeftBox}>
            <Select dropdownClassName={styles.dropdownStyle} defaultValue="account" className={styles.selectBox} onChange={handleChange}>
                <Option value="account">按账户显示</Option>
                <Option value="product">按产品显示</Option>
                <Option value="market">分市场显示</Option>
            </Select>
            <div className={styles.inputBox}>
                <Input

                    className={styles.inputClass}
                    placeholder="请输入账户/产品名称查询"
                    maxLength={8}
                    prefix={<SearchOutlined />}
                />
            </div>
            <Button className={styles.expandClass} type="link">展开全部内容</Button>
        </div>
    )
}

export default connect(
    ({ trade }: { trade: TradeModelState }) => {
        return {
            accountSelectData: trade.accountSelectData
        }
    },
)(HeaderLeft);