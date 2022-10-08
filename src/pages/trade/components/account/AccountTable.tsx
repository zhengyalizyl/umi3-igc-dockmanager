import React, { useState, useMemo, useRef, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import { accountData } from '../../data';
import styles from './index.less';
import {
    ColDef,
} from 'ag-grid-community';

import { columMap } from './accountColumnData';

import { connect,Dispatch}  from 'umi'
import { TradeModelState } from '../../tradeModelType';

interface AccountTabsProps{
    accountSelectData:number,
    dispatch:Dispatch
}


const AccountTable = (props:AccountTabsProps) => {
    const {accountSelectData} =props;

    const gridRef = useRef<AgGridReact<any>>(null);
    const filterCoum = columMap[ accountSelectData+ '' as keyof typeof columMap];
    const [rowData, setRowData] = useState<any[]>(accountData);
    const [columnDefs, setColumnDefs] = useState<any[]>(filterCoum);
    const defaultColDef = useMemo<ColDef>(() => {
        return {
            sortable: true,
            resizable: true,

        };
    }, []);

    useEffect(() => {

    }, [])


    const onSelectionChanged = () => {
        console.log(gridRef.current!.api)
        const selectedRows = gridRef.current!.api.getSelectedRows();
        const a = gridRef.current!.api.getSelectedNodes();
    }

    const onRowSelected = (event: any) => {
        const selectedRows = gridRef.current!.api.getSelectedRows();

        console.log(selectedRows)
        if (event.node.selectd) {

        }
    }

    console.log(columnDefs)
    return (

        <div className={styles.agTableClass}>
            {JSON.stringify(columnDefs)}
            <div
                style={{
                    height: "300px",
                    width: "100%"
                }}
                className="ag-theme-alpine-dark">
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
                    rowHeight={28}
                    headerHeight={28}
                    onRowSelected={onRowSelected}
                    getRowStyle={(params) => {
                        console.log(params.data, 'any')
                        if ((params as any)?.data?.account === 'accountGroup') {
                            return { background: '#1A1B21', borderBottom: 'none' };
                        }
                    }}
                ></AgGridReact>
            </div>
        </div>
    )
}

export default connect(
    ({ trade }: { trade: TradeModelState }) => {
        return {
            accountSelectData: trade.accountSelectData
        }
    },
)(AccountTable);

