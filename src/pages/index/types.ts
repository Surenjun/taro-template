import Actions from './actions';


export interface IMainReducer {
  isReady: boolean;
  isLoading?: boolean;

  storeBaseInfo: [];

  rechargeCardList: [];

  timingCardList: [];

  request: IMainRequest;

  area: string;
}

export type ActionType = ReturnType<typeof Actions>;
export type IAllReducerProps = {
  main: IMainReducer;

  [name: string]: any;
};

//默认是全部的属性,可以自定义
export type IProps = IAllReducerProps & ActionType;

export type IBannerProps = {};
export type IBannerState = {};

export type ITabsProps = {};
export type ITabsState = {};

export type IRechargeCardListProps = {};
export type IRechargeCardListState = {};

export type ITimingCardListProps = {};
export type ITimingCardListState = {};

export interface IMainRequest {
  storeId: number;
  q?: string;
  pageNum: number;
  pageSize: number;
  [k: string]: any;
}
