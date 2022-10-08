import React, { useState, useMemo, useRef, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import { accountData } from '../../data';
import styles from './index.less';
import {
    ColDef,
    ColGroupDef,
    Grid,
    GridOptions,
    GridReadyEvent,
} from 'ag-grid-community';
import { Button, Dropdown, Space, Tooltip } from 'antd';
import OpertationTable from './components/OpertationTable';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import AccountCellRenderer from './components/AccountCellRenderer';
import { getTheValue, getAggSumFunc, getCellRenderValue } from './utils';
import CustomTradeHeaderGroup from './components/CustomTradeHeaderGroup';
import StopCellRenderer from './components/StopCellRenderer';
import RedOrGreenRennderer from './components/RedOrGreenRennderer';
import ProcessCellRenderer from './components/ProcessCellRenderer';

const AccountTable = () => {

    const gridRef = useRef<AgGridReact<any>>(null);
    const [rowData, setRowData] = useState<any[]>(accountData);
    const [columnDefs, setColumnDefs] = useState<any[]>([
        {
            field: 'productName',
            headerName: '产品名称',
            sortable: true,
            suppressMenu: true,
            checkboxSelection: (params: any) => !!params.node.group,
            headerCheckboxSelection: true, //表头是否也显示复选框，全选反选用
            aggFunc: 'first',
            cellRenderer: (val: any) => {
                return <span>{val.node.group ? val.value : null}</span>
            }
        },
        {
            field: 'account',
            colId: 'accountGroup',
            headerName: '资金账号',
            suppressMenu: true,
            showRowGroup: true,
            cellRenderer: 'agGroupCellRenderer',
            cellRendererParams: {
                suppressCount: true,
                checkbox: false,
                innerRenderer: AccountCellRenderer,
                suppressDoubleClickExpand: true,
                suppressEnterExpand: true,
            },
            sortable: true
        },
        {
            field: 'account',
            headerName: '资金账号',
            suppressMenu: true,
            rowGroup: true,
            aggFunc: 'first',
            hide: true,
        },
        {
            field: 'avaliableCaptial',
            suppressMenu: true,
            headerName: '可用资金', aggFunc: 'sum'
        },
        {
            field: 'symbol', headerName: '委托标的',
            aggFunc: (params: any) => getAggSumFunc(params, '未设置'),
            cellRenderer: (parmas: any) => getCellRenderValue(parmas, '未设置')
        },
        {
            field: 'entrustValue', headerName: '委托市值',
            aggFunc: (params: any) => getAggSumFunc(params, '--'),
            cellRenderer: (parmas: any) => getCellRenderValue(parmas, '--')
        },
        {
            field: 'open', headerName: '已开启',
            aggFunc: (params: any) => getAggSumFunc(params, '--'),
            cellRenderer: (parmas: any) => getCellRenderValue(parmas, '--')
        },
        {
            field: 'stop',
            headerName: '未开启',
            cellRenderer: StopCellRenderer,
            aggFunc: (params: any) => getAggSumFunc(params, '--'),

        },
        {
            field: 'trade',
            headerName: '已交易',
            aggFunc: (params: any) => getAggSumFunc(params, '--'),
            cellRenderer: (parmas: any) => getCellRenderValue(parmas, '--')
        },
        {
            field: 'openPosition',
            headerName: '平仓中',
            aggFunc: (params: any) => getAggSumFunc(params, '--'),
            cellRenderer: (parmas: any) => getCellRenderValue(parmas, '--')
        },
        {
            field: 'closePosition',
            headerName: '已平仓',
            aggFunc: (params: any) => getAggSumFunc(params, '--'),
            cellRenderer: (parmas: any) => getCellRenderValue(parmas, '--')
        },
        {
            field: 'winOrLoss',
            headerName: '今日盈亏',
            cellRenderer: RedOrGreenRennderer,
            aggFunc: (params: any) => getAggSumFunc(params, '--'),
        },
        {
            field: 'dailyTradeMoney',
            headerName: '交易金额',
            headerComponent: CustomTradeHeaderGroup,
            aggFunc: (params: any) => getAggSumFunc(params, '--'),
            cellRenderer: (parmas: any) => getCellRenderValue(parmas, '--')
        },
        { field: 'openTime', headerName: '开启时间' },
        {
            field: 'order',
            headerName: '算法下单',
            aggFunc: (params: any) => getAggSumFunc(params, '未下单'),
            cellRenderer: (parmas: any) => getCellRenderValue(parmas, '未下单')
        },
        {
            field: 'process',
            headerName: '执行进度',
            cellRenderer: ProcessCellRenderer,
        },
        {
            field: 'excuteMoney',
            headerName: '执行交易金额',
            aggFunc: (params: any) => getAggSumFunc(params, '--'),
            cellRenderer: (parmas: any) => getCellRenderValue(parmas, '--')
        },
        {
            field: 'cost',
            headerName: '节约成本',
            cellRenderer: RedOrGreenRennderer,
        },
        { field: 'declarOrder', headerName: '报单量' },
        { field: 'backOrder', headerName: '测单量' },
        { field: 'wasteOrder', headerName: '废单量' },
        { field: 'backOrder', headerName: '2' },
        { field: 'backOrder', headerName: '2' },
        {
            field: 'tip', headerName: '提示', pinned: 'right',
            width: 56,
            aggFunc: 'first',
            cellRenderer: (val: any) => {
                console.log(val)
                return (
                    <Tooltip placement='topLeft' title={val.value}>
                        <ExclamationCircleOutlined width={13} height={13} color='#FF5140' />
                    </Tooltip>

                )
            }
        },
        {
            headerName: '操作',
            pinned: 'right',
            type: 'rightAligned',
            suppressMenu: true,
            width: 465,
            cellRenderer: (val: any) => (
                <OpertationTable value={val} />
            )
        },
    ]);

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


    return (

        <div className={styles.agTableClass}>
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
                        console.log(params, 'any')
                        if ((params as any)?.data?.taskType === 'symbolCode') {
                            return { background: '#1A1B21', borderBottom: 'none' };
                        }
                    }}
                ></AgGridReact>
            </div>
        </div>
    )
}

export default AccountTable