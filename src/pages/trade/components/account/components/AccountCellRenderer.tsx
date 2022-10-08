import React, { useState } from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import styles from './index.less'
import { Button, Tooltip } from 'antd';

export default (props: ICellRendererParams) => {
    const onClick = () => {
        props.node.setExpanded(!props.node.expanded)
    }
    const count = props.node.allChildrenCount;
    const countMore1 = count && count > 1;

    if (props.node.group) {
        const allLeafChildren = Array.from(props.node.allLeafChildren);
        const loginArr = allLeafChildren.filter(leaf => leaf.data.isLogin);
        const unLoginArr = allLeafChildren.filter(leaf => !leaf.data.isLogin);
        const isHasUnLoginpArr = unLoginArr.length > 0;
        return (
            <div className={styles.accountCellClass}>
                <span>{countMore1 ? '账号' : props.value}</span>
                {countMore1&&(<span className={styles.countClass}>
                    {count}
                </span>)}
                <span className={styles.expandClass}>
                    {countMore1 && props.node.expanded && (<DownOutlined style={{ fontSize: 12 }} onClick={onClick} />)}
                    {countMore1 && !props.node.expanded && (<RightOutlined style={{ fontSize: 12 }} onClick={onClick} />)}
                </span>
                {isHasUnLoginpArr && (
                      <Tooltip title={
                        <ul>
                        <li><span>12222</span><span><Button type="link">登录</Button></span></li>
                        <li><span>1233334444344</span><span><Button type="link">未登录</Button></span></li>
                        </ul>
                      }>
                        1233
                    </Tooltip>
                )}

            </div>)
    }

    return (
        <div className={styles.accountCellClass}>
            <span>
            {props.value}
            </span>
            {!props.data.isLogin && (
            <Tooltip title={<span>12233</span>}>
                122
            </Tooltip>
            )}
        </div>
    )
};
