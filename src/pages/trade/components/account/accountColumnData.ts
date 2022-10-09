import React, { useState, useMemo, useRef, useEffect } from 'react';
import AccountGroupCellRenderer from './components/AccountGroupCellRenderer';
import CustomDailyTradeHeaderGroup from './components/CustomDailyTradeHeaderGroup';
import OpertationTable from './components/OpertationTable';
import ProcessCellRenderer from './components/ProcessCellRenderer';
import ProductCellRenderer from './components/ProductCellRenderer';
import RedOrGreenRennderer from './components/RedOrGreenRennderer';
import StopCellRenderer from './components/StopCellRenderer';
import { getAggSumFunc, getCellRenderValue } from './utils';
import TipCellRenderer from './components/TipCellRenderer';
import ProductGroupCellRender from './components/ProductGroupCellRender';
import MarketGroupRender from './components/MarketGroupRender';
import AvaliableCaptialCellerRender from './components/AvaliableCaptialCellerRender';
import AccountCellRenderer from './components/AccountCellRenderer';
import CustomExcuteTradeHeaderGroup from './components/CustomExcuteTradeHeaderGroup';
import MarketCellRender from './components/MarketCellRender';

export const columnFullData = [
  {
    field: 'avaliableCaptial',
    suppressMenu: true,
    headerName: '可用资金',
    aggFunc: 'sum',
    cellRenderer: AvaliableCaptialCellerRender,
  },
  {
    field: 'symbol',
    headerName: '委托标的',
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
    cellRenderer: RedOrGreenRennderer,
    suppressMenu: true,
    aggFunc: (params: any) => getAggSumFunc(params, '--'),
  },
  {
    field: 'dailyTradeMoney',
    headerName: '交易金额',
    suppressMenu: true,
    headerComponent: CustomDailyTradeHeaderGroup,
    // aggFunc: (params: any) => getAggSumFunc(params, '--'),
    cellRenderer: (parmas: any) => getCellRenderValue(parmas, '--'),
  },
  { field: 'openTime', headerName: '开启时间', suppressMenu: true },
  {
    field: 'order',
    headerName: '算法下单',
    suppressMenu: true,
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
    headerName: '交易金额',
    suppressMenu: true,
    headerComponent: CustomExcuteTradeHeaderGroup,
    aggFunc: (params: any) => getAggSumFunc(params, '--'),
    cellRenderer: (parmas: any) => getCellRenderValue(parmas, '--'),
  },
  {
    field: 'cost',
    headerName: '节约成本',
    suppressMenu: true,
    cellRenderer: RedOrGreenRennderer,
  },
  { field: 'declarOrder', headerName: '报单量' },
  { field: 'backOrder', headerName: '测单量' },
  { field: 'wasteOrder', headerName: '废单量' },
  {
    field: 'tip',
    headerName: '提示',
    pinned: 'right',
    width: 56,
    suppressMenu: true,
    sortable: false,
    aggFunc: 'first',
    cellRenderer: TipCellRenderer,
  },
  {
    headerName: '操作',
    pinned: 'right',
    type: 'rightAligned',
    suppressMenu: true,
    sortable: false,
    width: 436,
    cellRenderer: OpertationTable,
  },
];

export const getDispalyProduct = (arrColum: any) => {
  const product = [
    {
      field: 'productName',
      colId: 'productName',
      headerName: '产品名称',
      sortable: true,
      suppressMenu: true,
      rowGroup: true,
      hide: false,
      checkboxSelection: (params: any) => !!params.node.group,
      headerCheckboxSelection: true, //表头是否也显示复选框，全选反选
      cellRenderer: ProductCellRenderer,
    },
    {
      field: 'account',
      colId: 'account',
      headerName: '资金账号',
      suppressMenu: true,
      hide: true,
      rowGroup: false,
      aggFunc: 'first',
      cellRenderer: AccountCellRenderer,
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
        innerRenderer: AccountGroupCellRenderer,
        suppressDoubleClickExpand: true,
        suppressEnterExpand: true,
      },
      sortable: true,
    },
  ];

  const productCloum = product.concat(arrColum);
  return productCloum;
};

export const getDispalyAccount = (arrColum: any) => {
  const product = [
    {
      field: 'account',
      colId: 'account',
      headerName: '资金账号',
      suppressMenu: true,
      rowGroup: true,
      aggFunc: 'first',
      hide: false,
      checkboxSelection: (params: any) => !!params.node.group,
      headerCheckboxSelection: true, //表头是否也显示复选框，全选反选
      cellRenderer: AccountCellRenderer,
    },
    {
      field: 'productName',
      colId: 'productName',
      headerName: '产品名称',
      sortable: true,
      suppressMenu: true,
      rowGroup: false,
      hide: true,
      aggFunc: 'first',
      cellRenderer: ProductCellRenderer,
    },
    {
      field: 'productName',
      colId: 'productGroup',
      headerName: '产品名称',
      suppressMenu: true,
      showRowGroup: true,
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: {
        suppressCount: true,
        checkbox: false,
        innerRenderer: ProductGroupCellRender,
        suppressDoubleClickExpand: true,
        suppressEnterExpand: true,
      },
      sortable: true,
    },
  ];

  const productCloum = product.concat(arrColum);
  return productCloum;
};

export const getDispalyMarket = (arrColum: any) => {
  const product = [
    {
      field: 'market',
      colId: 'market',
      headerName: '市场',
      suppressMenu: true,
      rowGroup: true,
      hide: false,
      aggFunc: 'first',
      sortable: true,
      checkboxSelection: (params: any) => !!params.node.group,
      headerCheckboxSelection: true, //表头是否也显示复选框，全选反选
      cellRenderer: MarketCellRender,
    },
    {
      field: 'account',
      colId: 'account',
      headerName: '资金账号',
      suppressMenu: true,
      aggFunc: 'first',
      hide: true,
      rowGroup: false,
      cellRenderer: AccountCellRenderer,
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
        innerRenderer: AccountGroupCellRenderer,
        suppressDoubleClickExpand: true,
        suppressEnterExpand: true,
      },
      sortable: true,
    },
    {
      field: 'productName',
      colId: 'productName',
      headerName: '资金账号',
      suppressMenu: true,
      aggFunc: 'first',
      hide: true,
      rowGroup: false,
      cellRenderer: AccountCellRenderer,
    },
    {
      field: 'productName',
      colId: 'productGroup',
      headerName: '产品名称',
      suppressMenu: true,
      showRowGroup: true,
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: {
        suppressCount: true,
        checkbox: false,
        innerRenderer: ProductGroupCellRender,
        suppressDoubleClickExpand: true,
        suppressEnterExpand: true,
      },
      sortable: true,
    },
  ];

  const productCloum = product.concat(arrColum);
  return productCloum;
};

export const columMap = {
  account: getDispalyAccount(columnFullData),
  product: getDispalyProduct(columnFullData),
  market: getDispalyMarket(columnFullData),
};
