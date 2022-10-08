import React from 'react'
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import styles from './index.less';

const Header=()=>{

  return (
    <div className={styles.headerBox}>
        <HeaderLeft />
        <HeaderRight/>  
    </div>
  )
}

export default Header