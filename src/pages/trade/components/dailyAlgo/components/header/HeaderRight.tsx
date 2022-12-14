import { Button, ConfigProvider } from 'antd';
import React from 'react';
import styles from './index.less';
import framePng from '@/asssets/Frame.png';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import { TradeModelState } from '@/pages/trade/tradeModelType';
import { connect } from 'umi';

interface HeaderRightProps {
  dailyAlgoSelectRowData: any[];
}

const HeaderRight = (props: HeaderRightProps) => {
  const { dailyAlgoSelectRowData } = props;
  return (
    <div className={styles.headerRightBox}>
      <ul>
        <li>
          <Button
            icon={<img src={framePng} className={styles.framIconStyle} />}
            type="text"
            className={styles.buttonClass}
          >
            配置列
          </Button>
        </li>
        <li className={styles.batchBox}>
          <span className={styles.selectBox}>
            已选{dailyAlgoSelectRowData.length}
          </span>
          <Button icon={<PlayCircleOutlined />} className={styles.color00B69B}>
            开启
          </Button>

          <Button icon={<PauseCircleOutlined />} className={styles.color42B1FF}>
            暂停
          </Button>
          <ConfigProvider autoInsertSpaceInButton={false}>
            <Button className={styles.colorFF8743}>平仓</Button>
          </ConfigProvider>
          <ConfigProvider autoInsertSpaceInButton={false}>
            <Button className={styles.color1C1F27}>取消</Button>
          </ConfigProvider>
          <Button className={styles.colorC8C9CC}>导出数据</Button>
        </li>
      </ul>
    </div>
  );
};

export default connect(({ trade }: { trade: TradeModelState }) => {
  return {
    dailyAlgoSelectRowData: trade.dailyAlgoSelectRowData,
  };
})(HeaderRight);
