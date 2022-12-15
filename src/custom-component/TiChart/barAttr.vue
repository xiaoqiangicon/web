<template>
    <div>
        <el-tabs
            v-if="['baseBar', 'doubleBar', 'sixBar', 'lineBar', 'complexBar', 'rectBar'].includes(curComponent.type)"
            v-model="activeName"
        >
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
                    <el-form-item label="柱体颜色" v-if="curComponent.type !== 'rectBar'">
                        <el-color-picker
                            v-model="curComponent.propValue.itemStyleColor[item - 1]"
                            show-alpha
                        ></el-color-picker>
                    </el-form-item>
                    <el-form-item label="柱宽">
                        <el-input v-model.number="curComponent.propValue.barWidth[item - 1]" type="number" />
                    </el-form-item>
                    <template v-if="curComponent.type !== 'rectBar'">
                        <el-form-item label="border边框" v-for="item in curComponent.propValue.borderRadius.length">
                            <template v-for="itm in curComponent.propValue.borderRadius[item - 1].length">
                                {{ positionList[itm - 1] }}
                                <el-input
                                    v-model.number="curComponent.propValue.borderRadius[item - 1][itm - 1]"
                                    type="number"
                                    :min="0"
                                />
                            </template>
                        </el-form-item>
                    </template>
                </el-form>
            </el-tab-pane>
        </el-tabs>
        <el-tabs v-else v-model="activeName">
            <el-form>
                <el-form-item label="颜色">
                    <el-color-picker v-model="curComponent.propValue.itemStyleColor[2]" show-alpha></el-color-picker>
                </el-form-item>
                <el-form-item label="标签">
                    <el-switch v-model="curComponent.propValue.showLabel[2]"> </el-switch>
                </el-form-item>
                <el-form-item label="标签颜色">
                    <el-color-picker v-model="curComponent.propValue.labelColor[2]" show-alpha></el-color-picker>
                </el-form-item>
                <el-form-item label="标签大小">
                    <el-input v-model.number="curComponent.propValue.labelSize[2]" type="number" />
                </el-form-item>
                <el-form-item label="标签位置">
                    <el-select v-model="curComponent.propValue.labelPosition[2]" placeholder="请选择">
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
                    <el-select v-model="curComponent.propValue.labelWeight[2]" placeholder="请选择">
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
                <el-form-item label="柱体颜色">
                    <el-color-picker v-model="curComponent.propValue.itemStyleColor[2]" show-alpha></el-color-picker>
                </el-form-item>
                <el-form-item label="柱宽">
                    <el-input v-model.number="curComponent.propValue.barWidth[2]" type="number" />
                </el-form-item>
                <el-form-item label="border边框">
                    <template v-for="itm in curComponent.propValue.borderRadius[2].length">
                        {{ positionList[itm - 1] }}
                        <el-input
                            v-model.number="curComponent.propValue.borderRadius[2][itm - 1]"
                            type="number"
                            :min="0"
                        />
                    </template>
                </el-form-item>
            </el-form>
        </el-tabs>
    </div>
</template>

<script>
export default {
    components: {},
    computed: {
        curComponent() {
            return this.$store.state.curComponent;
        },
    },
    data() {
        return {
            activeName: "attr0",
            positionList: ["上", "右", "下", "左"],
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
