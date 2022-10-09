import React, { useState, useMemo, useRef, useEffect } from 'react';
import CustomHeaderCurrentExposure from './components/CustomHeaderCurrentExposure';
import OpertationTable from './components/OpertationTable';
import ProductCellRenderer from './components/ProductCellRenderer';
import RedOrGreenRennderer from './components/RedOrGreenRennderer';
import TipCellRenderer from './components/TipCellRenderer';
import { getAggSumFunc, getCellRenderValue } from '../account/utils';
import SymbolCodeCellRenderer from './components/SymbolCodeCellRenderer';

export const columnFullData = [
  {
    field: 'account',
    colId: 'account',
    headerName: '资金账号',
    suppressMenu: true,
    checkboxSelection: true,
    headerCheckboxSelection: true, //表头是否也显示复选框，全选反选用
  },
  {
    field: 'productName',
    colId: 'productName',
    headerName: '产品名称',
    sortable: true,
    suppressMenu: true,
    cellRenderer: ProductCellRenderer,
  },
  {
    field: 'symbolName',
    suppressMenu: true,
    headerName: '标的名称',
  },
  {
    field: 'symbol',
    suppressMenu: true,
    headerName: '标的代码',
    cellRenderer: SymbolCodeCellRenderer,
  },
  {
    field: 'entrustNum',
    headerName: '委托数量(股)',
    suppressMenu: true,
  },
  {
    field: 'income',
    headerName: '已实现收益',
    suppressMenu: true,
    cellRenderer: RedOrGreenRennderer,
  },
  {
    field: 'unIncome',
    headerName: '未实现收益',
    suppressMenu: true,
    cellRenderer: RedOrGreenRennderer,
  },
  {
    field: 'tradeNum',
    headerName: '交易量',
    suppressMenu: true,
    cellRenderer: (parmas: any) => getCellRenderValue(parmas, '--'),
  },
  {
    field: 'tradeMoney',
    headerName: '交易金额',
    suppressMenu: true,
    aggFunc: (params: any) => getAggSumFunc(params, '--'),
    cellRenderer: (parmas: any) => getCellRenderValue(parmas, '--'),
  },
  {
    field: 'current',
    headerName: '当前敞口',
    suppressMenu: true,
    headerComponent: CustomHeaderCurrentExposure,
    cellRenderer: RedOrGreenRennderer,
  },
  {
    field: 'initalUse',
    headerName: '初始可用',
    suppressMenu: true,
    aggFunc: (params: any) => getAggSumFunc(params, '--'),
  },
  {
    field: 'entrust',
    headerName: '委托中',
    suppressMenu: true,
    cellRenderer: (parmas: any) => getCellRenderValue(parmas, '--'),
  },
  {
    field: 'askorder',
    suppressMenu: true,
    headerName: '报单',
    cellRenderer: (parmas: any) => getCellRenderValue(parmas, '--'),
  },
  {
    field: 'deal',
    headerName: '成交',
    suppressMenu: true,
    cellRenderer: (parmas: any) => getCellRenderValue(parmas, '--'),
  },
  {
    field: 'backOrder',
    headerName: '撤单',
    suppressMenu: true,
    cellRenderer: (parmas: any) => getCellRenderValue(parmas, '--'),
  },
  {
    field: 'stoporder',
    headerName: '废单',
    cellRenderer: (parmas: any) => getCellRenderValue(parmas, '--'),
    suppressMenu: true,
  },
  {
    field: 'tip',
    headerName: '提示',
    width: 56,
    aggFunc: 'first',
    cellRenderer: TipCellRenderer,
  },
  {
    headerName: '操作',
    pinned: 'right',
    type: 'rightAligned',
    suppressMenu: true,
    width: 250,
    cellRenderer: OpertationTable,
  },
];
