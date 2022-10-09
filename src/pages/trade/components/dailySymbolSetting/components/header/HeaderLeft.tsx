import { Button, Input, Select } from 'antd';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import styles from './index.less';
import { connect, Dispatch } from 'umi';
import { TradeModelState } from '@/pages/trade/tradeModelType';
import SelectMutipDropDown from './SelectMutipDropDown';

const { Option } = Select;

interface AccountHeaderLeftProps {
  dispatch: Dispatch;
  accountSelectData: string;
}

const HeaderLeft = (props: AccountHeaderLeftProps) => {
  const { dispatch } = props;

  const handleChange = (value: any, name: string) => {
    console.log(`selected ${value}`);
    dispatch({
      type: `trade/handleSelectDaily`,
      payload: {
        [name]: value,
      },
    });
  };

  return (
    <div className={styles.headerLeftBox}>
      <Select
        dropdownClassName={styles.dropdownStyle}
        defaultValue={'all'}
        className={styles.selectBox}
        onChange={(val) => handleChange(val, 'dialySelectStatusData')}
      >
        <Option value="all">全部状态</Option>
        <Option value="opened">已开启</Option>
        <Option value="unopened">未开启</Option>
        <Option value="closingPosition">平仓中</Option>
        <Option value="closed">已关闭</Option>
      </Select>
      <Select
        dropdownClassName={styles.dropdownStyle}
        defaultValue={'all'}
        className={styles.selectBox}
        onChange={(val) => handleChange(val, 'dialySelectStatusData')}
      >
        <Option value="all">自动券单上传</Option>
        <Option value="opened">已开启</Option>
        <Option value="unopened">未开启</Option>
        <Option value="closingPosition">平仓中</Option>
        <Option value="closed">已关闭</Option>
      </Select>
      <div className={styles.inputBox}>
        <Input
          className={styles.inputClass}
          placeholder="请输入标的名称/代码查询"
          maxLength={8}
          width={300}
          prefix={<SearchOutlined />}
        />
      </div>
    </div>
  );
};

export default connect(({ trade }: { trade: TradeModelState }) => {
  return {
    accountSelectData: trade.accountSelectData,
  };
})(HeaderLeft);
