import { Button, ConfigProvider } from 'antd';
import React from 'react';
import styles from './index.less';
import framePng from '@/asssets/Frame.png';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import { TradeModelState } from '@/pages/trade/tradeModelType';
import { connect } from 'umi';

interface HeaderRightProps {
  accountSelectRowData: any[];
}

function HeaderRight(props: HeaderRightProps) {
  const { accountSelectRowData } = props;
  return (
    <div className={styles.headerRightBox}>
      <ul>
        <li>
          <Button
            icon={<img src={framePng} className={styles.framIconStyle} />}
            type="text"
            className={styles.buttonClass}
          >
            算法自动下单
          </Button>
        </li>
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
            已选{accountSelectRowData.length}
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
          <Button className={styles.colorC8C9CC}>日内标的设置</Button>
          <Button icon={<PauseCircleOutlined />} className={styles.color42B1FF}>
            停止算法单
          </Button>
          <Button className={styles.colorC8C9CC}>导出当前数据</Button>
        </li>
      </ul>
    </div>
  );
}

export default connect(({ trade }: { trade: TradeModelState }) => {
  return {
    accountSelectRowData: trade.accountSelectRowData,
  };
})(HeaderRight);
