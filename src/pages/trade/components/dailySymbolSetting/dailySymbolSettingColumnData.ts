import React, { useState, useMemo, useRef, useEffect } from 'react';
import CustomHeaderCurrentExposure from './components/CustomHeaderCurrentExposure';
import OpertationTable from './components/OpertationTable';
import ProductCellRenderer from './components/ProductCellRenderer';
import TipCellRenderer from './components/TipCellRenderer';
import { getAggSumFunc, getCellRenderValue } from '../account/utils';
import SymbolCodeCellRenderer from './components/SymbolCodeCellRenderer';
import SymbolGroupCellRenderer from './components/SymbolGroupCellRenderer';
import AccountCellRenderer from './components/AccountCellRenderer';

export const columnFullData = [
  {
    field: 'account',
    colId: 'account',
    headerName: '资金账号',
    rowGroup: true,
    aggFunc: 'first',
    checkboxSelection: (params: any) => !!params.node.group,
    headerCheckboxSelection: true, //表头是否也显示复选框，全选反选
    cellRenderer: AccountCellRenderer,
  },
  {
    field: 'symbol',
    suppressMenu: true,
    hide: true,
    headerName: '标的名称',
    aggFunc: 'first',
  },
  {
    field: 'symbol',
    colId: 'symbolGroup',
    suppressMenu: true,
    headerName: '已设置标的',
    showRowGroup: true,
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      suppressCount: true,
      checkbox: false,
      innerRenderer: SymbolGroupCellRenderer,
      suppressDoubleClickExpand: true,
      suppressEnterExpand: true,
    },
    sortable: true,
  },
  {
    field: 'symbolName',
    suppressMenu: true,
    headerName: '标的名称',
    aggFunc: 'first',
    hide: true,
  },
  {
    field: 'entrustNum',
    headerName: '委托数量(股)',
    suppressMenu: true,
    aggFunc: (params: any) => getAggSumFunc(params, ''),
    cellRenderer: (parmas: any) => getCellRenderValue(parmas, ''),
  },
  {
    field: 'entrustVal',
    headerName: '委托市值',
    suppressMenu: true,
    aggFunc: (params: any) => getAggSumFunc(params, ''),
    cellRenderer: (parmas: any) => getCellRenderValue(parmas, ''),
  },
  {
    field: 'needMoney',
    headerName: '所需资金',
    suppressMenu: true,
    headerComponent: CustomHeaderCurrentExposure,
    cellRenderer: (parmas: any) => getCellRenderValue(parmas, ''),
    aggFunc: (params: any) => getAggSumFunc(params, ''),
  },
  {
    field: 'settingTime',
    headerName: '设置时间',
    suppressMenu: true,
    // cellRenderer: RedOrGreenRennderer,
  },
  {
    field: 'validTime',
    headerName: '执行有效期',
    suppressMenu: true,
    cellRenderer: (parmas: any) => getCellRenderValue(parmas, ''),
  },
  {
    field: 'autoExc',
    headerName: '自动执行',
    suppressMenu: true,
    aggFunc: (params: any) => getAggSumFunc(params, ''),
    cellRenderer: (parmas: any) => getCellRenderValue(parmas, ''),
  },
  {
    field: 'autoPosition',
    headerName: '零股自动平仓',
    suppressMenu: true,
    // cellRenderer: RedOrGreenRennderer,
  },
  {
    field: 'autoUpload',
    headerName: '自动上传',
    suppressMenu: true,
    aggFunc: (params: any) => getAggSumFunc(params, '未设置'),
    cellRenderer: (parmas: any) => getCellRenderValue(parmas, '未设置'),
  },
  {
    field: 'currentStock',
    headerName: '当前零股',
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
