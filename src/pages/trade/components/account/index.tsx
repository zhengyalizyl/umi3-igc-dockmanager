import React,{useEffect,useState} from 'react'
import Header from './components/header';
import AccountTable from './AccountTable';
import {connect} from 'umi'

const  Account=()=>{
  return (
    <div>
        <Header />
        <AccountTable/>
    </div>
  )
}


export default connect(a=>{

})(Account);
