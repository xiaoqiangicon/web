<template>
    <div>
        <el-tabs v-if="['baseLine', 'doubleLine', 'sixLine'].includes(curComponent.type)" v-model="activeName">
            <el-tab-pane
                v-for="item in curComponent.propValue.showLabel.length"
                :label="'值属性' + (item - 1)"
                :name="'attr' + (item - 1)"
            >

                <el-form>
                    <!-- <el-form-item label="颜色">
                                    <el-color-picker
                                        v-model="curComponent.propValue.itemStyleColor[item-1]"
                                        show-alpha
                                    ></el-color-picker>
                                </el-form-item> -->
                    <el-form-item label="标签">
                        <el-switch v-model="curComponent.propValue.showLabel[item - 1]"> </el-switch>
                    </el-form-item>
                    <el-form-item label="标签颜色">
                        <el-color-picker
                            v-model="curComponent.propValue.labelColor[item - 1]"
                            show-alpha
                        ></el-color-picker>
                    </el-form-item>
                    <el-form-item label="标签大小">
                        <el-input v-model.number="curComponent.propValue.labelSize[item - 1]" type="number" />
                    </el-form-item>
                    <el-form-item label="标签位置">
                        <el-select v-model="curComponent.propValue.labelPosition[item - 1]" placeholder="请选择">
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
                        <el-select v-model="curComponent.propValue.labelWeight[item - 1]" placeholder="请选择">
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
                        <el-form-item label="曲线平滑">
                            <el-switch v-model="curComponent.propValue.smooth[item - 1]"> </el-switch>
                        </el-form-item>


                        <el-form-item label="symbol">
                            <el-switch v-model="curComponent.propValue.showSymbol[item - 1]"> </el-switch>
                        </el-form-item>



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
 

                    <el-form-item  label="区域颜色">
                        <el-color-picker
                            v-model="curComponent.propValue.areaStyleColor[item - 1]"
                            show-alpha
                        ></el-color-picker>
                    </el-form-item>
                    <el-form-item  label="线条颜色">
                        <el-color-picker
                            v-model="curComponent.propValue.itemStyleColor[item - 1]"
                            show-alpha
                        ></el-color-picker>
                    </el-form-item>
                    
                </el-form>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>

export default {
    components: {  },
    computed: {
        curComponent() {
            return this.$store.state.curComponent;
        },
    },
    data() {
        return {
            activeName: "attr0",
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
