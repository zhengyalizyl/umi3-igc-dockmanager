import React, { useState, useMemo, useRef, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import { dailySymbolSettingData } from '../../data';
import styles from './index.less';
import { ColDef } from 'ag-grid-community';
import { connect, Dispatch } from 'umi';
import { TradeModelState } from '../../tradeModelType';
import { columnFullData } from './dailySymbolSettingColumnData';

interface AccountTabsProps {
  dispatch: Dispatch;
}

const DailySymbolSettingTable = (props: AccountTabsProps) => {
  const { dispatch } = props;
  const gridRef = useRef<AgGridReact<any>>(null);
  const [rowData, setRowData] = useState<any[]>(dailySymbolSettingData);
  const [columnDefs, setColumnDefs] = useState<any[]>(columnFullData);
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      sortable: true,
      resizable: true,
    };
  }, []);

  const onSelectionChanged = () => {
    const selectedRows = gridRef.current!.api.getSelectedRows();
    dispatch({
      type: 'trade/handleSelectRowDailyAlog',
      payload: selectedRows,
    });
  };
  return (
    <div className={styles.agTableDailyClass}>
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
          onSelectionChanged={onSelectionChanged}
          showOpenedGroup={false}
          rowHeight={28}
          headerHeight={28}
          getRowStyle={(params) => {
            if (!(params as any)?.node.groupData) {
              return { background: '#1A1B21', borderBottom: 'none' };
            }
          }}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default connect(({ trade }: { trade: TradeModelState }) => ({}))(
  DailySymbolSettingTable,
);
