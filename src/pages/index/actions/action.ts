import {Command} from '../constant';
import {Dispatch} from 'typings';
import {IAllReducerProps} from '../types';
import {getReducerData} from '@/redux/store';
import api from 'api';
import {extraPathsValue} from '@/redux/util';
import {isLogin} from '@/service/auth';
import {addressInfo} from '@/utils/location/area/area';

export default (dispatch: Dispatch) => {
  let action = {
    commonChange(...param: any) {
      dispatch({
        type: Command.commonChange,
        payload: extraPathsValue(...arguments),
      });
    },

    async query() {
      let {request} = getData().main;
      const fun = isLogin() ? 'queryStoreById' : 'queryStoreFront';
      const storeBaseInfo = await api.storeBaseController[fun](request.storeId);
      const {provinceId, cityId, areaId} = storeBaseInfo;
      const area = await addressInfo(provinceId, cityId, areaId);
      const {rechargeableCardVOPage} = await api.petRechargeableCardController.page(request);
      const {timingCardVOPage} = await api.petTimingCardController.page(request);
      dispatch({
        type: Command.queryResult,
        payload: {
          storeBaseInfo,
          rechargeCardList: rechargeableCardVOPage.content,
          timingCardList: timingCardVOPage.content,
          area,
        },
      });
    },
  };
  return action;
};

function getData(): IAllReducerProps {
  return {
    main: getReducerData('indexMain'),
  };
}
