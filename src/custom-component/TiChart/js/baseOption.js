import { baseLineOption } from "./option/line/baseLineOption";
import { doubleLineOption } from "./option/line/doubleLineOption";
import { sixLineOption } from "./option/line/sixLineOption";
import { basePieOption } from "./option/pie/basePieOption";
import { circlePieOption } from "./option/pie/circlePieOption";
import { rosePieOption } from "./option/pie/rosePieOption";
import { baseBarOption } from "./option/bar/baseBarOption";
import { doubleBarOption } from "./option/bar/doubleBarOption";
import { sixBarOption } from "./option/bar/sixBarOption";
import { bgBarOption } from "./option/bar/bgBarOption";
import { hatBarOption } from "./option/bar/hatBarOption";
import { lineBarOption } from "./option/bar/lineBarOption";
import {complexBarOption} from "./option/bar/complexBarOption"
import {rectBarOption} from "./option/bar/rectBarOption"
function getSize(size) {
    let screenWidth = document.documentElement.clientWidth;
    return (size * screenWidth) / 3840;
}
let commonOption = {
    color: [
        "rgb(255, 162, 11)",
        "rgb(5, 222, 255)",
        "rgb(169, 99, 255)",
        "rgb(63, 229, 142)",
        "rgb(49, 117, 255)",
        "rgb(159, 159, 159)",
    ],
    grid: {
        top: "20%",
        left: "5%",
        bottom: "15%",
        right: "5%",
        containLabel: true,
    },
    legend: {
        show: true,
        icon: "circle",
        orient: "horizontal",
        itemGap: getSize(20),
        itemWidth: getSize(50),
        itemHeight: getSize(28),
        textStyle: {
            color: "#333",
            fontWeight: 700,
            fontSize: getSize(24),
        },
    },
    title: {
        show: false,
        text: "图表标题",
        subtext: "图表子标题",
        textStyle: {
            color: "#333",
            fontWeight: 700,
            fontSize: getSize(24),
        },
        subtextStyle: {
            color: "#aaa",
            fontWeight: 400,
            fontSize: getSize(24),
        },
        left: "10%",
        top: "0%",
        right: "50%",
        bottom: "10%",
    },
};
let axisOption = {
    xAxis: [
        {
            boundaryGap: true,
            inverse: false,
            splitLine: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255, 255, 255,0.8)",
                },
                show: true,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: "rgb(255, 255, 255)",
                fontSize: getSize(24),
                show: true,
                margin: getSize(16),
            },
            name: "",
            nameGap: getSize(30),
            nameTextStyle: {
                color: "rgba(255, 255, 255,0.8)",
            },
        },
    ],
    yAxis: [
        {
            boundaryGap: true,
            inverse: false,
            name: "",
            nameTextStyle: {
                color: "rgb(226, 226, 226)",
                fontSize: getSize(24),
                padding: [0, 0, 0, getSize(-50)],
            },
            nameGap: getSize(18),
            axisLabel: {
                color: "rgba(255, 255, 255)",
                fontSize: getSize(24),
                show: true,
                margin: getSize(16),
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: "rgba(255, 255, 255,0.8)",
                },
            },
            splitLine: {
                lineStyle: {
                    type: "dashed",
                    color: "rgba(255, 255, 255,0.2)",
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
};
export default {
    getRectBarOption(){
      return   rectBarOption
    },
    getComplexBarOption() {
        return complexBarOption
    },
    getLineBarOption(){
        return lineBarOption
    },
    getHatBarOption() {
        return hatBarOption;
    },
    getBgBarOption() {
        return bgBarOption;
    },
    getSixBarOption() {
        return sixBarOption;
    },
    getDoubleBarOption() {
        return doubleBarOption;
    },
    getBaseBarOption() {
        return baseBarOption;
    },

    getRosePieOption() {
        return rosePieOption;
    },
    getBasePieOption() {
        return basePieOption;
    },
    getSixLineOption() {
        return sixLineOption;
    },
    getDoubleLineOption() {
        return doubleLineOption;
    },
    getBaseLineOption() {
        return baseLineOption;
    },
    getAxisOption() {
        let seriesOption = {
            series: [
                {
                    symbol: "emptyCircle",
                    symbolSize: 4,
                    showSymbol: true,
                    smooth: false,
                    areaStyle: {
                        color: "#ccc",
                    },
                    itemStyle: {
                        borderRadius: [getSize(10), getSize(10), getSize(10), getSize(10)],
                    },
                    label: {
                        show: true, //开启显示
                        position: "top", //在上方显示
                        color: "#fff",
                        fontSize: getSize(48),
                        fontWeight: 700,
                    },
                },
            ],
        };
        let option = {
            ...JSON.parse(JSON.stringify(commonOption)),
            ...JSON.parse(JSON.stringify(axisOption)),
            ...JSON.parse(JSON.stringify(seriesOption)),
        };
        return option;
    },
    getBgPictorialBarOption() {
        return {
            ...JSON.parse(JSON.stringify(commonOption)),
            ...JSON.parse(JSON.stringify(axisOption)),
            series: [
                {
                    label: {
                        show: false,
                    },
                },
                {
                    label: {
                        show: true, //开启显示
                        position: "top", //在上方显示
                        color: "#fff",
                        fontSize: getSize(48),
                        fontWeight: 700,
                    },
                },
            ],
        };
    },
    getDoubleOption() {
        return {
            ...JSON.parse(JSON.stringify(commonOption)),
            ...JSON.parse(JSON.stringify(axisOption)),
            series: [
                {
                    symbol: "emptyCircle",
                    symbolSize: 4,
                    showSymbol: true,
                    smooth: false,
                    areaStyle: {
                        color: "#ccc",
                    },
                    itemStyle: {
                        borderRadius: [getSize(10), getSize(10), getSize(10), getSize(10)],
                    },
                    label: {
                        show: true, //开启显示
                        position: "top", //在上方显示
                        color: "#fff",
                        fontSize: getSize(48),
                        fontWeight: 700,
                    },
                },
                {
                    symbol: "emptyCircle",
                    symbolSize: 4,
                    showSymbol: true,
                    smooth: false,
                    areaStyle: {
                        color: "#ccc",
                    },
                    itemStyle: {
                        borderRadius: [getSize(10), getSize(10), getSize(10), getSize(10)],
                    },
                    label: {
                        show: true, //开启显示
                        position: "top", //在上方显示
                        color: "#fff",
                        fontSize: getSize(48),
                        fontWeight: 700,
                    },
                },
            ],
        };
    },
    getSixOption() {
        return {
            ...JSON.parse(JSON.stringify(commonOption)),
            ...JSON.parse(JSON.stringify(axisOption)),
            series: [
                {
                    symbol: "emptyCircle",
                    symbolSize: 4,
                    showSymbol: true,
                    smooth: false,
                    areaStyle: {
                        color: "#ccc",
                    },
                    itemStyle: {
                        borderRadius: [getSize(10), getSize(10), getSize(10), getSize(10)],
                    },
                    label: {
                        show: true, //开启显示
                        position: "top", //在上方显示
                        color: "#fff",
                        fontSize: getSize(48),
                        fontWeight: 700,
                    },
                },
                {
                    symbol: "emptyCircle",
                    symbolSize: 4,
                    showSymbol: true,
                    smooth: false,
                    areaStyle: {
                        color: "#ccc",
                    },
                    itemStyle: {
                        borderRadius: [getSize(10), getSize(10), getSize(10), getSize(10)],
                    },
                    label: {
                        show: true, //开启显示
                        position: "top", //在上方显示
                        color: "#fff",
                        fontSize: getSize(48),
                        fontWeight: 700,
                    },
                },
                {
                    symbol: "emptyCircle",
                    symbolSize: 4,
                    showSymbol: true,
                    smooth: false,
                    areaStyle: {
                        color: "#ccc",
                    },
                    itemStyle: {
                        borderRadius: [getSize(10), getSize(10), getSize(10), getSize(10)],
                    },
                    label: {
                        show: true, //开启显示
                        position: "top", //在上方显示
                        color: "#fff",
                        fontSize: getSize(48),
                        fontWeight: 700,
                    },
                },
                {
                    symbol: "emptyCircle",
                    symbolSize: 4,
                    showSymbol: true,
                    smooth: false,
                    areaStyle: {
                        color: "#ccc",
                    },
                    itemStyle: {
                        borderRadius: [getSize(10), getSize(10), getSize(10), getSize(10)],
                    },
                    label: {
                        show: true, //开启显示
                        position: "top", //在上方显示
                        color: "#fff",
                        fontSize: getSize(48),
                        fontWeight: 700,
                    },
                },
                {
                    symbol: "emptyCircle",
                    symbolSize: 4,
                    showSymbol: true,
                    smooth: false,
                    areaStyle: {
                        color: "#ccc",
                    },
                    itemStyle: {
                        borderRadius: [getSize(10), getSize(10), getSize(10), getSize(10)],
                    },
                    label: {
                        show: true, //开启显示
                        position: "top", //在上方显示
                        color: "#fff",
                        fontSize: getSize(48),
                        fontWeight: 700,
                    },
                },
                {
                    symbol: "emptyCircle",
                    symbolSize: 4,
                    showSymbol: true,
                    smooth: false,
                    areaStyle: {
                        color: "#ccc",
                    },
                    itemStyle: {
                        borderRadius: [getSize(10), getSize(10), getSize(10), getSize(10)],
                    },
                    label: {
                        show: true, //开启显示
                        position: "top", //在上方显示
                        color: "#fff",
                        fontSize: getSize(48),
                        fontWeight: 700,
                    },
                },
            ],
        };
    },
    
    getShaftlessOption() {
        return {};
    },
    getPieOption() {
        return {
            ...JSON.parse(JSON.stringify(commonOption)),
            series: [
                {
                    startAngle: 90,
                    radius: "50%",
                    center: ["50%", "50%"],
                    label: {
                        show: true, //开启显示
                        position: "outside", //在上方显示
                        color: "inherit",
                        fontSize: getSize(48),
                        fontWeight: 700,
                    },
                },
            ],
        };
    },
    getCirclePieOption() {
        return circlePieOption;
    },
};
