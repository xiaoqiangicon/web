import TiAbstractChartType from "../../TiAbstractChartType";
import baseMethods from "../../common";
/**
 * Echarts 横向象形柱图
 * @class TiChartBaseLine
 * @param {Object}options
 */
class TiChartCrossPictorialBar extends TiAbstractChartType {
    constructor(option) {
        super(option);
    }
    /**
     * private
     * @description 创建Echarts
     */
    createChart() {
        var spirit =
            "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC";
        let options = {
            tooltip: {
                trigger: "item",
            },
            xAxis: [
                {
                    // data: ["2018", "2019", "2020"],
                },
            ],
            yAxis: [
                {
                    type: "category",
                    data: ["2018", "2019", "2020"],
                },
            ],
            series: [
                {
                    type: "pictorialBar",
                    // "symbol": 'path://M1.88379 4.22217C1.88379 5.32837 2.31836 6.42627 3.06348 7.20874C3.80762 7.98853 4.85742 8.44434 5.91406 8.44434C6.96973 8.44434 8.01465 7.98853 8.76172 7.20581C9.50879 6.42627 9.94434 5.32568 9.94434 4.22217C9.94434 3.1189 9.50879 2.01538 8.76172 1.2356C8.01465 0.453125 6.9668 0 5.91406 0C4.86035 0 3.80762 0.453125 3.06348 1.2356C2.28027 2.0625 1.8877 3.05811 1.88379 4.22217ZM10.7471 9.85181L1.34375 9.85181C0.448242 9.85181 0 10.321 0 11.2593L0 22.5156C0 23.4539 0.448242 23.9231 1.34375 23.9231L2.68652 23.9231L2.68652 36.5925C2.68652 37.5308 3.13477 38 4.03027 38L8.06055 38C8.95605 38 9.4043 37.5308 9.4043 36.5925L9.4043 23.9204L10.7471 23.9204C11.6436 23.9204 12.0908 23.4512 12.0908 22.5129L12.0908 11.2593C12.0908 10.321 11.6436 9.85181 10.7471 9.85181Z',
                    symbol: spirit,
                    symbolRepeat: "fixed",
                    symbolMargin: "2%",
                    symbolClip: true,
                    symbolSize: baseMethods.getSize(36),
                    symbolPosition: "start",
                    symbolOffset: [baseMethods.getSize(40), 0],
                    symbolBoundingData: 1000,
                    // "data": [
                    //   94,
                    //   166,
                    //   220,
                    //   249,
                    //   262
                    // ],
                    data: [10, 20, 30],
                    label: { 
                        position: ["100%", "20%"] 
                    },
                },
            ],
        };
        this.initChart(options, "getAxisOption");
        let maxX = this.chartObject.getModel().getComponent('xAxis').axis.scale._extent[1]
        options.series[0].symbolBoundingData =maxX
        this.initChart(options, "getAxisOption");
    }
    /**
     * @description 改变图表数据
     * @param {Object} config 配置
     */
    dynamicChart(data) {
        let obj = {
            xAxis: {
                data: data[0],
            },
            series: [
                {
                    data: data[1],
                },
            ],
        };
        this.option.config = baseMethods.assiginObj(this.option.config, obj);
        this.createChart();
    }
    changeChartStyle(style) {
        let convertStyle = {
            color: style.color,
            xAxis: [
                {
                    axisLine: {
                        lineStyle: {
                            color: style.xAxisColor,
                        },
                        show: style.showXAxis,
                    },
                    axisLabel: {
                        color: style.xAxisLabelColor,
                        fontSize: style.xAxisLabelSize,
                        show: style.showXAxisLabel,
                        margin: style.xAxisLabelMargin,
                    },
                    axisTick: {
                        show: style.showXAxisTick,
                    },
                    name: style.xAxisName,
                    nameGap: style.xAxisNameGap,
                    nameTextStyle: {
                        color: style.xAxisNameColor,
                    },
                },
            ],
            yAxis: [
                {
                    axisLine: {
                        lineStyle: {
                            color: style.yAxisColor,
                        },
                        show: style.showYAxis,
                    },
                    axisLabel: {
                        color: style.yAxisLabelColor,
                        fontSize: style.yAxisLabelSize,
                        show: style.showYAxisLabel,
                        margin: style.yAxisLabelMargin,
                    },
                    axisTick: {
                        show: style.showYAxisTick,
                    },
                    name: style.yAxisName,
                    nameGap: style.yAxisNameGap,
                    nameTextStyle: {
                        color: style.yAxisNameColor,
                    },
                },
            ],
            series: [
                {
                    label: {
                        show: style.showLabel,
                        // position: ["96%", "20%"],
                        color: style.labelColor,
                        fontSize: style.labelSize,
                        fontWeight: style.labelWeight,
                    },
                },
            ],
        };
        this.option.styleData = baseMethods.assiginObj(this.option.styleData, convertStyle);

        this.createChart();
    }
}
export default TiChartCrossPictorialBar;
