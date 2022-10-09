import { Button, Input, Select } from 'antd';
import React from 'react';
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
        className={`${styles.selectBox}`}
        onChange={(val) => handleChange(val, 'dialySelectProductData')}
      >
        <Option value="all">全部产品</Option>
        <Option value="prod1">量化私募基金101号</Option>
        <Option value="prod2">量化私募基金102号</Option>
      </Select>
      <Select
        dropdownClassName={styles.dropdownStyle}
        defaultValue={'all'}
        className={styles.selectBox}
        onChange={(val) => handleChange(val, 'dialySelectAccountData')}
      >
        <Option value="all">全部账户</Option>
        <Option value="12333">12333</Option>
        <Option value="4545545">455555</Option>
      </Select>
      <Select
        dropdownClassName={styles.dropdownStyle}
        defaultValue={'all'}
        className={styles.selectBox}
        onChange={(val) => handleChange(val, 'dialySelectMarketData')}
      >
        <Option value="all">全部市场</Option>
        <Option value="product">深圳</Option>
        <Option value="market">上海</Option>
      </Select>
      <Select
        dropdownClassName={styles.dropdownStyle}
        defaultValue={'all'}
        className={styles.selectBox}
        onChange={(val) => handleChange(val, 'dialySelectClassifyData')}
      >
        <Option value="all">全部品种</Option>
        <Option value="stock">股票</Option>
        <Option value="etf">ETF</Option>
        <Option value="convertibleBond">可转债</Option>
      </Select>
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
      <div className={styles.inputBox}>
        <Input
          className={styles.inputClass}
          placeholder="请输入标的名称/代码查询"
          maxLength={8}
          width={300}
          prefix={<SearchOutlined />}
        />
      </div>
      <div className={styles.runningClass}>
        <span>运行中</span>
        <span>240/249</span>
      </div>
      <div className={styles.runningClass}>
        <span>平仓中</span>
        <span>4/249</span>
      </div>
    </div>
  );
};

export default connect(({ trade }: { trade: TradeModelState }) => {
  return {
    accountSelectData: trade.accountSelectData,
  };
})(HeaderLeft);
