import { Button } from 'antd';
import React from 'react';
import styles from './index.less';
import framePng from '@/asssets/Frame.png';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';

function HeaderRight() {
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
          <span className={styles.selectBox}>已选1</span>
          <Button icon={<PlayCircleOutlined />} className={styles.color00B69B}>
            开启
          </Button>
          <Button icon={<PauseCircleOutlined />} className={styles.color42B1FF}>
            暂停
          </Button>
          <Button className={styles.colorFF8743}>平仓</Button>
          <Button className={styles.colorC8C9CC}>取消</Button>
          <Button className={styles.colorC8C9CC}>导出数据</Button>
        </li>
      </ul>
    </div>
  );
}

export default HeaderRight;
