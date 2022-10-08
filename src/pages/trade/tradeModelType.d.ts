import { Effect, Reducer, Subscription } from 'umi';
export interface TradeModelState {
  accountSelectData: number;
  accountSelectRowData: any[];
  dialySelectProductData: string;
  dialySelectAccountData: string;
  dialySelectMarketData: string;
  dialySelectClassifyData: string;
  dialySelectStatusData: string;
}

export interface TradeModelType {
  namespace: string;
  state: TradeModelState;
  subscriptions: {
    setup: Subscription;
  };
  effects: {};
  reducers: {
    handleSelectAccount: Reducer<TradeModelType>;
    handleSelectDaily: Reducer<TradeModelType>;
    handleSelectRowAccount: Reducer<TradeModelType>;
  };
}
