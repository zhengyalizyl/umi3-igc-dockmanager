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

          <Button className={styles.color42B1FF}>批量自动上传券单</Button>
          <Button className={styles.colorFF8743}>批量取消日内标的设置</Button>
          <Button type="primary">批量设置日内标的</Button>
          <Button className={styles.colorC8C9CC}>同步所有资券</Button>
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
