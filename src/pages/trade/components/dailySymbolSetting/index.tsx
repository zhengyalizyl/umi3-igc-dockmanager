import React, { useEffect, useState } from 'react';
import Header from './components/header';
import { connect } from 'umi';
import DailySymbolSettingTable from './DailySymbolSettingTable';

const Account = () => {
  return (
    <div>
      <Header />
      <DailySymbolSettingTable />
    </div>
  );
};

export default connect((a) => {})(Account);
