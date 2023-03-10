import chartBaseOptionMethod from "./TiChart/js/baseOption";
const chartBaseOption = chartBaseOptionMethod.getAxisOption();
const chartBgPictorialBarOption = chartBaseOptionMethod.getBgPictorialBarOption();

function getInitOption(category, type, optionName) {
    let option = chartBaseOptionMethod[optionName]();
    let commonOption = {
        color: option.color.join("]"),
        gridTop: Number(option.grid.top.split("%")[0]),
        gridLeft: Number(option.grid.left.split("%")[0]),
        gridBottom: Number(option.grid.bottom.split("%")[0]),
        gridRight: Number(option.grid.right.split("%")[0]),
        containLabel: option.grid.containLabel,

        showLegend: option.legend.show,
        legendIcon: option.legend.icon,
        legendOrient: option.legend.orient,
        legendItemGap: option.legend.itemGap,
        legendItemWidth: option.legend.itemWidth,
        legendItemHeight: option.legend.itemHeight,
        legendTextColor: option.legend.textStyle.color,
        legendTextFontWeight: option.legend.textStyle.fontWeight,
        legendTextFontSize: option.legend.textStyle.fontSize,

        showTitle: option.title.show,
        titleText: option.title.text,
        titleSubtext: option.title.subtext,
        titleTextColor: option.title.textStyle.color,
        titleTextFontWeight: option.title.textStyle.fontWeight,
        titleTextFontSize: option.title.textStyle.fontSize,
        titleSubtextColor: option.title.subtextStyle.color,
        titleSubtextFontWeight: option.title.subtextStyle.fontWeight,
        titleSubtextFontSize: option.title.subtextStyle.fontSize,
        titleLeft: Number(option.title.left.split("%")[0]),
        titleTop: Number(option.title.top.split("%")[0]),
        titleRight: Number(option.title.right.split("%")[0]),
        titleBottom: Number(option.title.bottom.split("%")[0]),
    };

    let initOption;
    if (category === "pie" || category === "radar") {
        initOption = {
            ...commonOption,
        };
    } else {
        let axisOption = {
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
        };
        initOption = {
            ...axisOption,
            ...commonOption,
        };
    }

    if (category === "line") {
        initOption = {
            ...initOption,
            symbol: option.series.map((item) => {
                return item.symbol;
            }),
            symbolSize: option.series.map((item) => {
                return item.symbolSize;
            }),
            showSymbol: option.series.map((item) => {
                return item.showSymbol;
            }),
            smooth: option.series.map((item) => {
                return item.smooth;
            }),
            areaStyleColor: option.series.map((item) => {
                return item.areaStyle.color;
            }),
            itemStyleColor: option.series.map((item) => {
                return item.itemStyle.color;
            }),
            length: option.series.length,
        };
    }
    if (category === "bar") {
        if (type !== "rectBar")
            initOption = {
                ...initOption,
                itemStyleColor: option.series.map((item) => item.itemStyle?.color),
                borderRadius: option.series.map((item) => item.itemStyle?.borderRadius),
                barWidth: option.series.map((item) => item.barWidth),
            };
        else {
            initOption = {
                ...initOption,
                barWidth: option.series.map((item) => item.barWidth),
            };
        }
    }
    if (category === "scatter") {
        initOption = {
            ...initOption,
            symbolSize: option.series.map((item) => {
                return item.symbolSize;
            }),
            itemStyleColor: option.series.map((item) => {
                return item.itemStyle.color;
            }),
        };
    }
    if(category==='pictorialBar') {
        if(type==='bgPictorialBar'){
            initOption = {
                ...initOption,
                itemStyleColor: option.series[1].itemStyle.color
            };
        }
        else if(['basePictorialBar','crossPictorialBar','sixPictorialBar'].includes(type))
        initOption = {
            ...initOption,
            itemStyleColor: option.series.map((item) => {
                return item.itemStyle.color;
            }),
        };
        else if(type==='bgDoublePictorialBar')
        initOption = {
            ...initOption,
            itemStyleColor: option.series.slice(1).map((item) => {
                return item.itemStyle.color;
            }),
        };
    }
    let diffOption = {};
    if (category === "line" || category === "bar")
        diffOption = {
            showLabel: option.series.map((item) => item.label?.show),
            labelPosition: option.series.map((item) => item.label?.position),
            labelColor: option.series.map((item) => item.label?.color),
            labelSize: option.series.map((item) => item.label?.fontSize),
            labelWeight: option.series.map((item) => item.label?.fontWeight),
        };

        if(category==='pictorialBar'){
            if(type==='bgPictorialBar'){
                diffOption = {
                    showLabel: option.series[1].label.show,
                    labelPosition: option.series[1].label.position,
                    labelColor: option.series[1].label.color,
                    labelSize: option.series[1].label.fontSize,
                    labelWeight: option.series[1].label.fontWeight,
                };
            }
            else if(type==='bgDoublePictorialBar'){
                diffOption={
                    showLabel: option.series.slice(1).map((item) => item.label?.show),
                    labelPosition: option.series.slice(1).map((item) => item.label?.position),
                    labelColor: option.series.slice(1).map((item) => item.label?.color),
                    labelSize: option.series.slice(1).map((item) => item.label?.fontSize),
                    labelWeight: option.series.slice(1).map((item) => item.label?.fontWeight),
                }
            }
            else if(type==='basePictorialBar'|| type==='crossPictorialBar' || type==='trianglePictorialBar'){
                diffOption = {
                    showLabel: option.series[0].label.show,
                    labelPosition: option.series[0].label.position,
                    labelColor: option.series[0].label.color,
                    labelSize: option.series[0].label.fontSize,
                    labelWeight: option.series[0].label.fontWeight,
                };
            }
            else diffOption={}
        }
    if (category === "radar") {
        diffOption = {
            radarCenter: [Number(option.radar.center[0].split("%")[0]), Number(option.radar.center[1].split("%")[0])],
            radarRadius: option.radar.radius.split("%")[0],
            showRadarSplitArea: option.radar.splitArea.show,
            radarSplitAreaAreaStyleColor: option.radar.splitArea.areaStyle.color.join("]"),
            radarAxisLineLineStyleColor: option.radar.axisLine.lineStyle.color,
            radarSplitLineLineStyleType: option.radar.splitLine.lineStyle.type,
            radarSplitLineLineStyleColor: option.radar.splitLine.lineStyle.color.join("]"),
            radarSplitLineLineStyleWidth: option.radar.splitLine.lineStyle.width,
            radarIndicator: option.radar.indicator.map((item) => {
                return {
                    name: item.name,
                    max: item.max,
                    index: item.index,
                };
            }),
        };
    }
    if (category === "pie") {
        let commonPie = {
            showLabel: option.series[0].label.show,
            labelPosition: option.series[0].label.position,
            labelColor: option.series[0].label.color,
            labelSize: option.series[0].label.fontSize,
            labelWeight: option.series[0].label.fontWeight,
            startAngle: option.series[0].startAngle,
            pieCenter: [
                Number(option.series[0].center[0].split("%")[0]),
                Number(option.series[0].center[1].split("%")[0]),
            ],
        };
        if (type === "circlePie" || type === "rosePie") {
            diffOption = {
                ...commonPie,
                radius: [
                    Number(option.series[0].radius[0].split("%")[0]),
                    Number(option.series[0].radius[1].split("%")[0]),
                ],
            };
        } else {
            diffOption = {
                ...commonPie,
                radius: Number(option.series[0].radius.split("%")[0]),
            };
        }
    }
    
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
// ????????????
export const commonStyle = {
    rotate: 0,
    opacity: 1,
};

export const commonAttr = {
    animations: [],
    events: {},
    groupStyle: {}, // ????????????????????? Group ?????????????????????
    isLock: false, // ??????????????????
    collapseName: "style", // ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
    linkage: {
        duration: 0, // ??????????????????
        data: [
            // ????????????
            {
                id: "", // ??????????????? id
                label: "", // ?????????????????????
                event: "", // ????????????
                style: [{ key: "", value: "" }], // ????????????????????????????????????????????????
            },
        ],
    },
};

// ???????????????????????????
const list = [
    // {
    //     title: "??????",
    //     children: [
    //         {
    //             component: "VText",
    //             label: "??????",
    //             propValue: "??????????????????",
    //             icon: "wenben",
    //             request: {
    //                 method: "GET",
    //                 data: [],
    //                 url: "",
    //                 series: false, // ????????????????????????
    //                 time: 1000, // ??????????????????
    //                 paramType: "", // string object array
    //                 requestCount: 0, // ?????????????????????0 ?????????
    //             },
    //             style: {
    //                 width: 200,
    //                 height: 28,
    //                 fontSize: "",
    //                 fontWeight: 400,
    //                 lineHeight: "",
    //                 letterSpacing: 0,
    //                 textAlign: "",
    //                 color: "",
    //             },
    //         },
    //         {
    //             component: "VButton",
    //             label: "??????",
    //             propValue: "??????",
    //             icon: "button",
    //             style: {
    //                 width: 100,
    //                 height: 34,
    //                 borderWidth: 1,
    //                 borderColor: "",
    //                 borderRadius: "",
    //                 fontSize: "",
    //                 fontWeight: 400,
    //                 lineHeight: "",
    //                 letterSpacing: 0,
    //                 textAlign: "",
    //                 color: "",
    //                 backgroundColor: "",
    //             },
    //         },
    //         {
    //             component: "Picture",
    //             label: "??????",
    //             icon: "tupian",
    //             propValue: {
    //                 url: require("@/assets/title.jpg"),
    //                 flip: {
    //                     horizontal: false,
    //                     vertical: false,
    //                 },
    //             },
    //             style: {
    //                 width: 300,
    //                 height: 200,
    //                 borderRadius: "",
    //             },
    //         },
    //         {
    //             component: "RectShape",
    //             label: "??????",
    //             propValue: "&nbsp;",
    //             icon: "juxing",
    //             style: {
    //                 width: 200,
    //                 height: 200,
    //                 fontSize: "",
    //                 fontWeight: 400,
    //                 lineHeight: "",
    //                 letterSpacing: 0,
    //                 textAlign: "center",
    //                 color: "",
    //                 borderColor: "#000",
    //                 borderWidth: 1,
    //                 backgroundColor: "",
    //                 borderStyle: "solid",
    //                 borderRadius: "",
    //                 verticalAlign: "middle",
    //             },
    //         },
    //         {
    //             component: "LineShape",
    //             label: "??????",
    //             propValue: "",
    //             icon: "zhixian",
    //             style: {
    //                 width: 200,
    //                 height: 2,
    //                 backgroundColor: "#000",
    //             },
    //         },
    //         {
    //             component: "CircleShape",
    //             label: "??????",
    //             propValue: "&nbsp;",
    //             icon: "24gl-circle",
    //             style: {
    //                 width: 200,
    //                 height: 200,
    //                 fontSize: "",
    //                 fontWeight: 400,
    //                 lineHeight: "",
    //                 letterSpacing: 0,
    //                 textAlign: "center",
    //                 color: "",
    //                 borderColor: "#000",
    //                 borderWidth: 1,
    //                 backgroundColor: "",
    //                 borderStyle: "solid",
    //                 borderRadius: "",
    //                 verticalAlign: "middle",
    //             },
    //         },
    //         {
    //             component: "SVGStar",
    //             label: "??????",
    //             icon: "kongwujiaoxing",
    //             propValue: "",
    //             style: {
    //                 width: 80,
    //                 height: 80,
    //                 fontSize: "",
    //                 fontWeight: 400,
    //                 lineHeight: "",
    //                 letterSpacing: 0,
    //                 textAlign: "center",
    //                 color: "",
    //                 borderColor: "#000",
    //                 backgroundColor: "rgba(255, 255, 255, 1)",
    //             },
    //         },
    //         {
    //             component: "SVGTriangle",
    //             label: "?????????",
    //             icon: "xingzhuang-sanjiaoxing",
    //             propValue: "",
    //             style: {
    //                 width: 80,
    //                 height: 80,
    //                 fontSize: "",
    //                 fontWeight: 400,
    //                 lineHeight: "",
    //                 letterSpacing: 0,
    //                 textAlign: "center",
    //                 color: "",
    //                 borderColor: "#000",
    //                 backgroundColor: "rgba(255, 255, 255, 1)",
    //             },
    //         },
    //         {
    //             component: "VTable",
    //             label: "??????",
    //             icon: "biaoge",
    //             propValue: {
    //                 data: [
    //                     ["??????1", "??????2", "??????3"],
    //                     ["??????1", "??????2", "??????3"],
    //                 ],
    //                 stripe: true,
    //                 thBold: true,
    //             },
    //             request: {
    //                 method: "GET",
    //                 data: [],
    //                 url: "",
    //                 series: false,
    //                 time: 1000,
    //                 paramType: "", // string object array
    //                 requestCount: 0, // ?????????????????????0 ?????????
    //             },
    //             style: {
    //                 width: 600,
    //                 height: 200,
    //                 fontSize: "",
    //                 fontWeight: 400,
    //                 textAlign: "center",
    //                 color: "",
    //                 backgroundColor: "rgba(255, 255, 255, 1)",
    //             },
    //         },
    {
        title: "??????",
        children: [
            {
                title: "?????????",
                children: [
                    {
                        component: "TiChart",
                        label: "?????????",
                        icon: "biaoge",
                        background: "",
                        propValue: {
                            ...getInitOption("line", "baseLine", "getBaseLineOption"),
                        },
                        type: "baseLine",
                        category: "line",
                        style: {
                            width: 450,
                            height: 190,
                            // fontSize: "",
                            // fontWeight: 400,
                            // textAlign: "center",
                            // color: "",
                            backgroundColor: "rgba(9,15,23,1)",
                        },
                    },
                    {
                        component: "TiChart",
                        label: "????????????",
                        icon: "biaoge",
                        background: "",
                        propValue: {
                            ...getInitOption("line", "doubleLine", "getDoubleLineOption"),
                        },
                        type: "doubleLine",
                        category: "line",
                        style: {
                            width: 450,
                            height: 190,
                            // fontSize: "",
                            // fontWeight: 400,
                            // textAlign: "center",
                            // color: "",
                            backgroundColor: "rgba(9,15,23,1)",
                        },
                    },
                    {
                        component: "TiChart",
                        label: "????????????",
                        icon: "biaoge",
                        background: "",
                        propValue: {
                            ...getInitOption("line", "sixLine", "getSixLineOption"),
                        },
                        type: "sixLine",
                        category: "line",
                        style: {
                            width: 450,
                            height: 190,
                            // fontSize: "",
                            // fontWeight: 400,
                            // textAlign: "center",
                            // color: "",
                            backgroundColor: "rgba(9,15,23,1)",
                        },
                    },
                ],
            },
            {
                title: "??????",
                children: [
                    {
                        component: "TiChart",
                        label: "??????",
                        icon: "biaoge",
                        background: "",
                        propValue: {
                            ...getInitOption("pie", "basePie", "getBasePieOption"),
                        },
                        type: "basePie",
                        category: "pie",
                        style: {
                            width: 450,
                            height: 190,
                            // fontSize: "",
                            // fontWeight: 400,
                            // textAlign: "center",
                            // color: "",
                            backgroundColor: "rgba(9,15,23,1)",
                        },
                    },
                    {
                        component: "TiChart",
                        label: "??????????????????",
                        icon: "biaoge",
                        background: "",
                        propValue: {
                            ...getInitOption("pie", "rosePie", "getRosePieOption"),
                        },
                        type: "rosePie",
                        category: "pie",
                        style: {
                            width: 450,
                            height: 190,
                            // fontSize: "",
                            // fontWeight: 400,
                            // textAlign: "center",
                            // color: "",
                            backgroundColor: "rgba(9,15,23,1)",
                        },
                    },
                    {
                        component: "TiChart",
                        label: "????????????",
                        icon: "biaoge",
                        background: "",
                        propValue: {
                            ...getInitOption("pie", "circlePie", "getCirclePieOption"),
                        },
                        type: "circlePie",
                        category: "pie",
                        style: {
                            width: 450,
                            height: 190,
                            // fontSize: "",
                            // fontWeight: 400,
                            // textAlign: "center",
                            // color: "",
                            backgroundColor: "rgba(9,15,23,1)",
                        },
                    },
                    {
                        component: "TiChart",
                        label: "3D??????",
                        icon: "biaoge",
                        background: "",
                        propValue: {
                            ...getInitOption("pie", "tdPie", "getTdPieOption"),
                        },
                        type: "tdPie",
                        category: "pie",
                        style: {
                            width: 450,
                            height: 190,
                            // fontSize: "",
                            // fontWeight: 400,
                            // textAlign: "center",
                            // color: "",
                            backgroundColor: "rgba(9,15,23,1)",
                        },
                    },
                ],
            },
            {
                title: "?????????",
                children: [
                    {
                        component: "TiChart",
                        label: "?????????",
                        icon: "biaoge",
                        background: "",
                        propValue: {
                            ...getInitOption("bar", "baseBar", "getBaseBarOption"),
                        },
                        type: "baseBar",
                        category: "bar",
                        style: {
                            width: 450,
                            height: 190,
                            // fontSize: "",
                            // fontWeight: 400,
                            // textAlign: "center",
                            // color: "",
                            backgroundColor: "rgba(9,15,23,1)",
                        },
                    },
                    {
                        component: "TiChart",
                        label: "????????????",
                        icon: "biaoge",
                        background: "",
                        propValue: {
                            ...getInitOption("bar", "doubleBar", "getDoubleBarOption"),
                        },
                        type: "doubleBar",
                        category: "bar",
                        style: {
                            width: 450,
                            height: 190,
                            // fontSize: "",
                            // fontWeight: 400,
                            // textAlign: "center",
                            // color: "",
                            backgroundColor: "rgba(9,15,23,1)",
                        },
                    },
                    {
                        component: "TiChart",
                        label: "????????????",
                        icon: "biaoge",
                        background: "",
                        propValue: {
                            ...getInitOption("bar", "sixBar", "getSixBarOption"),
                        },
                        type: "sixBar",
                        category: "bar",
                        style: {
                            width: 450,
                            height: 190,
                            // fontSize: "",
                            // fontWeight: 400,
                            // textAlign: "center",
                            // color: "",
                            backgroundColor: "rgba(9,15,23,1)",
                        },
                    },
                    {
                        component: "TiChart",
                        label: "??????????????????",
                        icon: "biaoge",
                        propValue: {
                            ...getInitOption("bar", "bgBar", "getBgBarOption"),
                        },
                        type: "bgBar",
                        category: "bar",
                        style: {
                            width: 450,
                            height: 190,
                            // fontSize: "",
                            // fontWeight: 400,
                            // textAlign: "center",
                            // color: "",
                            backgroundColor: "rgba(9,15,23,1)",
                        },
                    },
                    {
                        component: "TiChart",
                        label: "??????????????????",
                        icon: "biaoge",
                        propValue: {
                            ...getInitOption("bar", "hatBar", "getHatBarOption"),
                        },
                        type: "hatBar",
                        category: "bar",
                        style: {
                            width: 450,
                            height: 190,
                            // fontSize: "",
                            // fontWeight: 400,
                            // textAlign: "center",
                            // color: "",
                            backgroundColor: "rgba(9,15,23,1)",
                        },
                    },
                    {
                        component: "TiChart",
                        label: "?????????",
                        icon: "biaoge",
                        propValue: {
                            ...getInitOption("bar", "lineBar", "getLineBarOption"),
                        },
                        type: "lineBar",
                        category: "bar",
                        style: {
                            width: 450,
                            height: 190,
                            // fontSize: "",
                            // fontWeight: 400,
                            // textAlign: "center",
                            // color: "",
                            backgroundColor: "rgba(9,15,23,1)",
                        },
                    },
                    {
                        component: "TiChart",
                        label: "???????????????",
                        icon: "biaoge",
                        propValue: {
                            ...getInitOption("bar", "complexBar", "getComplexBarOption"),
                        },
                        type: "complexBar",
                        category: "bar",
                        style: {
                            width: 450,
                            height: 190,
                            // fontSize: "",
                            // fontWeight: 400,
                            // textAlign: "center",
                            // color: "",
                            backgroundColor: "rgba(9,15,23,1)",
                        },
                    },
                    {
                        component: "TiChart",
                        label: "??????????????????",
                        icon: "biaoge",
                        propValue: {
                            ...getInitOption("bar", "rectBar", "getRectBarOption"),
                        },
                        type: "rectBar",
                        category: "bar",
                        style: {
                            width: 450,
                            height: 190,
                            // fontSize: "",
                            // fontWeight: 400,
                            // textAlign: "center",
                            // color: "",
                            backgroundColor: "rgba(9,15,23,1)",
                        },
                    },
                ],
            },
            {
                title: "?????????",
                children: [
                    {
                        component: "TiChart",
                        background: "",
                        label: "?????????",
                        icon: "biaoge",
                        propValue: {
                            ...getInitOption("scatter", "baseScatter", "getBaseScatterOption"),
                        },
                        type: "baseScatter",
                        category: "scatter",
                        style: {
                            width: 450,
                            height: 190,
                            // fontSize: "",
                            // fontWeight: 400,
                            // textAlign: "center",
                            // color: "",
                            backgroundColor: "rgba(9,15,23,1)",
                        },
                    },
                ],
            },
            {
                title: "?????????",
                children: [
                    {
                        component: "TiChart",
                        background: "",
                        label: "?????????",
                        icon: "biaoge",
                        propValue: {
                            ...getInitOption("radar", "triangleRadar", "getTriangleRadarOption"),
                        },
                        type: "triangleRadar",
                        category: "radar",
                        style: {
                            width: 450,
                            height: 190,
                            // fontSize: "",
                            // fontWeight: 400,
                            // textAlign: "center",
                            // color: "",
                            backgroundColor: "rgba(9,15,23,1)",
                        },
                    },
                ],
            },
            {
                title: "????????????",
                children: [
                    {
                        component: "TiChart",
                        background: "",
                        label: "??????????????????",
                        icon: "biaoge",
                        propValue: {
                            ...getInitOption("pictorialBar", "basePictorialBar", "getBasePictorialBarOption"),
                        },
                        type: "basePictorialBar",
                        category: "pictorialBar",
                        style: {
                            width: 450,
                            height: 190,
                            // fontSize: "",
                            // fontWeight: 400,
                            // textAlign: "center",
                            // color: "",
                            backgroundColor: "rgba(9,15,23,1)",
                        },
                    },
                    {
                        component: "TiChart",
                        background: "",
                        label: "?????????????????????",
                        icon: "biaoge",
                        propValue: {
                            ...getInitOption("pictorialBar", "bgPictorialBar", "getBgPictorialBarOption"),
                        },
                        type: "bgPictorialBar",
                        category: "pictorialBar",
                        style: {
                            width: 450,
                            height: 190,
                            // fontSize: "",
                            // fontWeight: 400,
                            // textAlign: "center",
                            // color: "",
                            backgroundColor: "rgba(9,15,23,1)",
                        },
                    },
                    {
                        component: "TiChart",
                        background: "",
                        label: "???????????????",
                        icon: "biaoge",
                        propValue: {
                            ...getInitOption("pictorialBar", "bgDoublePictorialBar", "getBgDoublePictorialBarOption"),
                        },
                        type: "bgDoublePictorialBar",
                        category: "pictorialBar",
                        style: {
                            width: 450,
                            height: 190,
                            // fontSize: "",
                            // fontWeight: 400,
                            // textAlign: "center",
                            // color: "",
                            backgroundColor: "rgba(9,15,23,1)",
                        },
                    },
                    {
                        component: "TiChart",
                        background: "",
                        label: "???????????????",
                        icon: "biaoge",
                        propValue: {
                            ...getInitOption("pictorialBar", "sixPictorialBar", "getSixPictorialBarOption"),
                        },
                        type: "sixPictorialBar",
                        category: "pictorialBar",
                        style: {
                            width: 450,
                            height: 190,
                            // fontSize: "",
                            // fontWeight: 400,
                            // textAlign: "center",
                            // color: "",
                            backgroundColor: "rgba(9,15,23,1)",
                        },
                    },
                    {
                        component: "TiChart",
                        background: "",
                        label: "??????????????????",
                        icon: "biaoge",
                        propValue: {
                            ...getInitOption("pictorialBar", "crossPictorialBar", "getCrossPictorialBarOption"),
                        },
                        type: "crossPictorialBar",
                        category: "pictorialBar",
                        style: {
                            width: 450,
                            height: 190,
                            // fontSize: "",
                            // fontWeight: 400,
                            // textAlign: "center",
                            // color: "",
                            backgroundColor: "rgba(9,15,23,1)",
                        },
                    },
                    {
                        component: "TiChart",
                        background: "",
                        label: "?????????????????????",
                        icon: "biaoge",
                        propValue: {
                            ...getInitOption("pictorialBar", "trianglePictorialBar", "getTrianglePictorialBarOption"),
                        },
                        type: "trianglePictorialBar",
                        category: "pictorialBar",
                        style: {
                            width: 450,
                            height: 190,
                            // fontSize: "",
                            // fontWeight: 400,
                            // textAlign: "center",
                            // color: "",
                            backgroundColor: "rgba(9,15,23,1)",
                        },
                    },
                ],
            },
        ],
    },
];

for (let i = 0, len = list.length; i < len; i++) {
    if (list[i].title === "??????") {
        list[i].children.forEach((item) => {
            item.children = item.children.map((itm) => {
                itm.style = { ...commonStyle, ...itm.style };
                // itm.img=require('../assets/img/edit/'+itm.category+'-'+itm.type)
                return {
                    ...itm,
                    ...commonAttr,
                };
            });
        });
    }
    // const item = list[i]
    else
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
