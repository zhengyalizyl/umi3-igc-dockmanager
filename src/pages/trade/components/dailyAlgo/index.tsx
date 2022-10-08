import React, { useEffect, useState } from 'react';
import Header from './components/header';
import { connect } from 'umi';
import DailyAlgoTable from './DailyAlgoTable';

const Account = () => {
  return (
    <div>
      <Header />
      <DailyAlgoTable />
    </div>
  );
};

export default connect((a) => {})(Account);
