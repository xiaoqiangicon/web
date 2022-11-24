<template>
    <div class="attr-list">
        <CommonAttr></CommonAttr>
        <el-collapse v-model="activeName" accordion @change="onChange">
            <template v-if="['line', 'bar'].includes(curComponent.category)">
                <el-collapse-item title="x轴通用样式" name="xStyle">
                    <el-form>
                        <el-form-item label="x轴颜色">
                            <el-color-picker v-model="curComponent.propValue.xAxisColor" show-alpha></el-color-picker>
                        </el-form-item>
                        <el-form-item label="轴线">
                            <el-switch v-model="curComponent.propValue.showXAxis"> </el-switch>
                        </el-form-item>
                        <el-form-item label="轴线刻度">
                            <el-switch v-model="curComponent.propValue.showXAxisTick"> </el-switch>
                        </el-form-item>
                        <el-form-item label="留白">
                            <el-switch v-model="curComponent.propValue.xAxisBoundaryGap"> </el-switch>
                        </el-form-item>
                        <el-form-item label="反向">
                            <el-switch v-model="curComponent.propValue.xAxisInverse"> </el-switch>
                        </el-form-item>

                        <el-form-item label="标签">
                            <el-switch v-model="curComponent.propValue.showXAxisLabel"> </el-switch>
                        </el-form-item>
                        <el-form-item label="标签颜色">
                            <el-color-picker
                                v-model="curComponent.propValue.xAxisLabelColor"
                                show-alpha
                            ></el-color-picker>
                        </el-form-item>
                        <el-form-item label="标签大小">
                            <el-input v-model.number="curComponent.propValue.xAxisLabelSize" type="number" />
                        </el-form-item>
                        <el-form-item label="标签与轴线之间的距离">
                            <el-input v-model.number="curComponent.propValue.xAxisLabelMargin" type="number" />
                        </el-form-item>
                        <el-form-item label="坐标轴名称">
                            <el-input v-model="curComponent.propValue.xAxisName" />
                        </el-form-item>
                        <el-form-item label="坐标轴名称颜色">
                            <el-color-picker
                                v-model="curComponent.propValue.xAxisNameColor"
                                show-alpha
                            ></el-color-picker>
                        </el-form-item>
                        <el-form-item label="坐标轴名称与轴线之间的距离">
                            <el-input v-model.number="curComponent.propValue.xAxisNameGap" type="number" />
                        </el-form-item>

                        <!-- <el-form-item label="x轴线宽">
                <el-input v-model.number="curComponent.propValue.xAxisWidth" type="number" />
            </el-form-item>
            <el-form-item label="y轴颜色">
                <el-color-picker v-model="curComponent.propValue.yAxisColor" show-alpha></el-color-picker>
            </el-form-item> -->
                    </el-form>
                </el-collapse-item>
                <el-collapse-item title="y轴通用样式" name="yStyle">
                    <el-form>
                        <el-form-item label="y轴颜色">
                            <el-color-picker v-model="curComponent.propValue.yAxisColor" show-alpha></el-color-picker>
                        </el-form-item>
                        <el-form-item label="轴线">
                            <el-switch v-model="curComponent.propValue.showYAxis"> </el-switch>
                        </el-form-item>
                        <el-form-item label="轴线刻度">
                            <el-switch v-model="curComponent.propValue.showYAxisTick"> </el-switch>
                        </el-form-item>
                        <el-form-item label="留白">
                            <el-switch v-model="curComponent.propValue.yAxisBoundaryGap"> </el-switch>
                        </el-form-item>
                        <el-form-item label="反向">
                            <el-switch v-model="curComponent.propValue.yAxisInverse"> </el-switch>
                        </el-form-item>

                        <el-form-item label="标签">
                            <el-switch v-model="curComponent.propValue.showYAxisLabel"> </el-switch>
                        </el-form-item>
                        <el-form-item label="标签颜色">
                            <el-color-picker
                                v-model="curComponent.propValue.yAxisLabelColor"
                                show-alpha
                            ></el-color-picker>
                        </el-form-item>
                        <el-form-item label="标签大小">
                            <el-input v-model.number="curComponent.propValue.yAxisLabelSize" type="number" />
                        </el-form-item>
                        <el-form-item label="标签与轴线之间的距离">
                            <el-input v-model.number="curComponent.propValue.yAxisLabelMargin" type="number" />
                        </el-form-item>
                        <el-form-item label="坐标轴名称">
                            <el-input v-model="curComponent.propValue.yAxisName" />
                        </el-form-item>
                        <el-form-item label="坐标轴名称颜色">
                            <el-color-picker
                                v-model="curComponent.propValue.yAxisNameColor"
                                show-alpha
                            ></el-color-picker>
                        </el-form-item>
                        <el-form-item label="坐标轴名称与轴线之间的距离">
                            <el-input v-model.number="curComponent.propValue.yAxisNameGap" type="number" />
                        </el-form-item>

                        <!-- <el-form-item label="x轴线宽">
                <el-input v-model.number="curComponent.propValue.xAxisWidth" type="number" />
            </el-form-item>
            <el-form-item label="y轴颜色">
                <el-color-picker v-model="curComponent.propValue.yAxisColor" show-alpha></el-color-picker>
            </el-form-item> -->
                    </el-form>
                </el-collapse-item>
                <el-collapse-item title="图表内容样式" name="contentStyle">
                    <el-form>
                        <el-form-item label="颜色">
                            <el-color-picker v-model="curComponent.propValue.color" show-alpha></el-color-picker>
                        </el-form-item>
                        <el-form-item label="标签">
                            <el-switch v-model="curComponent.propValue.showLabel"> </el-switch>
                        </el-form-item>
                        <el-form-item label="标签颜色">
                            <el-color-picker v-model="curComponent.propValue.labelColor" show-alpha></el-color-picker>
                        </el-form-item>
                        <el-form-item label="标签大小">
                            <el-input v-model.number="curComponent.propValue.labelSize" type="number" />
                        </el-form-item>
                        <el-form-item label="标签位置">
                            <el-select v-model="curComponent.propValue.labelPosition" placeholder="请选择">
                                <el-option
                                    v-for="item in [
                                        {
                                            label: '上方',
                                            value: 'top',
                                        },
                                        {
                                            label: '下方',
                                            value: 'bottom',
                                        },
                                    ]"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="标签字重">
                            <el-select v-model="curComponent.propValue.labelWeight" placeholder="请选择">
                                <el-option
                                    v-for="item in [
                                        {
                                            label: '700',
                                            value: 700,
                                        },
                                        {
                                            label: '400',
                                            value: 400,
                                        },
                                    ]"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </el-collapse-item>
            </template>
            <template v-if="curComponent.category === 'pie'">
                <el-collapse-item title="图表内容样式" name="contentStyle">
                    <el-form>
                        <el-form-item label="颜色">
                            <el-select v-model="curComponent.propValue.color" placeholder="请选择">
                                <el-option
                                    v-for="item in [
                                        {
                                            label: '组合1',
                                            value: [
                                                'rgb(255, 162, 11)',
                                                'rgb(5, 222, 255)',
                                                'rgb(169, 99, 255)',
                                                'rgb(63, 229, 142)',
                                                'rgb(49, 117, 255)',
                                                'rgb(159, 159, 159)',
                                            ].join(']'),
                                        },
                                        {
                                            label: '组合2',
                                            value: [
                                                'rgb(255, 252, 212)',
                                                'rgb(54, 22, 25)',
                                                'rgb(19, 9, 255)',
                                                'rgb(6, 22, 142)',
                                                'rgb(49, 117, 25)',
                                                'rgb(159, 19, 159)',
                                            ].join(']'),
                                        },
                                    ]"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="标签">
                            <el-switch v-model="curComponent.propValue.showLabel"> </el-switch>
                        </el-form-item>
                        <el-form-item label="标签颜色">
                            <el-color-picker v-model="curComponent.propValue.labelColor" show-alpha></el-color-picker>
                        </el-form-item>
                        <el-form-item label="标签大小">
                            <el-input v-model.number="curComponent.propValue.labelSize" type="number" />
                        </el-form-item>
                        <el-form-item label="标签位置">
                            <el-select v-model="curComponent.propValue.labelPosition" placeholder="请选择">
                                <el-option
                                    v-for="item in [
                                        {
                                            label: '内部',
                                            value: 'inside',
                                        },
                                        {
                                            label: '外部',
                                            value: 'outside',
                                        },
                                    ]"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="标签字重">
                            <el-select v-model="curComponent.propValue.labelWeight" placeholder="请选择">
                                <el-option
                                    v-for="item in [
                                        {
                                            label: '700',
                                            value: 700,
                                        },
                                        {
                                            label: '400',
                                            value: 400,
                                        },
                                    ]"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="半径" v-if="curComponent.type === 'basePie'">
                            <el-input v-model.number="curComponent.propValue.radius" type="number" />
                        </el-form-item>
                        <template v-if="curComponent.type === 'circlePie'">
                            <el-form-item label="半径" v-for="item in curComponent.propValue.radius.length">
                                <el-input v-model.number="curComponent.propValue.radius[item - 1]" type="number" />
                            </el-form-item>
                        </template>

                        <el-form-item label="起始角度">
                            <el-input
                                v-model.number="curComponent.propValue.startAngle"
                                type="number"
                                :min="0"
                                :max="360"
                            />
                        </el-form-item>
                    </el-form>
                </el-collapse-item>
            </template>
            <el-collapse-item v-if="curComponent.category === 'line'" title="折线图样式" name="lineStyle">
                <el-form v-if="curComponent.type === 'baseLine'">
                    <el-form-item label="曲线平滑">
                        <el-switch v-model="curComponent.propValue.smooth"> </el-switch>
                    </el-form-item>
                    <el-form-item label="symbol">
                        <el-switch v-model="curComponent.propValue.showSymbol"> </el-switch>
                    </el-form-item>
                    <template v-if="curComponent.propValue.showSymbol">
                        <el-form-item label="symbol类型">
                            <el-select v-model="curComponent.propValue.symbol" placeholder="请选择">
                                <el-option
                                    v-for="item in [
                                        {
                                            label: 'emptyCircle',
                                            value: 'emptyCircle',
                                        },
                                        {
                                            label: 'circle',
                                            value: 'circle',
                                        },
                                        {
                                            label: 'rect',
                                            value: 'rect',
                                        },
                                        {
                                            label: 'roundRect',
                                            value: 'roundRect',
                                        },
                                        {
                                            label: 'triangle',
                                            value: 'triangle',
                                        },
                                        {
                                            label: 'diamond',
                                            value: 'diamond',
                                        },
                                        {
                                            label: 'pin',
                                            value: 'pin',
                                        },
                                        {
                                            label: 'arrow',
                                            value: 'arrow',
                                        },
                                        {
                                            label: 'none',
                                            value: 'none',
                                        },
                                    ]"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="symbol大小">
                            <el-input v-model.number="curComponent.propValue.symbolSize" type="number" />
                        </el-form-item>
                    </template>
                    <el-form-item label="区域颜色">
                        <el-color-picker v-model="curComponent.propValue.areaStyleColor" show-alpha></el-color-picker>
                    </el-form-item>
                </el-form>
                <el-form v-if="curComponent.type === 'doubleLine' ||curComponent.type === 'sixLine'" >
                    <template v-for="(item, index) in curComponent.propValue.length">
                        <el-form-item label="曲线平滑">
                            <el-switch v-model="curComponent.propValue.smooth[item - 1]"> </el-switch>
                        </el-form-item>
                    </template>
                    <template v-for="(item, index) in curComponent.propValue.length">
                        <el-form-item label="symbol">
                            <el-switch v-model="curComponent.propValue.showSymbol[item - 1]"> </el-switch>
                        </el-form-item>
                    </template>

                    <div v-for="(item, index) in curComponent.propValue.length">
                        <div v-if="curComponent.propValue.showSymbol[item - 1]">
                            <el-form-item label="symbol类型">
                                <el-select v-model="curComponent.propValue.symbol[item - 1]" placeholder="请选择">
                                    <el-option
                                        v-for="item in [
                                            {
                                                label: 'emptyCircle',
                                                value: 'emptyCircle',
                                            },
                                            {
                                                label: 'circle',
                                                value: 'circle',
                                            },
                                            {
                                                label: 'rect',
                                                value: 'rect',
                                            },
                                            {
                                                label: 'roundRect',
                                                value: 'roundRect',
                                            },
                                            {
                                                label: 'triangle',
                                                value: 'triangle',
                                            },
                                            {
                                                label: 'diamond',
                                                value: 'diamond',
                                            },
                                            {
                                                label: 'pin',
                                                value: 'pin',
                                            },
                                            {
                                                label: 'arrow',
                                                value: 'arrow',
                                            },
                                            {
                                                label: 'none',
                                                value: 'none',
                                            },
                                        ]"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    >
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="symbol大小">
                                <el-input v-model.number="curComponent.propValue.symbolSize[item - 1]" type="number" />
                            </el-form-item>
                        </div>
                    </div>

                    <el-form-item v-for="(item, index) in curComponent.propValue.length" label="区域颜色" :key="index">
                        <el-color-picker
                            v-model="curComponent.propValue.areaStyleColor[item - 1]"
                            show-alpha
                        ></el-color-picker>
                    </el-form-item>
                </el-form>
            </el-collapse-item>
            <el-collapse-item v-if="curComponent.category === 'bar'" title="柱状图样式" name="barStyle">
                <el-form v-if="['baseBar','doubleBar','sixBar'].includes(curComponent.type)">
                    <el-form-item label="border边框" v-for="item in curComponent.propValue.borderRadius.length">
                        <template v-for="itm in curComponent.propValue.borderRadius[item-1].length">
                            {{positionList[itm-1]}}
                        <el-input v-model.number="curComponent.propValue.borderRadius[item-1][itm-1]" type="number" :min="0" />
                        </template>
                    </el-form-item>
                </el-form>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
import CommonAttr from "@/custom-component/common/CommonAttr.vue";

export default {
    components: { CommonAttr },
    computed: {
        curComponent() {
            return this.$store.state.curComponent;
        },
    },
    data() {
        return {
            positionList:["上","右","下","左"],
            activeName: "xStyle",
        };
    },
    methods: {
        onChange() {},
    },
    // watch: {
    //     "curComponent.propValue": {
    //         handler(newV, oldV) {
    //             console.log(111);
    //         },
    //         deep: true,
    //     },
    // },
};
</script>
