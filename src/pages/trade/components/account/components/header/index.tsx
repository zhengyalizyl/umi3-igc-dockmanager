import React from 'react'
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import styles from './index.less';
import {connect,Dispatch} from 'umi'


interface AccountHeaderProps{
  dispatch:Dispatch
}

const Header=(props:AccountHeaderProps)=>{

  return (
    <div className={styles.headerBox}>
        <HeaderLeft />
        <HeaderRight/>  
    </div>
  )
}

export default connect(
  ()=>({})
)(HeaderLeft);