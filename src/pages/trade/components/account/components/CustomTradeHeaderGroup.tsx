import React from 'react'
import { Tooltip } from 'antd';
import styles from './index.less';


const CustomTradeHeaderGroup = (props: any) => {
    console.log(props)
    return (
        <div>
            <div className="ag-header-group-cell-label">
                <div className={styles.customTradelabel}>
                <span className={styles.tradeTipClass}><sup> T</sup></span>
                    {props.displayName}
                </div>

            </div>
        </div>
    )
}

export default CustomTradeHeaderGroup