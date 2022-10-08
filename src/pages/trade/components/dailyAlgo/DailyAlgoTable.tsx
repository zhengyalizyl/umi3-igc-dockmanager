import React, { useState, useMemo, useRef, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import { accountData } from '../../data';
import styles from './index.less';
import { ColDef } from 'ag-grid-community';

import { connect, Dispatch } from 'umi';
import { TradeModelState } from '../../tradeModelType';
import { columnFullData } from './accountColumnData';
import AccountGroupCellRenderer from './components/AccountGroupCellRenderer';
import ProductCellRenderer from './components/ProductCellRenderer';
import { getAggSumFunc, getCellRenderValue } from '../account/utils';
import StopCellRenderer from './components/StopCellRenderer';
import RedOrGreenRennderer from './components/RedOrGreenRennderer';
import CustomTradeHeaderGroup from './components/CustomTradeHeaderGroup';
import ProcessCellRenderer from './components/ProcessCellRenderer';
import TipCellRenderer from './components/TipCellRenderer';
import OpertationTable from './components/OpertationTable';

interface AccountTabsProps {
  accountSelectData: number;
  dispatch: Dispatch;
}

const AccountTable = (props: AccountTabsProps) => {
  const { accountSelectData } = props;
  const gridRef = useRef<AgGridReact<any>>(null);
  const [rowData, setRowData] = useState<any[]>(accountData);

  const [columnDefs, setColumnDefs] = useState<any[]>(columnFullData);
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      sortable: true,
      resizable: true,
    };
  }, []);

  useEffect(() => {}, []);
  return (
    <div className={styles.agTableClass}>
      <div
        style={{
          height: '300px',
          width: '100%',
        }}
        className="ag-theme-alpine-dark"
      >
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          groupDisplayType={'custom'}
          animateRows={true}
          rowSelection={'multiple'}
          suppressRowClickSelection={true}
          suppressAggFuncInHeader={true}
          groupSelectsChildren={true}
          rowHeight={28}
          headerHeight={28}
          getRowStyle={(params) => {
            console.log(params.data, 'any');
            if ((params as any)?.data?.account === 'accountGroup') {
              return { background: '#1A1B21', borderBottom: 'none' };
            }
          }}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default connect(({ trade }: { trade: TradeModelState }) => {
  return {
    accountSelectData: trade.accountSelectData,
  };
})(AccountTable);
