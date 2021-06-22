import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartOptions} from '../shared/base-echart-options';


export const Chart1 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        const myChart = echarts.init(divRef.current);
        myChart.setOption({
           ...baseEchartOptions,
            tooltip: {},
            xAxis: {
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
                axisTick: {show: false},
                axisLabel: {
                    fontSize: px(12),
                    formatter(val) {
                        if (val.length > 2) {
                            const array = val.split('');
                            array.splice(2, 0, '\n');
                            return array.join('');
                        } else {
                            return val;
                        }
                    }
                }
            },
            yAxis: {
                splitLine: {show: false},
                axisLabel: {
                    fontSize: px(12)
                },
                axisLine: {
                    lineStyle: {color: '#083B70'}
                }
            },
            series: [{
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20, 71, 34, 29]
            }]
        });
    }, []);
    return (
        <div className="bordered 管辖统计">
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className="chart">

            </div>
        </div>
    );
};