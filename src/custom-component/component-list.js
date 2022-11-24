import chartBaseOptionMethod from "./TiChart/js/baseOption";
const chartBaseOption = chartBaseOptionMethod.getAxisOption();
const chartBgPictorialBarOption = chartBaseOptionMethod.getBgPictorialBarOption();

function getInitOption(category, type, optionName) {
    let option = chartBaseOptionMethod[optionName]();
    let initOption;
    if (category === "pie") {
        initOption = {
            color: option.color.join(']'),
        };
    } else
        initOption = {
            xAxisColor: option.xAxis[0].axisLine.lineStyle.color,
            showXAxis: option.xAxis[0].axisLine.show,
            showXAxisLabel: option.xAxis[0].axisLabel.show,
            xAxisLabelColor: option.xAxis[0].axisLabel.color,
            xAxisLabelSize: option.xAxis[0].axisLabel.fontSize,
            xAxisLabelMargin: option.xAxis[0].axisLabel.margin,
            showXAxisTick: option.xAxis[0].axisTick.show,
            xAxisNameGap: option.xAxis[0].nameGap,
            xAxisName: option.xAxis[0].name,
            xAxisNameColor: option.xAxis[0].nameTextStyle.color,
            xAxisBoundaryGap: option.xAxis[0].boundaryGap,
            xAxisInverse: option.xAxis[0].inverse,

            yAxisColor: option.yAxis[0].axisLine.lineStyle.color,
            showYAxis: option.yAxis[0].axisLine.show,
            showYAxisLabel: option.yAxis[0].axisLabel.show,
            yAxisLabelColor: option.yAxis[0].axisLabel.color,
            yAxisLabelSize: option.yAxis[0].axisLabel.fontSize,
            yAxisLabelMargin: option.yAxis[0].axisLabel.margin,
            showYAxisTick: option.yAxis[0].axisTick.show,
            yAxisNameGap: option.yAxis[0].nameGap,
            yAxisName: option.yAxis[0].name,
            yAxisNameColor: option.yAxis[0].nameTextStyle.color,
            yAxisBoundaryGap: option.yAxis[0].boundaryGap,
            yAxisInverse: option.yAxis[0].inverse,

            color: "#fff",
        };
    if (category === "line") {
        initOption = {
            ...initOption,
            symbol: option.series[0].symbol,
            symbolSize: option.series[0].symbolSize,
            showSymbol: option.series[0].showSymbol,
            smooth: option.series[0].smooth,
            areaStyleColor: option.series[0].areaStyle.color,
        };
    }
    if (category === "bar") {
        initOption = {
            ...initOption,
            borderRadius: option.series.map(item=>item.itemStyle?.borderRadius),
        };
    }
    if (["doubleLine",'sixLine'].includes(type)) {
        initOption = {
            ...initOption,
            symbol: option.series.map(item=>{return  item.symbol}),
            symbolSize: option.series.map(item=>{return  item.symbolSize}),
            showSymbol: option.series.map(item=>{return  item.showSymbol}),
            smooth: option.series.map(item=>{return  item.smooth}),
            areaStyleColor: option.series.map(item=>{return  item.areaStyle.color}),
            length: option.series.length,
        };
    }
    let diffOption ={}
    // if(category!=='pie')
   if(type!=='bgBar') diffOption = {
        showLabel: option.series[0].label.show,
        labelPosition: option.series[0].label.position,
        labelColor: option.series[0].label.color,
        labelSize: option.series[0].label.fontSize,
        labelWeight: option.series[0].label.fontWeight,
    };
    else diffOption = {
        showLabel: option.series[2].label.show,
        labelPosition: option.series[2].label.position,
        labelColor: option.series[2].label.color,
        labelSize: option.series[2].label.fontSize,
        labelWeight: option.series[2].label.fontWeight,
    };
    if(category==='pie'){
        
        if(type==='circlePie'){
            diffOption={
                ...diffOption,
                radius: [Number(option.series[0].radius[0].split("%")[0]),Number(option.series[0].radius[1].split("%")[0])],
                startAngle:option.series[0].startAngle,
            }
        }
        else{
            diffOption={
                ...diffOption,
                radius: Number(option.series[0].radius.split("%")[0]),
                startAngle:option.series[0].startAngle,
            }
        }
    }
    if (optionName === "getBgPictorialBarOption")
        diffOption = {
            showLabel: option.series[1].label.show,
            labelPosition: option.series[1].label.position,
            labelColor: option.series[1].label.color,
            labelSize: option.series[1].label.fontSize,
            labelWeight: option.series[1].label.fontWeight,
        };
    return {
        ...initOption,
        ...diffOption,
    };
}
const chartCommonStyle = {
    xAxisColor: chartBaseOption.xAxis[0].axisLine.lineStyle.color,
    showXAxis: chartBaseOption.xAxis[0].axisLine.show,
    showXAxisLabel: chartBaseOption.xAxis[0].axisLabel.show,
    xAxisLabelColor: chartBaseOption.xAxis[0].axisLabel.color,
    xAxisLabelSize: chartBaseOption.xAxis[0].axisLabel.fontSize,
    xAxisLabelMargin: chartBaseOption.xAxis[0].axisLabel.margin,
    showXAxisTick: chartBaseOption.xAxis[0].axisTick.show,
    xAxisNameGap: chartBaseOption.xAxis[0].nameGap,
    xAxisName: chartBaseOption.xAxis[0].name,
    xAxisNameColor: chartBaseOption.xAxis[0].nameTextStyle.color,

    yAxisColor: chartBaseOption.yAxis[0].axisLine.lineStyle.color,
    showYAxis: chartBaseOption.yAxis[0].axisLine.show,
    showYAxisLabel: chartBaseOption.yAxis[0].axisLabel.show,
    yAxisLabelColor: chartBaseOption.yAxis[0].axisLabel.color,
    yAxisLabelSize: chartBaseOption.yAxis[0].axisLabel.fontSize,
    yAxisLabelMargin: chartBaseOption.yAxis[0].axisLabel.margin,
    showYAxisTick: chartBaseOption.yAxis[0].axisTick.show,
    yAxisNameGap: chartBaseOption.yAxis[0].nameGap,
    yAxisName: chartBaseOption.yAxis[0].name,
    yAxisNameColor: chartBaseOption.yAxis[0].nameTextStyle.color,

    color: "#fff",
    showLabel: chartBaseOption.series[0].label.show,
    labelPosition: chartBaseOption.series[0].label.position,
    labelColor: chartBaseOption.series[0].label.color,
    labelSize: chartBaseOption.series[0].label.fontSize,
    labelWeight: chartBaseOption.series[0].label.fontWeight,
};
// 公共样式
export const commonStyle = {
    rotate: 0,
    opacity: 1,
};

export const commonAttr = {
    animations: [],
    events: {},
    groupStyle: {}, // 当一个组件成为 Group 的子组件时使用
    isLock: false, // 是否锁定组件
    collapseName: "style", // 编辑组件时记录当前使用的是哪个折叠面板，再次回来时恢复上次打开的折叠面板，优化用户体验
    linkage: {
        duration: 0, // 过渡持续时间
        data: [
            // 组件联动
            {
                id: "", // 联动的组件 id
                label: "", // 联动的组件名称
                event: "", // 监听事件
                style: [{ key: "", value: "" }], // 监听的事件触发时，需要改变的属性
            },
        ],
    },
};

// 编辑器左侧组件列表
const list = [
    {
        title: "基础",
        children: [
            {
                component: "VText",
                label: "文字",
                propValue: "双击编辑文字",
                icon: "wenben",
                request: {
                    method: "GET",
                    data: [],
                    url: "",
                    series: false, // 是否定时发送请求
                    time: 1000, // 定时更新时间
                    paramType: "", // string object array
                    requestCount: 0, // 请求次数限制，0 为无限
                },
                style: {
                    width: 200,
                    height: 28,
                    fontSize: "",
                    fontWeight: 400,
                    lineHeight: "",
                    letterSpacing: 0,
                    textAlign: "",
                    color: "",
                },
            },
            {
                component: "VButton",
                label: "按钮",
                propValue: "按钮",
                icon: "button",
                style: {
                    width: 100,
                    height: 34,
                    borderWidth: 1,
                    borderColor: "",
                    borderRadius: "",
                    fontSize: "",
                    fontWeight: 400,
                    lineHeight: "",
                    letterSpacing: 0,
                    textAlign: "",
                    color: "",
                    backgroundColor: "",
                },
            },
            {
                component: "Picture",
                label: "图片",
                icon: "tupian",
                propValue: {
                    url: require("@/assets/title.jpg"),
                    flip: {
                        horizontal: false,
                        vertical: false,
                    },
                },
                style: {
                    width: 300,
                    height: 200,
                    borderRadius: "",
                },
            },
            {
                component: "RectShape",
                label: "矩形",
                propValue: "&nbsp;",
                icon: "juxing",
                style: {
                    width: 200,
                    height: 200,
                    fontSize: "",
                    fontWeight: 400,
                    lineHeight: "",
                    letterSpacing: 0,
                    textAlign: "center",
                    color: "",
                    borderColor: "#000",
                    borderWidth: 1,
                    backgroundColor: "",
                    borderStyle: "solid",
                    borderRadius: "",
                    verticalAlign: "middle",
                },
            },
            {
                component: "LineShape",
                label: "直线",
                propValue: "",
                icon: "zhixian",
                style: {
                    width: 200,
                    height: 2,
                    backgroundColor: "#000",
                },
            },
            {
                component: "CircleShape",
                label: "圆形",
                propValue: "&nbsp;",
                icon: "24gl-circle",
                style: {
                    width: 200,
                    height: 200,
                    fontSize: "",
                    fontWeight: 400,
                    lineHeight: "",
                    letterSpacing: 0,
                    textAlign: "center",
                    color: "",
                    borderColor: "#000",
                    borderWidth: 1,
                    backgroundColor: "",
                    borderStyle: "solid",
                    borderRadius: "",
                    verticalAlign: "middle",
                },
            },
            {
                component: "SVGStar",
                label: "星形",
                icon: "kongwujiaoxing",
                propValue: "",
                style: {
                    width: 80,
                    height: 80,
                    fontSize: "",
                    fontWeight: 400,
                    lineHeight: "",
                    letterSpacing: 0,
                    textAlign: "center",
                    color: "",
                    borderColor: "#000",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                },
            },
            {
                component: "SVGTriangle",
                label: "三角形",
                icon: "xingzhuang-sanjiaoxing",
                propValue: "",
                style: {
                    width: 80,
                    height: 80,
                    fontSize: "",
                    fontWeight: 400,
                    lineHeight: "",
                    letterSpacing: 0,
                    textAlign: "center",
                    color: "",
                    borderColor: "#000",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                },
            },
            {
                component: "VTable",
                label: "表格",
                icon: "biaoge",
                propValue: {
                    data: [
                        ["表头1", "表头2", "表头3"],
                        ["内容1", "内容2", "内容3"],
                    ],
                    stripe: true,
                    thBold: true,
                },
                request: {
                    method: "GET",
                    data: [],
                    url: "",
                    series: false,
                    time: 1000,
                    paramType: "", // string object array
                    requestCount: 0, // 请求次数限制，0 为无限
                },
                style: {
                    width: 600,
                    height: 200,
                    fontSize: "",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                },
            },
            {
                component: "TiChart",
                label: "折线图",
                icon: "biaoge",
                propValue: {
                    ...getInitOption("line", "", "getAxisOption"),
                },
                type: "baseLine",
                category: "line",
                style: {
                    width: 600,
                    height: 200,
                    fontSize: "",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "",
                    backgroundColor: "rgba(0, 255, 255, 1)",
                },
            },
            {
                component: "TiChart",
                label: "柱状图",
                icon: "biaoge",
                propValue: {
                    ...getInitOption("bar", "", "getAxisOption"),
                },
                type: "baseBar",
                category: "bar",
                style: {
                    width: 600,
                    height: 200,
                    fontSize: "",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "",
                    backgroundColor: "rgba(0, 255, 255, 1)",
                },
            },
            {
                component: "TiChart",
                label: "饼图",
                icon: "biaoge",
                propValue: {
                    ...getInitOption("pie", "", "getPieOption"),
                },
                type: "basePie",
                category: "pie",
                style: {
                    width: 600,
                    height: 200,
                    fontSize: "",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "",
                    backgroundColor: "rgba(0, 255, 255, 1)",
                },
            },
            {
                component: "TiChart",
                label: "散点图",
                icon: "biaoge",
                propValue: {
                    ...chartCommonStyle,
                },
                type: "baseScatter",
                category: "scatter",
                style: {
                    width: 600,
                    height: 200,
                    fontSize: "",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "",
                    backgroundColor: "rgba(0, 255, 255, 1)",
                },
            },
            {
                component: "TiChart",
                label: "象形柱图",
                icon: "biaoge",
                propValue: {
                    ...getInitOption("aaa", "", "getAxisOption"),
                },
                type: "basePictorialBar",
                category: "pictorialBar",
                style: {
                    width: 600,
                    height: 200,
                    fontSize: "",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "",
                    backgroundColor: "rgba(0, 255, 255, 1)",
                },
            },
            {
                component: "TiChart",
                label: "象形柱图",
                icon: "biaoge",
                propValue: {
                    ...getInitOption("aaa", "", "getBgPictorialBarOption"),
                },
                type: "bgPictorialBar",
                category: "pictorialBar",
                style: {
                    width: 600,
                    height: 200,
                    fontSize: "",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "",
                    backgroundColor: "rgba(0, 0, 0, 1)",
                },
            },
            {
                component: "TiChart",
                label: "象形柱图",
                icon: "biaoge",
                propValue: {
                    ...chartCommonStyle,
                },
                type: "crossPictorialBar",
                category: "pictorialBar",
                style: {
                    width: 600,
                    height: 200,
                    fontSize: "",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "",
                    backgroundColor: "rgba(0, 0, 0, 1)",
                },
            },
        ],
    },
    {
        title: "图表",
        children: [
            {
                component: "TiChart",
                label: "双折线图",
                icon: "biaoge",
                propValue: {
                    ...getInitOption("", "doubleLine", "getDoubleOption"),
                },
                type: "doubleLine",
                category: "line",
                style: {
                    width: 600,
                    height: 200,
                    fontSize: "",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "",
                    backgroundColor: "rgba(0, 255, 255, 1)",
                },
            },
            {
                component: "TiChart",
                label: "复杂柱状图",
                icon: "biaoge",
                propValue: {
                    ...getInitOption("", "complexBar", "getComplexBarOption"),
                },
                type: "complexBar",
                category: "bar",
                style: {
                    width: 600,
                    height: 200,
                    fontSize: "",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "",
                    backgroundColor: "rgba(0, 0, 0, 1)",
                },
            },
            {
                component: "TiChart",
                label: "复杂柱状图",
                icon: "biaoge",
                propValue: {
                    ...getInitOption("", "triangleBar", "getComplexBarOption"),
                },
                type: "triangleBar",
                category: "bar",
                style: {
                    width: 600,
                    height: 200,
                    fontSize: "",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "",
                    backgroundColor: "rgba(0, 0, 0, 1)",
                },
            },
            {
                component: "TiChart",
                label: "环形饼图",
                icon: "biaoge",
                propValue: {
                    ...getInitOption("pie", "circlePie", "getCirclePieOption"),
                },
                type: "circlePie",
                category: "pie",
                style: {
                    width: 600,
                    height: 200,
                    fontSize: "",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "",
                    backgroundColor: "rgba(0, 255, 255, 1)",
                },
            },
            {
                component: "TiChart",
                label: "戴帽子柱状图",
                icon: "biaoge",
                propValue: {
                    ...getInitOption("bar", "", "getAxisOption"),
                },
                type: "hatBar",
                category: "bar",
                style: {
                    width: 600,
                    height: 200,
                    fontSize: "",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "",
                    backgroundColor: "rgba(0, 0, 0, 1)",
                },
            },
            {
                component: "TiChart",
                label: "饼图",
                icon: "biaoge",
                propValue: {
                    ...getInitOption("pie", "", "getPieOption"),
                },
                type: "3DPie",
                category: "pie",
                style: {
                    width: 600,
                    height: 200,
                    fontSize: "",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "",
                    backgroundColor: "rgba(0, 255, 255, 1)",
                },
            },
            {
                component: "TiChart",
                label: "饼图",
                icon: "biaoge",
                propValue: {
                    // ...getInitOption("pie", "", "getPieOption"),
                    ...chartCommonStyle,
                },
                type: "triangleRadar",
                category: "radar",
                style: {
                    width: 600,
                    height: 200,
                    fontSize: "",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "",
                    backgroundColor: "rgba(0, 255, 255, 1)",
                },
            },
            {
                component: "TiChart",
                label: "南丁格尔饼图",
                icon: "biaoge",
                propValue: {
                    ...getInitOption("pie", "circlePie", "getCirclePieOption"),
                },
                type: "rosePie",
                category: "pie",
                style: {
                    width: 600,
                    height: 200,
                    fontSize: "",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "",
                    backgroundColor: "rgba(0, 255, 255, 1)",
                },
            },
            {
                component: "TiChart",
                label: "六折线图",
                icon: "biaoge",
                propValue: {
                    ...getInitOption("", "sixLine", "getSixOption"),
                },
                type: "sixLine",
                category: "line",
                style: {
                    width: 600,
                    height: 200,
                    fontSize: "",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "",
                    backgroundColor: "rgba(0, 255, 255, 1)",
                },
            },
            {
                component: "TiChart",
                label: "双柱壮图",
                icon: "biaoge",
                propValue: {
                    ...getInitOption("bar", "doubleBar", "getDoubleOption"),
                },
                type: "doubleBar",
                category: "bar",
                style: {
                    width: 600,
                    height: 200,
                    fontSize: "",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "",
                    backgroundColor: "rgba(0, 255, 255, 1)",
                },
            },
            {
                component: "TiChart",
                label: "六柱壮图",
                icon: "biaoge",
                propValue: {
                    ...getInitOption("bar", "sixBar", "getSixOption"),
                },
                type: "sixBar",
                category: "bar",
                style: {
                    width: 600,
                    height: 200,
                    fontSize: "",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "",
                    backgroundColor: "rgba(0, 255, 255, 1)",
                },
            },
            {
                component: "TiChart",
                label: "条形图",
                icon: "biaoge",
                propValue: {
                    ...getInitOption("bar", "sixBar", "getSixOption"),
                },
                type: "lineBar",
                category: "bar",
                style: {
                    width: 600,
                    height: 200,
                    fontSize: "",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "",
                    backgroundColor: "rgba(0, 255, 255, 1)",
                },
            },
            {
                component: "TiChart",
                label: "条形图",
                icon: "biaoge",
                propValue: {
                    ...getInitOption("aaa", "", "getBgPictorialBarOption"),
                },
                type: "bgDoublePictorialBar",
                category: "pictorialBar",
                style: {
                    width: 600,
                    height: 200,
                    fontSize: "",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "",
                    backgroundColor: "rgba(0, 255, 255, 1)",
                },
            },
            {
                component: "TiChart",
                label: "带背景柱状图",
                icon: "biaoge",
                propValue: {
                    ...getInitOption("bar", "bgBar", "getBgBarOption"),
                },
                type: "bgBar",
                category: "bar",
                style: {
                    width: 600,
                    height: 200,
                    fontSize: "",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "",
                    backgroundColor: "rgba(0, 255, 255, 1)",
                },
            },
            {
                component: "TiChart",
                label: "长方体柱状图",
                icon: "biaoge",
                propValue: {
                    ...getInitOption("bar", "bgBar", "getBgBarOption"),
                },
                type: "rectBar",
                category: "bar",
                style: {
                    width: 600,
                    height: 200,
                    fontSize: "",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "",
                    backgroundColor: "rgba(0, 255, 255, 1)",
                },
            },
            {
                component: "TiChart",
                label: "六象形柱图",
                icon: "biaoge",
                propValue: {
                    ...getInitOption("pictorialBar", "sixPictorialBar", "getSixOption"),
                },
                type: "sixPictorialBar",
                category: "pictorialBar",
                style: {
                    width: 600,
                    height: 200,
                    fontSize: "",
                    fontWeight: 400,
                    textAlign: "center",
                    color: "",
                    backgroundColor: "rgba(0, 255, 255, 1)",
                },
            },
        ],
    },
];

for (let i = 0, len = list.length; i < len; i++) {
    // const item = list[i]
    list[i].children = list[i].children.map((item) => {
        item.style = { ...commonStyle, ...item.style };
        return {
            ...commonAttr,
            ...item,
        };
    });
    // item.style = { ...commonStyle, ...item.style }
    // list[i] = { ...commonAttr, ...item }
}
export default list;
