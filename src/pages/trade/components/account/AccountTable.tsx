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
import { columMap, columnFullData } from './accountColumnData';

interface AccountTabsProps {
  accountSelectData: string;
  accountexpandOrContactAllData: boolean;
  dispatch: Dispatch;
}

const AccountTable = (props: AccountTabsProps) => {
  const { accountSelectData, dispatch, accountexpandOrContactAllData } = props;
  console.log(accountexpandOrContactAllData);
  const gridRef = useRef<AgGridReact<any>>(null);

  const filterCoum = columMap[accountSelectData as keyof typeof columMap];
  const [rowData, setRowData] = useState<any[]>(accountData);
  const [columnDefs, setColumnDefs] = useState<any[]>(filterCoum);
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      sortable: true,
      resizable: true,
    };
  }, []);

  useEffect(() => {
    const filterCoum = columMap[accountSelectData as keyof typeof columMap];
    setColumnDefs(filterCoum);
    setRowData(accountData);
  }, [accountSelectData]);

  useEffect(() => {
    console.log(accountexpandOrContactAllData, 'zhankaile');
    if (accountexpandOrContactAllData) {
      gridRef.current?.api?.expandAll();
    } else {
      gridRef.current?.api?.collapseAll();
    }
  }, [accountexpandOrContactAllData]);

  const onSelectionChanged = () => {
    const selectedRows = gridRef.current!.api.getSelectedRows();
    dispatch({
      type: 'trade/handleSelectRowAccount',
      payload: selectedRows,
    });
  };

  console.log(columnDefs);
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
          onSelectionChanged={onSelectionChanged}
          suppressAggFuncInHeader={true}
          groupSelectsChildren={true}
          suppressContextMenu={true}
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
    accountexpandOrContactAllData: trade.accountexpandOrContactAllData,
  };
})(AccountTable);
