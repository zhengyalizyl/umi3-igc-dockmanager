import { GlobalModelState } from './global';

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
  };
}

export interface ConnectState {
  global: GlobalModelState;
  loading: Loading;
}

export interface Route {
  routes?: Route[];
}

