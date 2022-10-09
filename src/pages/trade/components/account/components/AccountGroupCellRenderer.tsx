import React, { useState } from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import styles from './index.less';
import { Button, Tooltip } from 'antd';
// export default (props: ICellRendererParams) => {
//   const onClick = () => {
//     props.node.setExpanded(!props.node.expanded);
//   };
//   const count = props.node.allChildrenCount;
//   const countMore1 = count && count > 1;

//   if (props.node.group) {
//     //dengluyuweidenglu
//     const allLeafChildren = props.node.allLeafChildren;
//     let unloginArr: any[] = [];
//     Array.from(allLeafChildren).map((leaf) => {
//       if (!leaf.data.accountIsLogin) {
//         unloginArr.push(leaf);
//       }
//     });
//     const isUnLoginArr = unloginArr.length == 1;
//     return (
//       <div className={styles.accountCellClass}>
//         <span>{countMore1 ? '账号' : props.value}</span>
//         {countMore1 && <span className={styles.countClass}>{count}</span>}
//         <span className={styles.expandClass}>
//           {countMore1 && props.node.expanded && (
//             <DownOutlined style={{ fontSize: 12 }} onClick={onClick} />
//           )}
//           {countMore1 && !props.node.expanded && (
//             <RightOutlined style={{ fontSize: 12 }} onClick={onClick} />
//           )}
//         </span>

//         {isUnLoginArr && (
//           <Tooltip
//             title={
//               <ul className={styles.accountLoginTip}>
//                 <li>
//                   <span>12222</span>
//                   <span>未</span>
//                   <span>登录,</span>
//                   <span>点击</span>
//                   <Button type="link">登录</Button>
//                 </li>
//                 <li>
//                   <span>1233334444344</span>
//                   <span>已</span>
//                   <span>登录</span>
//                 </li>
//               </ul>
//             }
//           >
//             登录
//           </Tooltip>
//         )}
//       </div>
//     );
//   }

//   return (
//     <div className={styles.accountCellClass}>
//       <span>{props.value}</span>
//       {!props.data.accountIsLogin && (
//         <Tooltip
//           title={
//             <ul className={styles.accountLoginTip}>
//               <li>
//                 <span>12222</span>
//                 <span>未</span>
//                 <span>登录,</span>
//                 <span>点击</span>
//                 <Button type="link">登录</Button>
//               </li>
//               <li>
//                 <span>1233334444344</span>
//                 <span>已</span>
//                 <span>登录</span>
//               </li>
//             </ul>
//           }
//         >
//           登录
//         </Tooltip>
//       )}
//     </div>
//   );
// };

export default (props: ICellRendererParams) => {
  const onClick = () => {
    props.node.setExpanded(!props.node.expanded);
  };
  const count = props.node.allChildrenCount;
  const countMore1 = count && count > 1;

  if (props.node.group) {
    //dengluyuweidenglu
    const allLeafChildren = props.node.allLeafChildren;
    let unloginArr: any[] = [];
    Array.from(allLeafChildren).map((leaf) => {
      if (!leaf.data.accountIsLogin) {
        unloginArr.push(leaf);
      }
    });
    const isUnLoginArr = unloginArr.length == 1;
    return (
      <div className={styles.accountCellClass}>
        <span>{countMore1 ? '账号' : props.node.aggData.account}</span>
        {countMore1 && <span className={styles.countClass}>{count}</span>}
        <span className={styles.expandClass}>
          {countMore1 && props.node.expanded && (
            <DownOutlined style={{ fontSize: 12 }} onClick={onClick} />
          )}
          {countMore1 && !props.node.expanded && (
            <RightOutlined style={{ fontSize: 12 }} onClick={onClick} />
          )}
        </span>

        {isUnLoginArr && (
          <Tooltip
            title={
              <ul className={styles.accountLoginTip}>
                <li>
                  <span>12222</span>
                  <span>未</span>
                  <span>登录,</span>
                  <span>点击</span>
                  <Button type="link">登录</Button>
                </li>
                <li>
                  <span>1233334444344</span>
                  <span>已</span>
                  <span>登录</span>
                </li>
              </ul>
            }
          >
            登录
          </Tooltip>
        )}
      </div>
    );
  }

  return (
    <div className={styles.accountCellClass}>
      <span>{props.value}</span>
      {!props.data.accountIsLogin && (
        <Tooltip
          title={
            <ul className={styles.accountLoginTip}>
              <li>
                <span>12222</span>
                <span>未</span>
                <span>登录,</span>
                <span>点击</span>
                <Button type="link">登录</Button>
              </li>
              <li>
                <span>1233334444344</span>
                <span>已</span>
                <span>登录</span>
              </li>
            </ul>
          }
        >
          登录
        </Tooltip>
      )}
    </div>
  );
};
