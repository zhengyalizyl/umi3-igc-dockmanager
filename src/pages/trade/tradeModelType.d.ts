import { Effect, Reducer, Subscription } from 'umi';
export interface TradeModelState {
  accountSelectData:number
}

export interface TradeModelType {
  namespace: string;
  state: TradeModelState;
  subscriptions: {
    setup: Subscription;
  };
  effects: {
  };
  reducers: {
    handleSelectAccount:Reducer<TradeModelType>
  };
}
