import React, { useState, useMemo, useRef, useEffect } from 'react';
import AccountGroupCellRenderer from './components/AccountGroupCellRenderer';
import CustomTradeHeaderGroup from './components/CustomTradeHeaderGroup';
import OpertationTable from './components/OpertationTable';
import ProcessCellRenderer from './components/ProcessCellRenderer';
import ProductCellRenderer from './components/ProductCellRenderer';
import RedOrGreenRennderer from './components/RedOrGreenRennderer';
import StopCellRenderer from './components/StopCellRenderer';

import TipCellRenderer from './components/TipCellRenderer';
import ProductGroupCellRender from './components/ProductGroupCellRender';
import MarketGroupRender from './components/MarketGroupRender';
import { getAggSumFunc, getCellRenderValue } from '../account/utils';

export const columnFullData = [
  {
    field: 'account',
    colId: 'account',
    headerName: '资金账号',
    suppressMenu: true,
    rowGroup: true,
    aggFunc: 'first',
    hide: true,
  },
  {
    field: 'account',
    colId: 'accountGroup',
    headerName: '资金账号',
    suppressMenu: true,
    showRowGroup: true,
    cellRenderer: 'agGroupCellRenderer',
    headerCheckboxSelection: true, //表头是否也显示复选框，全选反选用
    cellRendererParams: {
      suppressCount: true,
      checkbox: true,
      innerRenderer: AccountGroupCellRenderer,
      suppressDoubleClickExpand: true,
      suppressEnterExpand: true,
    },
    sortable: true,
  },
  {
    field: 'productName',
    colId: 'productName',
    headerName: '产品名称',
    sortable: true,
    suppressMenu: true,
    aggFunc: 'first',
    cellRenderer: ProductCellRenderer,
  },
  {
    field: 'symbol',
    suppressMenu: true,
    headerName: '标的名称',
    aggFunc: 'sum',
  },
  {
    field: 'symbol',
    headerName: '委托数量',
    suppressMenu: true,
    aggFunc: (params: any) => getAggSumFunc(params, '未设置'),
    cellRenderer: (parmas: any) => getCellRenderValue(parmas, '未设置'),
  },
  {
    field: 'entrustValue',
    headerName: '委托市值',
    suppressMenu: true,
    aggFunc: (params: any) => getAggSumFunc(params, '--'),
    cellRenderer: (parmas: any) => getCellRenderValue(parmas, '--'),
  },
  {
    field: 'open',
    headerName: '已开启',
    suppressMenu: true,
    aggFunc: (params: any) => getAggSumFunc(params, '--'),
    cellRenderer: (parmas: any) => getCellRenderValue(parmas, '--'),
  },
  {
    field: 'stop',
    headerName: '未开启',
    suppressMenu: true,
    cellRenderer: StopCellRenderer,
    aggFunc: (params: any) => getAggSumFunc(params, '--'),
  },
  {
    field: 'trade',
    headerName: '已交易',
    suppressMenu: true,
    aggFunc: (params: any) => getAggSumFunc(params, '--'),
    cellRenderer: (parmas: any) => getCellRenderValue(parmas, '--'),
  },
  {
    field: 'openPosition',
    headerName: '平仓中',
    suppressMenu: true,
    aggFunc: (params: any) => getAggSumFunc(params, '--'),
    cellRenderer: (parmas: any) => getCellRenderValue(parmas, '--'),
  },
  {
    field: 'closePosition',
    headerName: '已平仓',
    suppressMenu: true,
    aggFunc: (params: any) => getAggSumFunc(params, '--'),
    cellRenderer: (parmas: any) => getCellRenderValue(parmas, '--'),
  },
  {
    field: 'winOrLoss',
    headerName: '今日盈亏',
    suppressMenu: true,
    cellRenderer: RedOrGreenRennderer,
    aggFunc: (params: any) => getAggSumFunc(params, '--'),
  },
  {
    field: 'dailyTradeMoney',
    headerName: '交易金额',
    suppressMenu: true,
    headerComponent: CustomTradeHeaderGroup,
    aggFunc: (params: any) => getAggSumFunc(params, '--'),
    cellRenderer: (parmas: any) => getCellRenderValue(parmas, '--'),
  },
  { field: 'openTime', headerName: '开启时间', suppressMenu: true },
  {
    field: 'order',
    suppressMenu: true,
    headerName: '算法下单',
    aggFunc: (params: any) => getAggSumFunc(params, '未下单'),
    cellRenderer: (parmas: any) => getCellRenderValue(parmas, '未下单'),
  },
  {
    field: 'process',
    headerName: '执行进度',
    suppressMenu: true,
    cellRenderer: ProcessCellRenderer,
  },
  {
    field: 'excuteMoney',
    headerName: '执行交易金额',
    suppressMenu: true,
    aggFunc: (params: any) => getAggSumFunc(params, '--'),
    cellRenderer: (parmas: any) => getCellRenderValue(parmas, '--'),
  },
  {
    field: 'cost',
    headerName: '节约成本',
    cellRenderer: RedOrGreenRennderer,
    suppressMenu: true,
  },
  { field: 'declarOrder', headerName: '报单量' },
  { field: 'backOrder', headerName: '测单量' },
  { field: 'wasteOrder', headerName: '废单量' },
  { field: 'backOrder', headerName: '2' },
  { field: 'backOrder', headerName: '2' },
  {
    field: 'tip',
    headerName: '提示',
    pinned: 'right',
    width: 56,
    aggFunc: 'first',
    cellRenderer: TipCellRenderer,
  },
  {
    headerName: '操作',
    pinned: 'right',
    type: 'rightAligned',
    suppressMenu: true,
    width: 465,
    cellRenderer: OpertationTable,
  },
];
