import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartOptions} from '../shared/base-echart-options';
import {createEchartOptions} from '../shared/create-echart-options';

export const Chart2 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        const myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartOptions({
            ...baseEchartOptions,
            grid: {
                x: px(100),
                y: px(40),
                x2: px(40),
                y2: px(40)
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                splitLine: {show: false},
                axisLabel: {show: false}
            },
            yAxis: {
                type: 'category',
                data: ['城关区公安局', '七里河区公安局', '西固区公安局', '安宁区公安局', '红古区公安局',
                    '永登县公安局', '皋兰县公安局', '榆中县公安局', '新区公安局'],
                axisLabel: {
                    fontSize: px(12),
                    formatter(val) {
                        return val.replace('公安局', '\n公安局');
                    }
                }
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9]
                },
                {
                    name: '2012年',
                    type: 'bar',
                    data: [2, 3, 4, 5, 6, 7, 8, 9, 10]
                }
            ]
        }));
    }, []);
    return (
        <div className="bordered 破获排名">
            <h2>案件破获排名</h2>
            <div ref={divRef} className="chart"/>
            <div className="legend">
                <span className="first"/> 刑事排名
                <span className="second"/> 民事排名
            </div>
        </div>
    );
};