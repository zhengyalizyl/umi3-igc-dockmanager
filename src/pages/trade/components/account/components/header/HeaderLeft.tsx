import { Button, Input, Select } from 'antd';
import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import styles from './index.less';
import { connect, Dispatch } from 'umi';
import { TradeModelState } from '@/pages/trade/tradeModelType';

const { Option } = Select;

interface AccountHeaderLeftProps {
  dispatch: Dispatch;
  accountSelectData: string;
}

const HeaderLeft = (props: AccountHeaderLeftProps) => {
  const { dispatch } = props;
  const [expand, setExpand] = useState(false);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`, value);
    dispatch({
      type: 'trade/handleSelectAccount',
      payload: value,
    });
  };

  const clickExpandAccount = () => {
    setExpand(!expand);
    dispatch({
      type: 'trade/expandOrContactAllAccount',
      payload: !expand,
    });
  };

  return (
    <div className={styles.headerLeftBox}>
      <Select
        dropdownClassName={styles.dropdownStyle}
        defaultValue={'account'}
        className={styles.selectBox}
        onChange={handleChange}
      >
        <Option value="account">按账户显示</Option>
        <Option value="product">按产品显示</Option>
        <Option value="market">分市场显示</Option>
      </Select>
      <div className={styles.inputBox}>
        <Input
          className={styles.inputClass}
          placeholder="请输入账户/产品名称查询"
          maxLength={8}
          width={300}
          prefix={<SearchOutlined />}
        />
      </div>
      <Button
        className={styles.expandClass}
        type="link"
        onClick={clickExpandAccount}
      >
        {expand ? '关闭全部内容' : '展开全部内容'}
      </Button>
    </div>
  );
};

export default connect(({ trade }: { trade: TradeModelState }) => {
  return {
    accountSelectData: trade.accountSelectData,
  };
})(HeaderLeft);
