
  import { TradeModelType } from './tradeModelType';
  
  const Trade: TradeModelType = {
    namespace: 'trade',
    state: {
      accountSelectData:1
    },
    subscriptions: {
      setup({ history, dispatch }) {},
    },
    effects: {
   


    },
  
    reducers: {
      //@ts-ignore
     handleSelectAccount(state,action){
      return {
        ...state,
        accountSelectData:action.payload
      }
     }
    },
  };
  export default Trade;
  