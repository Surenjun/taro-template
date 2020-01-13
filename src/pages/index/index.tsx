import {View, WebView} from '@tarojs/components';
import Taro, {Component} from '@tarojs/taro';

import {connect} from '@tarojs/redux';
import './index.less';
import * as T from './types';
import actions from './actions';
import {store2Props} from './selectors';

@connect<Partial<T.IProps>, any>(
  store2Props,
  actions,
)
export default class Index extends Component<Partial<T.IProps>, any> {
  constructor(props) {
    super(props);
  }

  config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true,
  };


  render() {
    return (
      <View className="index">

          <View>

          </View>

      </View>
    );
  }
}
