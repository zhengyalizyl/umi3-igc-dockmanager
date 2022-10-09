import { TradeModelType } from './tradeModelType';

const Trade: TradeModelType = {
  namespace: 'trade',
  state: {
    accountSelectData: 'account',
    accountexpandOrContactAllData: false,
    accountSelectRowData: [],
    dialySelectProductData: 'all',
    dialySelectAccountData: 'all',
    dialySelectMarketData: 'all',
    dialySelectClassifyData: 'all',
    dialySelectStatusData: 'all',
  },
  subscriptions: {
    setup({ history, dispatch }) {},
  },
  effects: {},
  reducers: {
    //@ts-ignore
    handleSelectAccount(state, action) {
      return {
        ...state,
        accountSelectData: action.payload,
      };
    },
    //@ts-ignore
    handleSelectDaily(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    //@ts-ignore
    handleSelectRowAccount(state, action) {
      return {
        ...state,
        accountSelectRowData: action.payload,
      };
    },
    //@ts-ignore
    expandOrContactAllAccount(state, action) {
      return {
        ...state,
        accountexpandOrContactAllData: action.payload,
      };
    },
  },
};
export default Trade;
