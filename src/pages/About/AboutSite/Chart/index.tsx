import { PieChart } from 'echarts/charts';
import { LegendComponent, TitleComponent, TooltipComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import React from 'react';
import { connect } from 'react-redux';

import { storeState } from '@/redux/interface';

import { ClassType } from '../index';
import s from './index.scss';
import { useOption } from './useOption';

interface Props {
  classes?: ClassType[];
  artSum?: number;
  mode?: number;
}

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout
]);

const Chart: React.FC<Props> = ({ classes, artSum, mode }) => {
  const option = useOption(classes!, artSum!, mode!);

  return (
    <div className={s.box}>
      <h3>📊文章分布</h3>
      <ReactEChartsCore
        style={{
          height: '400px'
        }}
        echarts={echarts}
        option={option}
        notMerge={true}
        lazyUpdate={true}
        theme='theme_name'
      />
    </div>
  );
};

export default connect((state: storeState) => ({
  mode: state.mode
}))(Chart);
